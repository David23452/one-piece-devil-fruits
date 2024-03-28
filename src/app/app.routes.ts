import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { BomuBomuComponent } from './bomu-bomu/bomu-bomu.component';
import { GuraGuraComponent } from './gura-gura/gura-gura.component';
import { MeraMeraComponent } from './mera-mera/mera-mera.component';
import { GoroGoroComponent } from './goro-goro/goro-goro.component';
import { BaraBaraComponent } from './bara-bara/bara-bara.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full',
  },
  {
    path: 'bomu-bomu-fruit',
    component: BomuBomuComponent,
    pathMatch: 'full',
  },
  {
    path: 'gura-gura-fruit',
    component: GuraGuraComponent,
    pathMatch: 'full',
  },
  {
    path: 'mera-mera-fruit',
    component: MeraMeraComponent,
    pathMatch: 'full',
  },
  {
    path: 'goro-goro-fruit',
    component: GoroGoroComponent,
    pathMatch: 'full',
  },
  {
    path: 'bara-bara-fruit',
    component: BaraBaraComponent,
    pathMatch: 'full',
  },
];
