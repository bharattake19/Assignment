import { HttpClient } from '@angular/common/http';
import { Post } from '../_models/posts';
import { Category } from '../_models/category';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class PostServices {
    constructor(private http: HttpClient) {
        console.log("Post service Contructor");
    }
    getAll() {
        console.log("getAll");
        return this.http.get<Post[]>(`https://localhost:44355/api/Blog/GetPosts`);
    }
    getPostById(postId: number) {
        return this.http.get<Post[]>(`https://localhost:44355/api/Blog/GetPost?postId=${postId}`);
    }
    addPost(post: Post) {
        console.log(post);
        return this.http.post(`https://localhost:44355/api/Blog/AddPost`, post);
    }
    editPost(post:Post){
        console.log(post);
        return this.http.post(`https://localhost:44355/api/Blog/UpdatePost`, post);
    }
    deletePost(id: number) {
        return this.http.post(`https://localhost:44355/api/Blog/DeletePost?postId=${id}`, id);
    }
    getAllCategory() {
        return this.http.get<Category[]>(`https://localhost:44355/api/Blog/Categories`);
    }
}