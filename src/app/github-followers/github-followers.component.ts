import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {

    followers:any[];

    constructor(private githubService: GithubService) {        
    }

    ngOnInit(): void {
        this.githubService.getAll()
            .subscribe(
                (response: any[]) => {
                    this.followers = response;
                }
            )
    }
}
