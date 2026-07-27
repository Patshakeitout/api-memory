import { Component, input } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main',
  imports: [RouterOutlet],
  templateUrl: './main.html',
  styleUrl: './main.scss',
  host: {
    '[class.body-trimmed]': '!isLeftSidebarCollapsed()'
   }
})
export class Main {
  isLeftSidebarCollapsed = input.required<boolean>();
}
