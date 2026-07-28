import { Component, input, output, signal } from '@angular/core';
import { GalleryImage } from '../../../core/models/image-gallery';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  image = input.required<GalleryImage>();
  flipState = signal(false);

  cardAudioUrl = output<string | undefined>();

  flipCard = () => {
    this.flipState.update(state => !state);
    this.cardAudioUrl.emit(this.flipState() ? this.image().audio : undefined);
  }
}
