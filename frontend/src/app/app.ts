import { OnInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  //imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');

  // Grab a couple of things
  public section = document.querySelector("section");
  protected playerLives: number = 6;

  ngOnInit(): void {
    let playerLivesCount = document.querySelector("span");
    if (playerLivesCount) playerLivesCount.textContent = this.playerLives.toString();
  }

}
