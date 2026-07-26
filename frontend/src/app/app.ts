import { Component, signal } from '@angular/core';
import { LeftSidebar } from './layout/left-sidebar/left-sidebar';
import { Main } from './layout/main/main';

@Component({
  selector: 'app-root',
  imports: [LeftSidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');

  isLeftSidebarCollapsed = signal<boolean>(false);
}
