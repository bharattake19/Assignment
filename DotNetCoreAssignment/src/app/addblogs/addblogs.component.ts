import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PostServices } from '../_services/post.service';
import { Category } from '../_models/category';
import { first } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService, AlertService } from '../_services';
import { Post } from '../_models/posts';
import { error } from 'protractor';

@Component({
  selector: 'app-addblogs',
  templateUrl: './addblogs.component.html',
  styleUrls: ['./addblogs.component.css'],
  preserveWhitespaces: true
})
export class AddblogsComponent implements OnInit {
  category: Category[] = [];
  postForm: FormGroup;
  loading = false;
  submitted = false;
  post: Post[] = [];
  isUpdate: boolean = false;
  editPostId: number;

  constructor(private postService: PostServices,
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService, private activatedRoute: ActivatedRoute) { }

  get f() { return this.postForm.controls; }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      let id = params['postId'];
      if (id != undefined && id > 0) {
        this.getPostDetailsById(id);
        this.isUpdate = true;
      }
    });

    this.getCategories();
    this.postForm = this.formBuilder.group({
      postId: 0,
      title: ['', Validators.required],
      description: ['', Validators.required],
      categoryId: [1, Validators.required],
      createdBy: 1,
      createdDate: new Date(),
      viewCount: 0,
      isActive: true
    });
  }

  getPostDetailsById(postId: number) {
    this.editPostId = postId;
    this.postService.getPostById(postId).pipe(first()).subscribe(post => {
      this.post = post;
      this.postForm = new FormGroup({
        postId: new FormControl(this.post['postId']),
        title: new FormControl(this.post['title'], Validators.required),
        description: new FormControl(this.post['description'], Validators.required),
        categoryId: new FormControl(this.post['categoryId'], Validators.required)
      });
    }, error => {
      this.router.navigate(['/login']);
      console.log(error);
    });
  }

  getCategories() {
    this.postService.getAllCategory().pipe(first()).subscribe(categories => {
      this.category = categories;
    }, error => {
      this.router.navigate(['/login']);
      console.log(error);
    });
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.postForm.invalid) {
      return;
    }
    console.log(this.postForm.value);
    this.loading = true;
    this.postForm.controls['categoryId'].setValue(Number(this.postForm.value.categoryId));
    console.log(this.postForm.value);
    if (this.isUpdate) {
      this.editPost()
    } else {
      this.addPost();
    }
  }
  private addPost() {
    this.postService.addPost(this.postForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success('Post successful', true);
          this.router.navigate(['/blog']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
          this.router.navigate(['/login']);
        });
  }
  private editPost() {
    this.postService.editPost(this.postForm.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.alertService.success('Post successful', true);
          this.router.navigate(['/blog']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        });
  }
}
