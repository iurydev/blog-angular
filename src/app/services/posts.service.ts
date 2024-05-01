import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private httpClient: HttpClient) {}

  public getPosts(): Observable<Post[]> {
    return this.httpClient.get<any[]>(`${environment.apiUrl}/posts`);
  }

  public getPost(postId: string): Observable<Post> {
    return this.httpClient.get<any>(`${environment.apiUrl}/post/${postId}`)
  }
}
