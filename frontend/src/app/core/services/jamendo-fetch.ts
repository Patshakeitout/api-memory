import { httpResource } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { JamendoResponse } from '../models/track';
import { environment } from '../../../environments/environment';

export type PopularityMetric = 'popularity_total' | 'popularity_month';

@Injectable( { providedIn: 'root' })
export class JamendoFetch {
  //FULLCOUNT = 858353;
  private _popularity = signal<PopularityMetric | null>('popularity_total');
  public popularity = this._popularity.asReadonly();
  private genres = signal<string[]>([]);
  private offset = signal(this.randomOffset());

  tracksResource = httpResource<JamendoResponse>(() => ({
    url: environment.base_url + 'tracks/',
    params: {
      client_id: environment.jamendo_client_id,
      format: 'json',
      type: 'single+albumtrack',
      groupby: 'artist_id',
      limit: 50,
      offset: this.offset(),
      ...this.popularityParam()
    }
  })
  );

  /**
   * Sets the popularity ranking metric, `null` turns the ranking off.
   * Rerolls the offset because its meaningful range depends on the metric.
   */
  setPopularity(metric: PopularityMetric | null): void {
    this._popularity.set(metric);
    this.offset.set(this.randomOffset());
  }

  reroll(): void {
    this.offset.set(this.randomOffset());
  }

  /**
   * Ranks by `order` without a tag search and by `boost` with one, since
   * `boost` weighs a relevance score that only a tag search produces.
   */
  private popularityParam(): Record<string, string> {
    const metric = this.popularity();
    if (!metric) return {};
    return this.genres().length ? { boost: metric } : { order: metric };
  }

  private randomOffset(): number {
    return Math.floor(Math.random() * this.offsetMax());
  }

  private offsetMax(): number {
    return this.popularity() ? 200 : 5000;
  }

}
