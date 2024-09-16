import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  summary: string =
    'Aspiring Full Stack Java Developer with hands-on experience in building web applications using Java, Spring Boot, Hibernate, and Angular. Skilled in backend and frontend development, database management, and creating REST APIs. Quick learner with strong problem-solving skills, eager to contribute and grow in a professional environment.';

  roles: string[] = [
    'Full Stack Developer',
    'Front End Developer',
    'Back End Developer',
    'Angular Developer',
  ];
}
