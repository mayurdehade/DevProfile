import { Component, inject } from '@angular/core';
import { DarkmodeService } from 'src/app/services/darkmode/darkmode.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  darkModeService: DarkmodeService = inject(DarkmodeService)

  toggleDarkMode():void {
    this.darkModeService.updateDarkMode()
  }

//   var toggleOpen = document.getElementById('toggleOpen');
// var toggleClose = document.getElementById('toggleClose');
// var collapseMenu = document.getElementById('collapseMenu');

// function handleClick() {
//   if (collapseMenu.style.display === 'block') {
//     collapseMenu.style.display = 'none';
//   } else {
//     collapseMenu.style.display = 'block';
//   }
// }

// toggleOpen.addEventListener('click', handleClick);
// toggleClose.addEventListener('click', handleClick);

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

