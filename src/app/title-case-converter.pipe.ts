import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCaseConverterPipe implements PipeTransform {

    transform(text: string): any {
        if (!text) return null;

        let prepositions = [
            "of", "the", "from"
        ]
        let words = text.split(" ");
        for (let i = 0; i < words.length; i++) {
            if (i > 0 && prepositions.includes(words[i].toLowerCase()))
                words[i] = words[i].toLowerCase();
            else 
                words[i] = words[i].substring(0, 1).toUpperCase() + words[i].substring(1).toLowerCase();
        }

        return words.join(" ");
    }

}
