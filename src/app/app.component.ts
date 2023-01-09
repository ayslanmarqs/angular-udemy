import { Component } from '@angular/core';
import { CoursesService } from './course.service';
import { FavoriteChangedEventArgs } from './favorite/favorite.component';

import { Observable, interval } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

    coursesCount;
    customPipeText = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.";

    constructor(service: CoursesService) {
        this.message$ = this.getResendObservable();
        this.coursesCount = service.getCoursesCount();
    }

    post = {
        title: 'hello-world',
        isFavorite: true
    }

    tweet = {
        body: 'Here is the body of the tweet...',
        isLiked: false,
        likesCount: 32
    }

    onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
        console.log('Favorite changed: ', eventArgs.newValue)
    }

    message$: Observable<string>;

    private messages = [
        "You are my hero!",
        "You are the best hero!",
        "Will you be my hero?"
    ]

    resend() {
        this.message$ = this.getResendObservable();
    }

    private getResendObservable() {
        return interval(500).pipe(
            map(i => this.messages[i]),
            take(this.messages.length)
        );
    }
}