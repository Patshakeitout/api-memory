import { Routes } from '@angular/router';
import { Dashboard } from './features/dashboard/dashboard';
import { Metropolitan } from './features/metropolitan/metropolitan';
import { Music } from './features/music/music';
import { Poke } from './features/poke/poke';

export const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: Dashboard },
  { path: 'metropolitan', component: Metropolitan },
  { path: 'music', component: Music },
  { path: 'poke', component: Poke }
];
