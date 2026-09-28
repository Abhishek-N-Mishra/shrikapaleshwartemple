import { Component, HostListener, computed, inject, signal } from '@angular/core';
import { albumMediaLabel, galleryAlbums, galleryPageCopy, type GalleryAlbum } from '../data/gallery-content';
import { PageClosingComponent } from '../components/page-closing.component';
import { PageHeroComponent } from '../components/page-hero.component';
import { SectionTitleComponent } from '../components/section-title.component';
import { LanguageService } from '../services/language.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [PageClosingComponent, PageHeroComponent, SectionTitleComponent],
  template: `
    @let copy = page();
    @let locale = lang.lang();
    <app-page-hero [eyebrow]="copy.eyebrow" [title]="copy.title" />
    <section class="section content-page gallery-page">
      <div class="container">
        <app-section-title [title]="copy.heading" [description]="copy.description" />
        <div class="gallery-grid">
          @for (album of albums; track album.id) {
            <a
              class="gallery-tile gallery-tile-detail"
              href="#"
              [attr.aria-label]="album.title[locale]"
              (click)="openAlbumFromKey($event, album)">
              <img
                [src]="album.cover"
                [alt]="album.items[0].alt[locale]"
                width="380"
                height="240"
                loading="lazy">
              <span>
                <small>{{ album.category[locale] }} · {{ album.items.length }} {{ mediaLabel(album) }}</small>
                <strong>{{ album.title[locale] }}</strong>
                <p>{{ album.description[locale] }}</p>
              </span>
            </a>
          }
        </div>
        <app-page-closing />
      </div>
    </section>

    @if (activeAlbum(); as album) {
      <div class="gallery-lightbox" role="dialog" aria-modal="true" [attr.aria-label]="album.title[locale]">
        <div class="gallery-lightbox-backdrop" (click)="closeAlbum()" aria-hidden="true"></div>
        <div class="gallery-lightbox-panel">
          <div class="gallery-lightbox-head">
            <button type="button" class="gallery-lightbox-close" (click)="closeAlbum()">{{ copy.close }}</button>
          </div>
          <div class="gallery-lightbox-media-wrap">
            @let item = album.items[activeIndex()];
            @if (item.kind === 'video') {
              <video class="gallery-lightbox-media" [src]="item.src" controls playsinline preload="metadata" [attr.aria-label]="item.alt[locale]"></video>
            } @else {
              <img class="gallery-lightbox-media" [src]="item.src" [alt]="item.alt[locale]">
            }
          </div>
          <p class="gallery-lightbox-caption">{{ item.alt[locale] }}</p>
          @if (album.items.length > 1) {
            <div class="gallery-lightbox-nav">
              <button type="button" (click)="prevPhoto()">{{ copy.previous }}</button>
              <span>{{ activeIndex() + 1 }} / {{ album.items.length }}</span>
              <button type="button" (click)="nextPhoto()">{{ copy.next }}</button>
            </div>
          }
        </div>
      </div>
    }
  `
})
export class GalleryComponent {
  readonly lang = inject(LanguageService);
  readonly page = computed(() => galleryPageCopy[this.lang.lang()]);
  readonly albums = galleryAlbums;
  readonly activeAlbum = signal<GalleryAlbum | null>(null);
  readonly activeIndex = signal(0);

  openAlbum(album: GalleryAlbum): void {
    this.activeIndex.set(0);
    this.activeAlbum.set(album);
  }

  openAlbumFromKey(event: Event, album: GalleryAlbum): void {
    event.preventDefault();
    this.openAlbum(album);
  }

  mediaLabel(album: GalleryAlbum): string {
    return albumMediaLabel(album, this.page());
  }

  closeAlbum(): void {
    this.activeAlbum.set(null);
  }

  nextPhoto(): void {
    const album = this.activeAlbum();
    if (!album) {
      return;
    }
    this.activeIndex.update((index) => (index + 1) % album.items.length);
  }

  prevPhoto(): void {
    const album = this.activeAlbum();
    if (!album) {
      return;
    }
    this.activeIndex.update((index) => (index - 1 + album.items.length) % album.items.length);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(event: KeyboardEvent): void {
    if (!this.activeAlbum()) {
      return;
    }
    if (event.key === 'Escape') {
      this.closeAlbum();
    } else if (event.key === 'ArrowRight') {
      this.nextPhoto();
    } else if (event.key === 'ArrowLeft') {
      this.prevPhoto();
    }
  }
}
