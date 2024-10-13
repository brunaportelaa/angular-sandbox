import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { OutputPropertyComponent } from "./components/exercise-1-output/output-property/output-property.component";
import { DataBindingComponent } from "./components/exercise-1-output/data-binding/data-binding.component";
import { CoursePageComponent } from "./components/exercise-2-output/course-page/course-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, OutputPropertyComponent, DataBindingComponent, CoursePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-sandbox';
}
