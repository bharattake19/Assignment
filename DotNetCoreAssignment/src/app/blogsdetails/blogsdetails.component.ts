import { Component, OnInit } from '@angular/core';
import { PostServices } from '../_services/post.service';
import { first } from 'rxjs/operators';
import { Post } from '../_models/posts';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-blogsdetails',
  templateUrl: './blogsdetails.component.html',
  styleUrls: ['./blogsdetails.component.css']
})
export class BlogsdetailsComponent implements OnInit {
  post: Post[] = [];
  title: string;
  constructor(private postService: PostServices, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['postId'];     
      this.getPostDetailsById(id);      
    });
  }
  getPostDetailsById(postId: number) {
    this.postService.getPostById(postId).pipe(first()).subscribe(post => {
      this.post = post;      
    });
  }
}
