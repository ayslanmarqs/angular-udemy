import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { NotFoundError } from '../common/not-found-error';
import { Post } from '../interfaces/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

    private url = 'https://jsonplaceholder.typicode.com/posts';

    constructor(private http: HttpClient) { }

    getPosts() {
        return this.http.get<Post[]>(this.url);
    }

    createPost(post) {
        return this.http.post(this.url, JSON.stringify(post))
            .pipe(
                catchError(this.handleError)
            );
    }

    updatePost(post) {
        return this.http.patch(this.url + '/' + post.id, JSON.stringify({ isRead: true }));
    }

    deletePost(id) {
        return this.http.delete(this.url + '/' + id)
            .pipe(
                catchError(this.handleError)
            );
    }

    private handleError(error: Response) {
        if (error.status === 400)
            return throwError(() => new BadRequestError())
    
        if (error.status === 404)  
            return throwError(() => new NotFoundError())

        return throwError(() => new AppError(error));
    }
}
