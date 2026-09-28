import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { SectionTitleComponent } from '../components/section-title.component';
import { darshanCopy } from '../data/darshan-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-darshan',
  standalone: true,
  imports: [PageClosingComponent, PageHeroComponent, RouterLink, SectionTitleComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page darshan-page">
      <div class="container">
        <app-section-title [title]="copy.infoTitle" [description]="copy.intro" />
        <div class="info-grid darshan-info-grid">
          <article class="info-card">
            <span aria-hidden="true">◷</span>
            <h2>{{ copy.timeTitle }}</h2>
            <p>{{ copy.timeBody }}</p>
            <ul class="darshan-schedule">
              @for (slot of copy.timeSlots; track slot) {
                <li>{{ slot }}</li>
              }
            </ul>
          </article>
          <article class="info-card">
            <span aria-hidden="true">ॐ</span>
            <h2>{{ copy.pujaTitle }}</h2>
            <p>{{ copy.pujaBody }}</p>
          </article>
          <article class="info-card">
            <span aria-hidden="true">🔱</span>
            <h2>{{ copy.aartiTitle }}</h2>
            <p>{{ copy.aartiBody }}</p>
            <ul class="darshan-schedule">
              @for (slot of copy.aartiSlots; track slot) {
                <li>{{ slot }}</li>
              }
            </ul>
          </article>
        </div>

        <div class="notice">{{ copy.notice }}</div>

        <h2>{{ copy.specialTitle }}</h2>
        <p>{{ copy.specialBody }}</p>
        <p>{{ copy.specialExtra }}</p>

        <h2>{{ copy.visitTitle }}</h2>
        <p>{{ copy.visitIntro }}</p>
        <ul class="darshan-visit-list">
          @for (point of copy.visitPoints; track point) {
            <li>{{ point }}</li>
          }
        </ul>

        <div class="darshan-cta">
          <h2>{{ copy.ctaTitle }}</h2>
          <p>{{ copy.ctaBody }}</p>
          <a routerLink="/contact" class="text-link">{{ copy.ctaButton }}</a>
        </div>
        <app-page-closing />
      </div>
    </section>
  `
})
export class DarshanComponent {
  private readonly lang = inject(LanguageService);
  readonly page = computed(() => darshanCopy[this.lang.lang()]);
}
