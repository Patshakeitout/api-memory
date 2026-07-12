import { Component, input } from '@angular/core';
import { MetImage } from '../../../core/models/image-gallery';


@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class Card {
  image = input.required<MetImage>();
}
