import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/services/apicall/api-call.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent {
  constructor(private service: ApiCallService) {}
  avtar: string = '';
  bio: string = '';
  about: string = '';
  about2: string = '';

  ngOnInit() {
    this.service.getProfileData().subscribe((data) => {
      this.avtar = data.avtar;
      this.bio = data.bio;
      this.about = data.about;
      this.about2 = data.about2;
    });
  }
}
