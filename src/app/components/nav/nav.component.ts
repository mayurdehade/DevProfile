import { Component, inject } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode/darkmode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  darkModeService: DarkmodeService = inject(DarkmodeService)

  theme: string = 'null';


  toggleDarkMode():void {
    this.darkModeService.updateDarkMode();
    this.theme = this.darkModeService.darkModeSignal();
  }


  collapseMenu:any;

  handleClick() {
    this.collapseMenu = document.getElementById('collapseMenu');
    if(this.collapseMenu.style.display === 'block') {
      this.collapseMenu.style.display = 'none';
    }
    else {
      this.collapseMenu.style.display = 'block';
    }
  }

}

