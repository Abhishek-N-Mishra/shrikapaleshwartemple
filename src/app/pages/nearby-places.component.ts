import { Component, computed, inject } from '@angular/core';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { nearbyPlacesCopy } from '../data/nearby-places-content';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-nearby-places',
  standalone: true,
  imports: [PageClosingComponent, PageHeroComponent],
  template: `
    @let copy = page();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page nearby-page">
      <div class="container">
        <p class="about-subtitle nearby-subtitle">{{ copy.subtitle }}</p>
        <p class="nearby-intro">{{ copy.intro }}</p>

        <div class="nearby-grid">
          @for (place of copy.places; track place.id) {
            <article class="nearby-card" [attr.aria-labelledby]="'nearby-' + place.id">
              <div class="nearby-card-media">
                <img
                  [src]="place.image"
                  [alt]="place.imageAlt"
                  width="400"
                  height="240"
                  loading="lazy"
                >
              </div>
              <div class="nearby-card-body">
                <h2 class="nearby-card-title" [id]="'nearby-' + place.id">{{ place.name }}</h2>
                <p class="nearby-card-desc">{{ place.description }}</p>
                @if (place.address) {
                  <p class="nearby-card-meta"><strong>{{ copy.addressLabel }}</strong> {{ place.address }}</p>
                }
                @if (place.distance) {
                  <p class="nearby-card-meta"><strong>{{ copy.distanceLabel }}</strong> {{ place.distance }}</p>
                }
                @if (place.visitorInfo) {
                  <p class="nearby-card-meta">{{ place.visitorInfo }}</p>
                }
                @if (place.directionsUrl) {
                  <a
                    class="text-link nearby-card-directions"
                    [href]="place.directionsUrl"
                    target="_blank"
                    rel="noopener noreferrer">
                    {{ copy.directionsLabel }} →
                  </a>
                }
              </div>
            </article>
          }
        </div>

        <app-page-closing />
      </div>
    </section>
  `
})
export class NearbyPlacesComponent {
  private readonly lang = inject(LanguageService);
  readonly page = computed(() => nearbyPlacesCopy[this.lang.lang()]);
}
