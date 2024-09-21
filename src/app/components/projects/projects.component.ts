import { Component } from '@angular/core';
import { ApiCallService } from 'src/app/services/apicall/api-call.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent {
  constructor(private service: ApiCallService) {}

  projects: any[] = [];

  ngOnInit() {
    this.service.getProjectsData().subscribe((data) => {
      this.projects = data.projects;
    });
  }

  hiddenContainer:any;
  hideButton:any;

  loadMore() {
    this.hiddenContainer = document.getElementById('hidden');
    this.hideButton = document.getElementById('hide-button');
    this.hiddenContainer.classList.remove('hidden-container');
    this.hideButton.classList.add('hidden');
  }
}
