import { Injectable, computed, effect, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';
import { copies, metaDescriptions, pageTitles, type Lang } from '../data/translations';

const STORAGE_KEY = 'kapaleshwar-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly router = inject(Router);

  readonly lang = signal<Lang>(this.readStored());
  readonly t = computed(() => copies[this.lang()]);

  constructor() {
    this.applyDocument(this.lang());
    this.applySeo();

    effect(() => {
      const lang = this.lang();
      this.persist(lang);
      this.applyDocument(lang);
      this.applySeo();
    });

    this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => this.applySeo());
  }

  setLang(lang: Lang): void {
    if (this.lang() !== lang) {
      this.lang.set(lang);
    }
  }

  private applyDocument(lang: Lang): void {
    document.documentElement.lang = lang;
  }

  private applySeo(): void {
    const key = this.routeKey();
    const lang = this.lang();
    this.title.setTitle(pageTitles[lang][key] ?? pageTitles[lang]['home']);
    this.meta.updateTag({ name: 'description', content: metaDescriptions[lang] });
  }

  private routeKey(): string {
    const path = this.router.url.split('?')[0].replace(/^\//, '');
    return path || 'home';
  }

  private readStored(): Lang {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'hi';
    } catch {
      return 'hi';
    }
  }

  private persist(lang: Lang): void {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore storage errors */
    }
  }
}
