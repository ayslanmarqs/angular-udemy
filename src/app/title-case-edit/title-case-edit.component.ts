import { Component } from '@angular/core';

@Component({
  selector: 'title-case-edit',
  templateUrl: './title-case-edit.component.html',
  styleUrls: ['./title-case-edit.component.css']
})
export class TitleCaseEditComponent {
    convertedText = "The text will be converted here.";

    inputKeyUp(convertText: string) {
        this.convertedText = convertText;
    }
}
