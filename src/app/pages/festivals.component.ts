import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { SectionTitleComponent } from '../components/section-title.component';
import { festivalsPageCopy } from '../data/festivals-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-festivals',
  standalone: true,
  imports: [PageClosingComponent, PageHeroComponent, RouterLink, SectionTitleComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section festival-section festivals-page content-page">
      <div class="container">
        <app-section-title [title]="copy.sectionTitle" [description]="copy.sectionDescription" />
        <div class="festival-grid festival-grid-page">
          @for (festival of copy.cards; track festival.id) {
            <article class="festival-card">
              <img [src]="festival.image" [alt]="festival.title" width="560" height="270" loading="lazy">
              <div class="festival-body">
                <span class="festival-symbol" aria-hidden="true">{{ festival.symbol }}</span>
                <p class="festival-category">{{ festival.category }}</p>
                <h2>{{ festival.title }}</h2>
                <p>{{ festival.description }}</p>
              </div>
            </article>
          }
        </div>

        <div class="festivals-panel">
          <h2>{{ copy.specialTitle }}</h2>
          <p>{{ copy.specialBody }}</p>
          <a routerLink="/contact" class="text-link">{{ copy.specialContactLink }}</a>
        </div>

        <div class="festivals-faith">
          <h2>{{ copy.faithTitle }}</h2>
          <p>{{ copy.faithBody }}</p>
        </div>
        <app-page-closing />
      </div>
    </section>
  `
})
export class FestivalsComponent {
  private readonly lang = inject(LanguageService);
  readonly page = computed(() => festivalsPageCopy[this.lang.lang()]);
}
