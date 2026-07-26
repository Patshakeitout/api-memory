import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule],
  templateUrl: './left-sidebar.html',
  styleUrl: './left-sidebar.scss',
})
export class LeftSidebar {
  isLeftSidebarCollapsed = input.required<boolean>();

  items = [
    {
      routeLink: 'dashboard',
      icon: 'fal fa-home',
      label: 'Dashboard'
    },
    {
      routeLink: 'metropolitan',
      icon: 'fal fa-university',
      label: 'Metropolitan'
    },
    {
      routeLink: 'music',
      icon: 'fal fa-music',
      label: 'Music'
    },
    {
      routeLink: 'poke',
      icon: 'fal fa-adjust',
      label: 'Poké'
    }
  ]
}
