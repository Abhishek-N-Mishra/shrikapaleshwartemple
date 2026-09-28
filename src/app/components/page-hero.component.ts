import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  template: `
    <section class="page-hero page-hero-lg page-hero-photo" [attr.aria-label]="title">
      <img
        class="page-hero-fill"
        src="assets/images/darshan-hero-marble.png"
        alt=""
        aria-hidden="true"
        width="1920"
        height="1080">
      <img
        class="page-hero-photo-img"
        src="assets/images/darshan-hero.png"
        [alt]="title"
        width="1920"
        height="1080">
      <div class="page-hero-overlay"></div>
      <div class="container page-hero-copy">
        <span class="eyebrow">{{ eyebrow }}</span>
        <h1>{{ title }}</h1>
        @if (intro) {
          <p class="page-hero-lead">{{ intro }}</p>
        }
        <span class="title-rule page-hero-rule" aria-hidden="true"></span>
      </div>
    </section>
  `
})
export class PageHeroComponent {
  @Input() title = '';
  @Input() eyebrow = '';
  @Input() intro = '';
}
