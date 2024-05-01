import { PostsService } from './../../services/posts.service';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { lastValueFrom } from 'rxjs';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone: true,
  imports: [CommonModule, RouterModule],
})
export class PostComponent implements OnInit {
  @Input() postData: any;
  constructor(
    private route: ActivatedRoute,
    private postsService: PostsService
  ) {}

  ngOnInit() {
    if (!this.postData) {
      this.setPostData();
    }
  }

  private async setPostData(): Promise<void> {
    const postId = this.route.snapshot.paramMap.get('postId');
    if (postId) {
      const postData = await lastValueFrom(this.postsService.getPost(postId));
      this.postData = postData;
    }
  }
}
