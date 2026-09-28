import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LanguageService } from '../services/language.service';
import { SocialLinksComponent } from './social-links.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink, SocialLinksComponent],
  template: `
    @let t = lang.t();
    <footer class="site-footer">
      <img class="footer-mark" src="assets/images/mahadev-shrine.png" [alt]="t.mahadevAlt">
      <p class="footer-mantra">{{ t.mantra }}</p>
      <p class="footer-name">{{ t.brandName }}</p>
      <p class="footer-location">{{ t.location }}</p>
      <nav class="footer-links" [attr.aria-label]="t.footerNavAria">
        <a routerLink="/about">{{ t.navTemple }}</a>
        <a routerLink="/history">{{ t.navHistory }}</a>
        <a routerLink="/darshan">{{ t.navDarshan }}</a>
        <a routerLink="/festivals">{{ t.navFestivals }}</a>
        <a routerLink="/gallery">{{ t.navGallery }}</a>
        <a routerLink="/donation">{{ t.navDonation }}</a>
        <a routerLink="/contact">{{ t.navContact }}</a>
      </nav>
      <app-social-links variant="footer" />
      <p>© {{ year }} {{ t.footerCopyright }}</p>
      <p class="footer-note">{{ t.footerNote }}</p>
    </footer>
  `
})
export class FooterComponent {
  readonly lang = inject(LanguageService);
  readonly year = new Date().getFullYear();
}
