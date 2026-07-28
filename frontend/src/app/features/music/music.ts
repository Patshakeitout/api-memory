import { Component, ChangeDetectionStrategy, inject, computed } from '@angular/core';

import { GalleryImage } from '../../core/models/image-gallery';
import { Card } from '../../shared/components/card/card';
import { JamendoFetch } from '../../core/services/jamendo-fetch';
import { JamendoTrack } from '../../core/models/track';

@Component({
  selector: 'app-music',
  imports: [Card],
  templateUrl: './music.html',
  styleUrl: './music.scss',
})
export class Music {
  protected playerLives: number = 6;

  private jamendo = inject(JamendoFetch);

  protected images = computed(() => {
    const tracks = this.jamendo.tracksResource.value()?.results ?? [];
    const picked = tracks.filter(t => t.album_image).slice(0, 9);
    return this.shuffle([...picked, ...picked].map(t => this.toGalleryImage(t)));
  });

  private toGalleryImage(track: JamendoTrack): GalleryImage {
    return {
      imgSrc: track.album_image,
      title: track.name,
      artist: track.artist_name,
      year: track.releasedate.slice(0, 4),
      audio: track.audio
    };
  }

  private shuffle(items: GalleryImage[]): GalleryImage[] {
    const copy = [...items];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

}
