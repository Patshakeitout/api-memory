import { OnInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { MetImage } from './core/models/image-gallery';
import { Card } from './shared/components/card/card';


@Component({
  selector: 'app-root',
  imports: [Card],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('frontend');

  public section = document.querySelector("section");
  protected playerLives: number = 6;

  protected baseMetImagePath: string = './images/';
  protected images: MetImage[] = [
    {
      imgSrc: this.baseMetImagePath + 'met-1.jpg',
      title: 'Tommaso di Folco Portinari; Maria Portinari',
      artist: 'Hans Memling',
      year: 'ca. 1470'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-1.jpg',
      title: 'Tommaso di Folco Portinari; Maria Portinari',
      artist: 'Hans Memling',
      year: 'ca. 1470'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-2.jpg',
      title: 'Orchids and Rocks',
      artist: 'Yi Ha-eung',
      year: '1888'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-2.jpg',
      title: 'Orchids and Rocks',
      artist: 'Yi Ha-eung',
      year: '1888'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-3.jpg',
      title: 'Our Lady of Valvanera',
      artist: 'Unknown',
      year: 'ca. 1770–80'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-3.jpg',
      title: 'Our Lady of Valvanera',
      artist: 'Unknown',
      year: 'ca. 1770–80'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-4.jpg',
      title: 'Portrait of Alvise Contarini(?)',
      artist: 'Jacometto',
      year: 'ca. 1485–95'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-4.jpg',
      title: 'Portrait of Alvise Contarini(?)',
      artist: 'Jacometto',
      year: 'ca. 1485–95'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-5.jpg',
      title: 'Tabernacle House Altar',
      artist: 'Reinhold Vasters',
      year: '16th century'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-5.jpg',
      title: 'Tabernacle House Altar',
      artist: 'Reinhold Vasters',
      year: '16th century'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-6.jpg',
      title: 'Study of a Bird',
      artist: "Riza-yi 'Abbasi",
      year: 'dated 1634'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-6.jpg',
      title: 'Study of a Bird',
      artist: "Riza-yi 'Abbasi",
      year: 'dated 1634'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-7.jpg',
      title: 'Charity',
      artist: 'Guido Reni',
      year: 'ca. 1630'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-7.jpg',
      title: 'Charity',
      artist: 'Guido Reni',
      year: 'ca. 1630'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-8.jpg',
      title: 'Martyrdom of Saint Lawrence',
      artist: 'Unknown',
      year: 'ca. 1180'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-8.jpg',
      title: 'Martyrdom of Saint Lawrence',
      artist: 'Unknown',
      year: 'ca. 1180'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-9.jpg',
      title: 'Saint Anthony the Abbot in the Wilderness',
      artist: 'Sano di Pietro',
      year: 'ca. 1440'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-9.jpg',
      title: 'Saint Anthony the Abbot in the Wilderness',
      artist: 'Sano di Pietro',
      year: 'ca. 1440'
    }
  ];

  ngOnInit(): void {
    let playerLivesCount = document.querySelector("span");
    if (playerLivesCount) playerLivesCount.textContent = this.playerLives.toString();

    this.randomize();
  }

  getData = () => this.images;

  randomize = () => {
    const cardData = this.getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
  }
}
