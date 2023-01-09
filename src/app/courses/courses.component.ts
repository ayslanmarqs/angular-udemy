import { Component } from '@angular/core';
import { CoursesService } from '../course.service';


@Component({
    selector: 'courses',
    templateUrl: './courses.component.html',
    styleUrls: ['./courses.component.css']
})

export class CoursesComponent {
    title = "List of courses";
    courses;
    isActive = false;
    email = "me@example.com";
    customPipeText = "O Lorem Ipsum é um texto modelo da indústria tipográfica e de impressão. O Lorem Ipsum tem vindo a ser o texto padrão usado por estas indústrias desde o ano de 1500, quando uma misturou os caracteres de um texto para criar um espécime de livro. Este texto não só sobreviveu 5 séculos, mas também o salto para a tipografia electrónica, mantendo-se essencialmente inalterada. Foi popularizada nos anos 60 com a disponibilização das folhas de Letraset, que continham passagens com Lorem Ipsum, e mais recentemente com os programas de publicação como o Aldus PageMaker que incluem versões do Lorem Ipsum.";

    constructor(service: CoursesService) {
        this.courses = service.getCourses();
    }

    onSave($event: any) {
        $event.stopPropagation();
        console.log("Button was clicked.", $event);
    }

    onDivClicked() {
        console.log("Div was clicked.");
    }

    onSaveEmail() {
        console.log("Email saved: ", this.email);
    }

    onKeyUp() {
        console.log("ENTER was pressed.");
    }

    onIconClicked() {
        this.isActive = !this.isActive;
    }
}
