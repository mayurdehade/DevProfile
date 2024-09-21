import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/services/apicall/api-call.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skills:any[] = [] ;

    constructor (private services: ApiCallService) {}

    ngOnInit() {
      this.services.getProfileData().subscribe((data) => {
        this.skills = data.skills;
      });
    }
}
