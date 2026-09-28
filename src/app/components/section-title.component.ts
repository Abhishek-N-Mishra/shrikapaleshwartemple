import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div class="section-title">
      @if (eyebrow) { <span class="eyebrow">{{ eyebrow }}</span> }
      <h2>{{ title }}</h2>
      <span class="title-rule" aria-hidden="true"></span>
      @if (description) { <p>{{ description }}</p> }
    </div>
  `
})
export class SectionTitleComponent {
  @Input() title = '';
  @Input() eyebrow = '';
  @Input() description = '';
}
