
import { Component, OnInit } from '@angular/core';
import { NotFoundError } from 'rxjs';
import { AppError } from '../common/app-error';
import { BadRequestError } from '../common/bad-request-error';
import { Post } from '../interfaces/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
    posts: any[];
    constructor(private postService: PostService) {
    }

    ngOnInit(): void {
        this.postService.getPosts()
            .subscribe(
                response => {
                    this.posts = response;
                });
    }
    
    createPost(input: HTMLInputElement) {
        let post: any = { title: input.value };
        input.value = '';
        this.postService.createPost(post)
            .subscribe(
                response => {
                    post.id = response;
                    this.posts.splice(0, 0, post);                
                }, 
                (error: AppError) => {
                    if (error instanceof BadRequestError)
                        //this.form.setError(error.originalError);
                        console.log(error);
                    else throw error;
                });
    }

    updatePost(post: any) {
        this.postService.updatePost(post)
            .subscribe(
                response => {
                    console.log(response);
                });
    }

    deletePost(post: any) {
        this.postService.deletePost(post.id)
        .subscribe(
            response => {
                let index = this.posts.indexOf(post);
                this.posts.splice(index, 1);
            }, 
            (error: AppError) => {
                if (error instanceof NotFoundError)
                    alert('This post has already been deleted.');
                else throw error;
            });
    }
}
