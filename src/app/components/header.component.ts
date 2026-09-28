import { Component, computed, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter } from 'rxjs';
import { LanguageService } from '../services/language.service';
import type { Lang } from '../data/translations';

interface NavChild {
  path: string;
  label: string;
}

interface NavItem {
  path: string;
  label: string;
  children?: NavChild[];
}

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    @let t = lang.t();
    <header class="site-header">
      <div class="header-inner container">
        <a class="brand" routerLink="/" (click)="closeMenu()">
          <img src="assets/images/mahadev-shrine.png" [alt]="t.mahadevAlt" class="brand-mark">
          <span class="brand-text">
            <strong>{{ t.brandName }}</strong>
            <small>{{ t.location }}</small>
          </span>
        </a>

        <nav
          id="primary-navigation"
          class="main-nav"
          [class.open]="menuOpen"
          [attr.aria-label]="t.navAria">
          @for (item of navItems(); track item.path) {
            @if (item.children; as children) {
              <div
                class="nav-item has-sub"
                [class.open]="subOpen === item.path"
                [class.hover-off]="hoverLocked"
                [class.active]="isSectionActive(children)"
                (mouseleave)="unlockHover()">
                <button
                  type="button"
                  class="nav-parent"
                  [class.active]="isSectionActive(children)"
                  [attr.aria-expanded]="subOpen === item.path"
                  (click)="toggleSub(item.path, $event)">
                  {{ item.label }}
                </button>
                <div class="nav-sub">
                  @for (child of children; track child.path) {
                    <a
                      [routerLink]="child.path"
                      routerLinkActive="active"
                      [routerLinkActiveOptions]="{exact: true}"
                      (click)="closeSubAndMenu()">
                      {{ child.label }}
                    </a>
                  }
                </div>
              </div>
            } @else {
              <a
                [routerLink]="item.path"
                routerLinkActive="active"
                [routerLinkActiveOptions]="{exact: item.path === '/'}"
                (click)="closeMenu()">
                {{ item.label }}
              </a>
            }
          }
        </nav>

        <div class="header-tools">
          <div class="lang-switch" role="group" [attr.aria-label]="t.langGroup">
            <button
              type="button"
              [class.active]="lang.lang() === 'hi'"
              [attr.aria-pressed]="lang.lang() === 'hi'"
              (click)="setLang('hi')">
              {{ t.langHindi }}
            </button>
            <button
              type="button"
              [class.active]="lang.lang() === 'en'"
              [attr.aria-pressed]="lang.lang() === 'en'"
              (click)="setLang('en')">
              {{ t.langEnglish }}
            </button>
          </div>

          <button
            class="menu-toggle"
            type="button"
            [attr.aria-expanded]="menuOpen"
            aria-controls="primary-navigation"
            [attr.aria-label]="menuOpen ? t.menuClose : t.menuOpen"
            (click)="menuOpen = !menuOpen">
            <span></span><span></span><span></span>
          </button>

          <div class="header-trident" aria-hidden="true">🔱</div>
        </div>
      </div>
      <div class="welcome-ticker" [attr.aria-label]="t.tickerAria">
        <span class="welcome-ticker-label">{{ t.tickerLabel }}</span>
        <div class="welcome-ticker-track">
          <p class="welcome-ticker-text">{{ t.tickerMessage }}</p>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent {
  readonly lang = inject(LanguageService);
  private readonly router = inject(Router);
  menuOpen = false;
  subOpen: string | null = null;
  hoverLocked = false;

  constructor() {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntilDestroyed()
      )
      .subscribe(() => this.closeMenu());
  }

  readonly navItems = computed((): NavItem[] => {
    const t = this.lang.t();
    return [
      { path: '/', label: t.navHome },
      {
        path: '/about',
        label: t.navAbout,
        children: [
          { path: '/about', label: t.navTemple },
          { path: '/history', label: t.navHistory }
        ]
      },
      { path: '/darshan', label: t.navDarshan },
      { path: '/festivals', label: t.navFestivals },
      { path: '/gallery', label: t.navGallery },
      { path: '/donation', label: t.navDonation },
      { path: '/contact', label: t.navContact }
    ];
  });

  isSectionActive(children: NavChild[]): boolean {
    const url = this.router.url.split('?')[0];
    return children.some((child) => child.path === url);
  }

  toggleSub(path: string, event: Event): void {
    event.preventDefault();
    event.stopPropagation();
    this.subOpen = this.subOpen === path ? null : path;
  }

  setLang(next: Lang): void {
    this.lang.setLang(next);
  }

  unlockHover(): void {
    this.hoverLocked = false;
  }

  closeSubAndMenu(): void {
    this.hoverLocked = true;
    this.closeMenu();
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.subOpen = null;
    const focused = document.activeElement;
    if (focused instanceof HTMLElement) {
      focused.blur();
    }
  }
}
