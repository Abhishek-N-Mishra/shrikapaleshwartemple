import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageClosingComponent } from '../components/page-closing.component';
import { MapPreviewComponent } from '../components/map-preview.component';
import { SectionTitleComponent } from '../components/section-title.component';
import { galleryAlbums } from '../data/gallery-content';
import { homeCopy, homeFestivals } from '../data/home-content';
import { templeInfo } from '../data/temple-data';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PageClosingComponent, RouterLink, SectionTitleComponent, MapPreviewComponent],
  template: `
    @let t = lang.t();
    @let copy = home();
    @let locale = lang.lang();

    <section class="hero" [attr.aria-label]="t.heroAria">
      <img class="hero-photo hero-photo-a" src="assets/images/hero/hero-temple-front.png" [alt]="t.heroAria">
      <img class="hero-photo hero-photo-b" src="assets/images/hero/hero-slide-shivling.png" [alt]="t.heroAria">
      <div class="hero-overlay"></div>
      <div class="hero-content container">
        <div class="hero-copy">
          <span class="hero-om" aria-hidden="true">ॐ</span>
          <p class="hero-temple-name">{{ t.heroTempleName }}</p>
          <span class="hero-rule" aria-hidden="true"></span>
          <h1>{{ t.heroLine1 }}<br>{{ t.heroLine2 }}</h1>
          <p class="hero-location">{{ t.location }}</p>
          <div class="hero-actions">
            <a routerLink="/about" class="btn btn-primary">{{ t.heroAbout }}</a>
            <a routerLink="/darshan" class="btn btn-primary">{{ t.heroDirections }}</a>
          </div>
        </div>
      </div>
    </section>

    <section class="section intro-section">
      <div class="container intro-grid">
        <div class="intro-copy">
          <app-section-title [eyebrow]="t.introEyebrow" [title]="t.introTitle" [description]="t.introSubtitle" />
          <p>{{ t.introBody }}</p>
          <p>{{ t.introBody2 }}</p>
          <a routerLink="/about" class="text-link">{{ t.introLink }}</a>
        </div>
        <div class="image-card">
          <img src="assets/images/aerial-photo.png" [alt]="t.introImageAlt" width="500" height="625" loading="lazy">
        </div>
      </div>
    </section>

    <section class="section history-strip">
      <div class="container history-grid">
        <div class="history-copy">
          <span class="icon-badge" aria-hidden="true">ॐ</span>
          <h2>{{ t.historyTitle }}</h2>
          <span class="title-rule" aria-hidden="true"></span>
          <p>{{ t.historyBody }}</p>
          <p>{{ t.historyBody2 }}</p>
          @if (t.historyBody3) {
            <p>{{ t.historyBody3 }}</p>
          }
          <a routerLink="/history" class="text-link">{{ t.historyLink }}</a>
        </div>
        <div class="history-art">
          <img
            src="assets/gallery/temple-premises/1.jpg"
            [alt]="t.historyImageAlt"
            width="560"
            height="448"
            loading="lazy">
        </div>
      </div>
    </section>

    <section class="section festival-section">
      <div class="container">
        <app-section-title [eyebrow]="t.festivalsEyebrow" [title]="t.festivalsTitle" />
        <div class="festival-grid home-festival-grid">
          @for (festival of festivals; track festival.id) {
            <article class="festival-card">
              <img [src]="festival.image" [alt]="festival.title[locale]" width="560" height="270" loading="lazy">
              <div class="festival-body">
                <span class="festival-symbol" aria-hidden="true">🔱</span>
                <h3>{{ festival.title[locale] }}</h3>
                <p>{{ festival.description[locale] }}</p>
                <a routerLink="/festivals" class="text-link">{{ t.festivalsLink }}</a>
              </div>
            </article>
          }
        </div>
      </div>
    </section>

    <section class="section gallery-section">
      <div class="container">
        <div class="section-heading-row">
          <app-section-title [eyebrow]="t.galleryEyebrow" [title]="t.galleryTitle" />
          <a routerLink="/gallery" class="text-link">{{ t.galleryLink }}</a>
        </div>
        <div class="gallery-grid">
          @for (album of albums; track album.id) {
            <a routerLink="/gallery" class="gallery-tile">
              <img
                [src]="album.cover"
                [alt]="album.items[0].alt[locale]"
                width="380"
                height="240"
                loading="lazy">
              <span>{{ album.title[locale] }}</span>
            </a>
          }
        </div>
      </div>
    </section>

    <section class="section lower-section">
      <div class="container lower-grid">
        <div class="video-card donation-home-card">
          <div class="video-icon" aria-hidden="true">ॐ</div>
          <app-section-title
            [eyebrow]="t.donationHomeEyebrow"
            [title]="t.donationHomeTitle"
            [description]="t.donationHomeBody" />
          <div class="video-placeholder">
            <img src="assets/images/donation-box.png" [alt]="t.donationHomeImageAlt" width="560" height="315" loading="lazy">
          </div>
          <a routerLink="/donation" class="text-link">{{ t.donationHomeButton }}</a>
        </div>

        <div class="location-card">
          <div class="location-icon" aria-hidden="true">🔱</div>
          <app-section-title
            [eyebrow]="t.locationShort"
            [title]="t.mapTitle"
            [description]="t.mapHomeBody" />
          <app-map-preview [label]="t.mapButton" [href]="templeInfo.mapUrl" />
          <a routerLink="/contact" class="text-link">{{ t.mapContactLink }}</a>
        </div>
      </div>
    </section>

    <section class="section home-plan-section" aria-labelledby="home-plan-title">
      <div class="container home-plan-inner">
        <h2 id="home-plan-title" class="home-section-title">{{ copy.planVisitTitle }}</h2>
        <p class="home-plan-lead">{{ copy.planVisitBody }}</p>
        <div class="home-plan-actions">
          <a routerLink="/contact" fragment="how-to-reach" class="btn btn-primary">{{ copy.planReachButton }}</a>
        </div>
      </div>
    </section>

    <section class="section home-closing-section">
      <div class="container home-closing-wrap">
        <app-page-closing />
      </div>
    </section>
  `
})
export class HomeComponent {
  readonly lang = inject(LanguageService);
  readonly home = computed(() => homeCopy[this.lang.lang()]);
  readonly festivals = homeFestivals;
  readonly albums = galleryAlbums;
  readonly templeInfo = templeInfo;
}
