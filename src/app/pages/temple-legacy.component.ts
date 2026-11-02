import { Component, computed, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { legacyCopy } from '../data/legacy-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-temple-legacy',
  standalone: true,
  imports: [RouterLink, PageClosingComponent, PageHeroComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page legacy-page">
      <div class="container narrow">
        <h2 class="about-temple-name">{{ copy.introHeading }}</h2>
        @for (p of copy.intro; track p) {
          <p>{{ p }}</p>
        }

        <section class="legacy-lineage" aria-labelledby="legacy-lineage-title">
          <h2 id="legacy-lineage-title">{{ copy.lineageHeading }}</h2>
          <ol class="legacy-timeline">
            @for (person of copy.people; track person.name; let i = $index) {
              <li
                class="legacy-entry"
                [class.legacy-entry--present]="person.isPresent">
                <div class="legacy-portrait">
                  <img
                    [src]="person.image"
                    [alt]="person.imageAlt"
                    [style.object-position]="person.imagePosition ?? 'center'"
                    width="140"
                    height="175"
                    loading="lazy"
                  >
                </div>
                <div class="legacy-copy">
                  <p class="legacy-index" aria-hidden="true">{{ i + 1 }}</p>
                  <p class="legacy-designation">{{ person.designation }}</p>
                  <h3 class="legacy-name">{{ person.name }}</h3>
                  @if (person.note) {
                    <p class="legacy-note">{{ person.note }}</p>
                  }
                </div>
              </li>
            }
          </ol>
        </section>

        <div class="about-close">
          <h2>{{ copy.closingTitle }}</h2>
          @for (p of copy.closing; track p) {
            <p>{{ p }}</p>
          }
        </div>
        <aside class="about-readmore">
          <h2>{{ copy.readMoreTitle }}</h2>
          <p>{{ copy.readMoreLead }}</p>
          <a routerLink="/about" class="text-link">{{ copy.readMoreButton }}</a>
        </aside>
        <app-page-closing />
      </div>
    </section>
  `
})
export class TempleLegacyComponent {
  private readonly lang = inject(LanguageService);
  readonly page = computed(() => legacyCopy[this.lang.lang()]);
}
