import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeezerService {
  private baseUrl = 'https://api.deezer.com';

  constructor(public http: HttpClient) { }

  searchTracks(query: string): Observable<any> {
    const url = `${this.baseUrl}/search?q=${query}&output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }

  getAlbum(id: number): Observable<any> {
    const url = `${this.baseUrl}/album/${id}?output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }

  getArtist(id: number): Observable<any> {
    const url = `${this.baseUrl}/artist/${id}?output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }

  getArtistTopTracks(id: number): Observable<any> {
    const url = `${this.baseUrl}/artist/${id}/top?output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }

  getTrack(id: number): Observable<any> {
    const url = `${this.baseUrl}/track/${id}?output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }

  getPlaylist(id: number): Observable<any> {
    const url = `${this.baseUrl}/playlist/${id}?output=jsonp`;
    return this.http.jsonp(url, 'callback');
  }
}
