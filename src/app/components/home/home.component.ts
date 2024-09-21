import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/services/apicall/api-call.service';
import { NavComponent } from '../nav/nav.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
scrollToTop() {
throw new Error('Method not implemented.');
}
  summary: string = '';

  roles: string[] = [];

  constructor(private service: ApiCallService) {}

  ngOnInit() {
    this.service.getProfileData().subscribe((data) => {
      // console.log(data);
      this.summary = data.summary;
      this.roles = data.roles;
    });
  }
}
