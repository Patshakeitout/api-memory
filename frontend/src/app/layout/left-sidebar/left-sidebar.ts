import { CommonModule } from '@angular/common';
import { Component, input, output, ChangeDetectionStrategy } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-left-sidebar',
  imports: [RouterModule, CommonModule],
  templateUrl: './left-sidebar.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './left-sidebar.scss',
})
export class LeftSidebar {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();

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

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSideNav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
}
