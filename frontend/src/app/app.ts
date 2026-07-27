import { Component, HostListener, signal } from '@angular/core';
import { LeftSidebar } from './layout/left-sidebar/left-sidebar';
import { Main } from './layout/main/main';

const NARROW_BREAKPOINT = 768;

@Component({
  selector: 'app-root',
  imports: [LeftSidebar, Main],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  isLeftSidebarCollapsed = signal<boolean>(false);
  private wasNarrow = this.isNarrow();

  constructor() {
    this.isLeftSidebarCollapsed.set(this.wasNarrow);
  }

  /** Collapses when the viewport crosses below the breakpoint; widening never overrides a manual choice. */
  @HostListener('window:resize')
  onResize(): void {
    const isNarrow = this.isNarrow();
    if (isNarrow === this.wasNarrow) {
      return;
    }
    this.wasNarrow = isNarrow;
    if (isNarrow) {
      this.isLeftSidebarCollapsed.set(true);
    }
  }

  changeIsLeftSidebarCollapsed(isLeftSidebarCollapsed: boolean): void {
    this.isLeftSidebarCollapsed.set(isLeftSidebarCollapsed);
  }

  private isNarrow(): boolean {
    return window.innerWidth <= NARROW_BREAKPOINT;
  }
}
