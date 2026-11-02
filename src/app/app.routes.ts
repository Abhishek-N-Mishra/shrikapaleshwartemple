import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { HistoryComponent } from './pages/history.component';
import { TempleLegacyComponent } from './pages/temple-legacy.component';
import { NearbyPlacesComponent } from './pages/nearby-places.component';
import { DarshanComponent } from './pages/darshan.component';
import { FestivalsComponent } from './pages/festivals.component';
import { GalleryComponent } from './pages/gallery.component';
import { DonationComponent } from './pages/donation.component';
import { ContactComponent } from './pages/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'temple-legacy', component: TempleLegacyComponent },
  { path: 'nearby-places', component: NearbyPlacesComponent },
  { path: 'darshan', component: DarshanComponent },
  { path: 'festivals', component: FestivalsComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'donation', component: DonationComponent },
  { path: 'videos', redirectTo: 'gallery', pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '' }
];