import { Component, Input, inject } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { templeInfo } from '../data/temple-data';

@Component({
  selector: 'app-map-preview',
  standalone: true,
  template: `
    <a
      class="map-preview"
      [class.map-large]="large"
      [href]="href"
      target="_blank"
      rel="noopener"
      [attr.aria-label]="label">
      <iframe
        class="map-preview-frame"
        [src]="embed"
        [title]="label"
        tabindex="-1"
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade">
      </iframe>
    </a>
  `
})
export class MapPreviewComponent {
  private readonly sanitizer = inject(DomSanitizer);

  @Input() label = '';
  @Input() large = false;
  @Input() href = templeInfo.mapUrl;

  readonly embed = this.sanitizer.bypassSecurityTrustResourceUrl(templeInfo.mapEmbedUrl);
}
