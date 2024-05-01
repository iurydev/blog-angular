import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PostComponent implements OnInit {
  @Input() postData: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {

  }
}
