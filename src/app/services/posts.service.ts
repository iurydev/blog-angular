import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/posts`);
  }
}
