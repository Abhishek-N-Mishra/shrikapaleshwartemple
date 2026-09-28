import { Component, computed, inject } from '@angular/core';
import { PageHeroComponent } from '../components/page-hero.component';
import { PageClosingComponent } from '../components/page-closing.component';
import { donationCopy, donationUpi } from '../data/donation-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-donation',
  standalone: true,
  imports: [PageClosingComponent, PageHeroComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page donation-page">
      <div class="container narrow">
        <h2>{{ copy.heading }}</h2>
        <p>{{ copy.lead }}</p>

        <h2>{{ copy.upiHeading }}</h2>
        <p>{{ copy.upiLead }}</p>
        <div class="upi-card">
          <h3>{{ copy.upiHeading }}</h3>
          <div class="upi-card-body">
            <div class="upi-card-details">
              <p class="upi-label">{{ copy.upiNameLabel }}</p>
              <p class="upi-name">{{ upi.name }}</p>
              <p class="upi-label">{{ copy.upiNumberLabel }}</p>
              <p class="upi-number">{{ upi.number }}</p>
            </div>
            @if (upi.qrImage) {
              <img class="upi-qr-image" [src]="upi.qrImage" [alt]="copy.qrHeading">
            } @else {
              <div class="upi-qr-frame" aria-hidden="true"></div>
            }
          </div>
        </div>

        <h2>{{ copy.beforeHeading }}</h2>
        <div class="notice">{{ copy.verifyNotice }}</div>

        <h2>{{ copy.afterHeading }}</h2>
        <div class="notice">
          <ol class="donation-after-steps">
            <li>
              {{ copy.afterStep1Before }}<a
                class="whatsapp-text-link"
                [href]="upi.whatsappUrl"
                target="_blank"
                rel="noopener noreferrer">
                <span class="social-icon social-icon-whatsapp" aria-hidden="true">
                  <svg viewBox="0 0 24 24"><path fill="currentColor" d="M12 3a8.8 8.8 0 0 0-7.6 13.3L3.6 20.4l4.2-.8A8.8 8.8 0 1 0 12 3zm0 16a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.5.5.5-2.4-.2-.3A7.2 7.2 0 1 1 12 19zm4-5.3c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1-.5.7-.7.8-.3.1-.5 0a5.9 5.9 0 0 1-1.7-1.1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.1-.3c0-.1 0-.3-.1-.4s-.5-1.2-.7-1.6-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3s-.7.7-.7 1.7.7 2 1.9 3.1c1.4 1.3 2.7 1.7 3.2 1.9a3 3 0 0 0 1.9.1 2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c0-.1-.2-.1-.4-.2z"/></svg>
                </span>
                {{ upi.number }}
              </a>{{ copy.afterStep1After }}
            </li>
            <li>{{ copy.afterStep2 }}</li>
          </ol>
        </div>
        <p>{{ copy.contactNote }}</p>

        <h2>{{ copy.sevaHeading }}</h2>
        <article class="info-card">
          <span aria-hidden="true">ॐ</span>
          <h2>{{ copy.upkeepTitle }}</h2>
          <p>{{ copy.upkeepBody }}</p>
        </article>

        <div class="about-close">
          <h2>{{ copy.gratitudeHeading }}</h2>
          <p>{{ copy.gratitudeBody }}</p>
          <p class="about-mantra">{{ copy.blessing }}</p>
        </div>
        <app-page-closing />
      </div>
    </section>
  `
})
export class DonationComponent {
  private readonly lang = inject(LanguageService);
  readonly page = computed(() => donationCopy[this.lang.lang()]);
  readonly upi = donationUpi;
}
