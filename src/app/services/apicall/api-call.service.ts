import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  profileUrl =
    'https://raw.githubusercontent.com/mayurdehade/DevProfile/d1c7dea8ee731068af9df619e2e62c5ff9ba8dde/JSONS/profile.json';

  projectsUrl =
    'https://raw.githubusercontent.com/mayurdehade/DevProfile/refs/heads/main/JSONS/projects.json';

  constructor(private http: HttpClient) {}

  //get profile data
  getProfileData(): Observable<any> {
    return this.http.get<any>(this.profileUrl);
  }

  //get project data
  getProjectsData(): Observable<any> {
    return this.http.get<any>(this.projectsUrl);
  }
}
