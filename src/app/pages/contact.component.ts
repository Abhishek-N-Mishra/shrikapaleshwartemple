import { Component, computed, DestroyRef, inject } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { MapPreviewComponent } from '../components/map-preview.component';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { SocialLinksComponent } from '../components/social-links.component';
import { contactCopy, contactDetails } from '../data/contact-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MapPreviewComponent, PageClosingComponent, PageHeroComponent, SocialLinksComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page contact-page">
      <div class="container narrow">
        <h2 class="about-temple-name">{{ copy.templeName }}</h2>
        <p class="about-subtitle">{{ copy.subtitle }}</p>
        @for (p of copy.intro; track p) {
          <p>{{ p }}</p>
        }

        <h2>{{ copy.addressHeading }}</h2>
        <div class="address-card">
          <strong>{{ copy.addressName }}</strong><br>
          {{ copy.addressLine1 }}<br>
          {{ copy.addressLine2 }}
        </div>
        <p>{{ copy.addressNote }}</p>

        <h2>{{ copy.reachHeading }}</h2>
        <div class="contact-details">
          <p><strong>{{ copy.nameLabel }}:</strong> {{ details.name }}</p>
          <p><strong>{{ copy.phoneLabel }}:</strong> <a [href]="details.phoneHref">{{ details.phone }}</a></p>
          <p><strong>{{ copy.emailLabel }}:</strong> <a [href]="details.emailHref">{{ details.email }}</a></p>
          <p><strong>{{ copy.hoursLabel }}:</strong> {{ copy.hours }}</p>
        </div>
        <app-social-links [showHeading]="true" />
        <p>{{ copy.reachNote }}</p>

        <h2 id="how-to-reach" class="contact-page-anchor">{{ copy.directionsHeading }}</h2>
        <h3 class="contact-subhead">{{ copy.railHeading }}</h3>
        @for (p of copy.railBody; track p) {
          <p>{{ p }}</p>
        }
        <h3 class="contact-subhead">{{ copy.roadHeading }}</h3>
        @for (p of copy.roadBody; track p) {
          <p>{{ p }}</p>
        }
        <h3 class="contact-subhead">{{ copy.mapHeading }}</h3>
        <p>{{ copy.mapBody }}</p>
        <app-map-preview [label]="copy.mapButton" [href]="details.mapUrl" [large]="true" />

        <h2>{{ copy.formHeading }}</h2>
        <p>{{ copy.formLead }}</p>
        <form class="contact-form" (submit)="sendMessage($event, copy)">
          <label>
            {{ copy.nameLabel }}*
            <input name="name" type="text" required [placeholder]="copy.namePlaceholder">
          </label>
          <label>
            {{ copy.mobileLabel }}
            <input name="mobile" type="tel" [placeholder]="copy.mobilePlaceholder">
          </label>
          <label>
            {{ copy.subjectLabel }}*
            <input name="subject" type="text" required [placeholder]="copy.subjectPlaceholder">
          </label>
          <label>
            {{ copy.messageLabel }}*
            <textarea name="message" rows="5" required [placeholder]="copy.messagePlaceholder"></textarea>
          </label>
          <button type="submit" class="btn btn-primary">{{ copy.submit }}</button>
          <p class="form-hint">{{ copy.formHint }}</p>
        </form>

        <div class="about-close">
          <p>{{ copy.welcome }}</p>
        </div>
        <app-page-closing />
      </div>
    </section>
  `
})
export class ContactComponent {
  private static readonly howToReachId = 'how-to-reach';

  private readonly lang = inject(LanguageService);
  private readonly route = inject(ActivatedRoute);
  private readonly destroyRef = inject(DestroyRef);

  readonly page = computed(() => contactCopy[this.lang.lang()]);
  readonly details = contactDetails;

  constructor() {
    this.route.fragment.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((fragment) => {
      if (fragment !== ContactComponent.howToReachId) {
        return;
      }
      this.scheduleScrollToHowToReach();
    });
  }

  private scheduleScrollToHowToReach(): void {
    const run = () => this.scrollToHowToReach();
    queueMicrotask(run);
    requestAnimationFrame(run);
    setTimeout(run, 0);
    setTimeout(run, 120);
    setTimeout(run, 350);
    setTimeout(run, 600);
  }

  private scrollToHowToReach(): void {
    const el = document.getElementById(ContactComponent.howToReachId);
    if (!el) {
      return;
    }
    const root = document.documentElement;
    const header = parseFloat(getComputedStyle(root).getPropertyValue('--header-row')) || 90;
    const ticker = parseFloat(getComputedStyle(root).getPropertyValue('--ticker-h')) || 40;
    const offset = header + ticker + 24;
    const top = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: Math.max(0, top), behavior: 'auto' });
  }

  sendMessage(event: Event, copy: (typeof contactCopy)['hi']): void {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const mobile = String(data.get('mobile') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();
    const lines = [copy.formGreeting, '', message, '', copy.formThanks, name];
    if (mobile) {
      lines.push(mobile);
    }
    const body = lines.join('\n');
    const href = `${this.details.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = href;
  }
}
