import { Component, inject } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { filter } from 'rxjs';
import { HeaderComponent } from './components/header.component';
import { FooterComponent } from './components/footer.component';
import { TempleHelperComponent } from './components/temple-helper.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent, TempleHelperComponent],
  template: `
    <app-header />
    <main>
      <router-outlet />
    </main>
    <app-footer />
    <app-temple-helper />
  `
})
export class AppComponent {
  constructor() {
    inject(Router).events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (!event.urlAfterRedirects.includes('#')) {
          window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
      });
  }
}
