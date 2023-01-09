import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent {
    @Input() likesCount = 0
    @Input() isActive = false

    onLikeClicked() {
        this.likesCount += (this.isActive) ? -1 : 1
        this.isActive = !this.isActive        
    }
}
