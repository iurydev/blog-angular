import { Observable } from 'rxjs';
import { PostsService } from './../../services/posts.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-top-posts',
  standalone: true,
  imports: [CommonModule, PostComponent],
  templateUrl: './top-posts.component.html',
  styleUrl: './top-posts.component.scss',
})
export class TopPostsComponent {
  $posts: Observable<any[]> = this.postsService.getPosts();
  constructor(protected postsService: PostsService) {}
}
