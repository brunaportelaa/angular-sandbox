import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Course } from '../../../model/exercise-2-output/course';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.css'
})
export class CourseCardComponent {


  @Input() course!: Course;

  @Output() courseSelected = new EventEmitter<Course>()
  
  onRegister() {
    console.log(`User has registered on course: ${this.course.title}`)
    this.courseSelected.emit(this.course)
  }

}
