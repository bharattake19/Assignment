import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { Subscription } from 'rxjs';
import { Post } from '../_models/posts';
import { AuthenticationService, UserService } from '../_services';
import { first } from 'rxjs/operators';
import { PostServices } from '../_services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css'],
  preserveWhitespaces: true
})
export class BlogsComponent implements OnInit {

  currentUser: User;
  currentUserSubscription: Subscription;
  post: Post[] = [];

  constructor(
    private authenticationService: AuthenticationService,
    private postService: PostServices, private router: Router
  ) {
    this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
      this.currentUser = user;
    });
  }

  ngOnInit() {
    this.loadAllPost();
  }
  private loadAllPost() {
    this.postService.getAll().pipe(first()).subscribe(posts => {
      this.post = posts;
      console.log(this.post);
    }, error => {
      if (error === 'Unknown Error') {
        this.router.navigate([`login`]);
      }
    });
  }
  onGetDetails(postId: number) {
    this.router.navigate([`blogdetails/${postId}`]);
  }
  editPost(postId) {
    console.log("editPost");
    this.router.navigate([`addblog/${postId}`]);
  }
  deletePost(postId) {
    this.postService.deletePost(postId).pipe(first()).subscribe(users => {
      this.loadAllPost();
    }, error => {
      console.log(error);
    });
  }
}
