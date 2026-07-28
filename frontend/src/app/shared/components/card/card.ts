import { Component, input, signal, ChangeDetectionStrategy } from '@angular/core';
import { GalleryImage } from '../../../core/models/image-gallery';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './card.scss',
})
export class Card {
  image = input.required<GalleryImage>();
  flipState = signal(false);

  flipCard = () => {
    this.flipState.update(state => !state);
  }
}
