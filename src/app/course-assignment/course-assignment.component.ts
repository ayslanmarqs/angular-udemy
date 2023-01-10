import { Component } from '@angular/core';

@Component({
  selector: 'course-assignment',
  templateUrl: './course-assignment.component.html',
  styleUrls: ['./course-assignment.component.css']
})
export class CourseAssignmentComponent {
    categories = [
        { id: 1, name: "Development"},
        { id: 2, name: "Art"},
        { id: 3, name: "Languages"},
    ]

    log(x: any) {
        console.log(x);
    }
}
