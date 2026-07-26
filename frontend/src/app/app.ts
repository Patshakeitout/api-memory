import { Component, signal } from '@angular/core';
import { LeftSidebar } from './layout/left-sidebar/left-sidebar';
import { Main } from './layout/main/main';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [LeftSidebar, Main, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');
}
