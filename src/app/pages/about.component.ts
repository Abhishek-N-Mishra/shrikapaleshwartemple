import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { aboutCopy } from '../data/about-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, PageClosingComponent, PageHeroComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page about-page">
      <div class="container narrow">
        <h2 class="about-temple-name">{{ copy.templeName }}</h2>
        <p class="about-subtitle">{{ copy.subtitle }}</p>
        @for (p of copy.intro; track p) {
          <p>{{ p }}</p>
        }
        @for (section of copy.sections; track section.heading) {
          <h2>{{ section.heading }}</h2>
          @for (p of section.paragraphs; track p) {
            <p>{{ p }}</p>
          }
        }
        <div class="about-close">
          <h2>{{ copy.closingTitle }}</h2>
          @for (p of copy.closing; track p) {
            <p>{{ p }}</p>
          }
        </div>
        <aside class="about-readmore">
          <h2>{{ copy.readMoreTitle }}</h2>
          <p>{{ copy.readMoreLead }}</p>
          <a routerLink="/history" class="text-link">{{ copy.readMoreButton }}</a>
        </aside>
        <app-page-closing />
      </div>
    </section>
  `
})
export class AboutComponent {
  private readonly lang = inject(LanguageService);
  readonly page = computed(() => aboutCopy[this.lang.lang()]);
}
