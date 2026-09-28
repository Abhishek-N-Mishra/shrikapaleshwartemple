import { NgTemplateOutlet } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { socialCopy, socialLinks } from '../data/temple-data';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-social-links',
  standalone: true,
  imports: [NgTemplateOutlet],
  template: `
    @let locale = lang.lang();
    @let copy = socialCopy[locale];
    <nav
      class="social-links"
      [class.social-links-footer]="variant === 'footer'"
      [attr.aria-label]="copy.aria">
      @if (showHeading) {
        <p class="social-heading">{{ copy.heading }}</p>
        <p class="social-description">{{ copy.description }}</p>
      }
      <div class="social-icons">
        @for (link of links; track link.id) {
          @if (link.url) {
            <a
              [class]="'social-icon social-icon-' + link.id"
              [href]="link.url"
              target="_blank"
              rel="noopener noreferrer"
              [attr.aria-label]="link.label[locale]"
              [attr.title]="variant === 'footer' ? copy.heading : link.label[locale]">
              <ng-container [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ id: link.id }" />
            </a>
          } @else {
            <span
              [class]="'social-icon social-icon-pending social-icon-' + link.id"
              [attr.aria-label]="link.label[locale]"
              [attr.title]="variant === 'footer' ? copy.heading : link.label[locale]">
              <ng-container [ngTemplateOutlet]="icon" [ngTemplateOutletContext]="{ id: link.id }" />
            </span>
          }
        }
      </div>
    </nav>

    <ng-template #icon let-id="id">
      @switch (id) {
        @case ('facebook') {
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h2.6l.4-3H13v-2c0-.6.4-1 1-1z"/></svg>
        }
        @case ('instagram') {
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M8 3h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8a5 5 0 0 1 5-5zm8 2H8a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm-4 2.8A4.2 4.2 0 1 1 7.8 12 4.2 4.2 0 0 1 12 7.8zm0 2A2.2 2.2 0 1 0 14.2 12 2.2 2.2 0 0 0 12 9.8zM17.2 7a1 1 0 1 1-1 1 1 1 0 0 1 1-1z"/></svg>
        }
        @case ('youtube') {
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M22 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C18.2 5.4 12 5.4 12 5.4s-6.2 0-7.8.4c-.9.2-1.6.9-1.8 1.8C2 9 2 12.2 2 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 7.8.4 7.8.4s6.2 0 7.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM10 15.2V9.2l5.2 3z"/></svg>
        }
        @case ('whatsapp') {
          <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 3a8.8 8.8 0 0 0-7.6 13.3L3.6 20.4l4.2-.8A8.8 8.8 0 1 0 12 3zm0 16a7.2 7.2 0 0 1-3.7-1l-.3-.2-2.5.5.5-2.4-.2-.3A7.2 7.2 0 1 1 12 19zm4-5.3c-.2-.1-1.2-.6-1.4-.7s-.3-.1-.5.1-.5.7-.7.8-.3.1-.5 0a5.9 5.9 0 0 1-1.7-1.1 6.5 6.5 0 0 1-1.2-1.5c-.1-.2 0-.3.1-.4l.3-.4.1-.3c0-.1 0-.3-.1-.4s-.5-1.2-.7-1.6-.4-.4-.5-.4h-.4c-.2 0-.4.1-.6.3s-.7.7-.7 1.7.7 2 1.9 3.1c1.4 1.3 2.7 1.7 3.2 1.9a3 3 0 0 0 1.9.1 2.3 2.3 0 0 0 1.5-1.1 1.9 1.9 0 0 0 .1-1.1c0-.1-.2-.1-.4-.2z"/></svg>
        }
      }
    </ng-template>
  `
})
export class SocialLinksComponent {
  readonly lang = inject(LanguageService);
  readonly links = socialLinks;
  readonly socialCopy = socialCopy;

  @Input() variant: 'footer' | 'page' = 'page';
  @Input() showHeading = false;
}
