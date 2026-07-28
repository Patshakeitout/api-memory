export interface JamendoTrack {
  id: string;
  name: string;
  artist_id: string;
  artist_name: string;
  album_name: string;
  album_image: string;
  audio: string;
  releasedate: string;
}

export interface JamendoResponse {
  headers: {
    status: string;
    error_message: string;
    results_count: number;
    results_fullcount: number;
  };
  results: JamendoTrack[];
}
