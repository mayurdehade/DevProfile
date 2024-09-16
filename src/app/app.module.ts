import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfilesComponent } from './components/profiles/profiles.component';
import { AboutComponent } from './components/about/about.component';
import { NgxTypedJsModule } from 'ngx-typed-js';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    FooterComponent,
    ContactComponent,
    ProjectsComponent,
    ServicesComponent,
    EducationComponent,
    ExperienceComponent,
    ProfilesComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, NgxTypedJsModule,],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
