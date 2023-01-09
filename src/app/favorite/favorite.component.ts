import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent {
    @Input('is-favorite') isFavorite = false;
    @Output('favorite-changed') change = new EventEmitter();

    onIconClicked() {
        this.isFavorite = !this.isFavorite;
        this.change.emit({ newValue: this.isFavorite });
    }
}

export interface FavoriteChangedEventArgs {    
    newValue: boolean
}
