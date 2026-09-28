import { Component, computed, inject } from '@angular/core';
import { LanguageService } from '../services/language.service';
import type { Lang } from '../data/translations';

const pageClosingCopy: Record<Lang, { mantra: string; harHar: string }> = {
  hi: {
    mantra: 'ॐ नमः शिवाय',
    harHar: 'हर हर महादेव'
  },
  en: {
    mantra: 'Om Namah Shivaya',
    harHar: 'Har Har Mahadev'
  }
};

@Component({
  selector: 'app-page-closing',
  standalone: true,
  template: `
    @let copy = text();
    <div class="about-close page-closing-mantra">
      <p class="about-mantra">{{ copy.mantra }}</p>
      <p class="about-harhar">{{ copy.harHar }}</p>
    </div>
  `
})
export class PageClosingComponent {
  private readonly lang = inject(LanguageService);
  readonly text = computed(() => pageClosingCopy[this.lang.lang()]);
}
