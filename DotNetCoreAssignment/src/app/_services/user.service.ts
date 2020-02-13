import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../_models';
import { Post } from '../_models/posts';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        console.log("getAll");
        return this.http.get<Post[]>(`https://localhost:44355/api/Blog/GetPosts`);
    }

    register(user: User) {
        return this.http.post(`/users/register`, user);
    }

    delete(id: number) {
        return this.http.delete(`/users/${id}`);
    }
}