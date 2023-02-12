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
export class DataService {

    private url;

    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Post[]>(this.url);
    }

    create(resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .pipe(
                catchError(this.handleError)
            ); 
    }

    update(resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }));
    }

    delete(id) {
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
