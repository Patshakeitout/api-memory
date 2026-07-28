import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { JamendoTrack, JamendoResponse } from '../models/track';
import { environment } from '../../../environments/environment';
import { groupBy } from 'rxjs';


@Injectable( { providedIn: 'root' })
export class JamendoFetch {
  //FULLCOUNT = 858353;
  private offsetMax = 5000;
  private offset = signal(this.randomOffset());

  tracksResource = httpResource<JamendoResponse>(() => ({
    url: environment.base_url + 'tracks/',
    params: {
      client_id: environment.jamendo_client_id,
      format: 'json',
      type: 'single+albumtrack',
      groupby: 'artist_id',
      limit: 50,
      offset: this.offset()
    }
  })
  );

  private randomOffset(): number {
    return Math.floor(Math.random() * this.offsetMax);
  }

  reroll(): void {
  this.offset.set(this.randomOffset());
}

}
