import { Component } from '@angular/core';
import { CourseCardComponent } from "../course-card/course-card.component";
import { COURSES } from '../../../../db-data/exercise-2';
import { Course } from '../../../model/exercise-2-output/course';

@Component({
  selector: 'app-course-page',
  standalone: true,
  imports: [CourseCardComponent],
  templateUrl: './course-page.component.html',
  styleUrl: './course-page.component.css'
})

export class CoursePageComponent {

  courses = COURSES;

  onCourseSelected(course: Course){
    console.log(`The course ${course.title} is of ${course.category} level and has ${course.lessonsCount} lessons`);
  }

}
