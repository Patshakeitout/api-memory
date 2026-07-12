import { OnInit, Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MetImage } from './core/models/image-gallery';

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
  protected baseMetImagePath: string = '../assets/images/';

  protected images: MetImage[] = [
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
      imgSrc: this.baseMetImagePath + 'met-9.jpg',
      title: 'Saint Anthony the Abbot in the Wilderness',
      artist: 'Sano di Pietro',
      year: 'ca. 1440'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-10.jpg',
      title: 'Christ Crowned with Thorns',
      artist: 'Antonello da Messina',
      year: ''
    },
    {
      imgSrc: this.baseMetImagePath + 'met-11.jpg',
      title: 'Virgin and Child with Four Angels',
      artist: 'Gerard David',
      year: 'ca. 1510–15'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-12.jpg',
      title: 'The Martyrdom of Saint Barbara',
      artist: 'Lucas Cranach the Elder',
      year: 'ca. 1510'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-13.jpg',
      title: 'Young Woman with a Pink',
      artist: 'Hans Memling',
      year: 'ca. 1485–90'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-14.jpg',
      title: 'Portrait of a Woman',
      artist: 'Giovanni Battista Gaulli',
      year: 'ca. 1670s'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-15.jpg',
      title: "Isfandiyar's Third Course (Shahnama)",
      artist: "Abu'l Qasim Firdausi",
      year: 'ca. 1530'
    },
    {
      imgSrc: this.baseMetImagePath + 'met-16.jpg',
      title: 'Josefa de Castilla Portugal y van Asbrock de Garcini',
      artist: 'Goya',
      year: '1804'
    }
  ];

  ngOnInit(): void {
    let playerLivesCount = document.querySelector("span");
    if (playerLivesCount) playerLivesCount.textContent = this.playerLives.toString();
  }

}
