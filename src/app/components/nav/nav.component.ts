import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isDark:boolean = false;

  toggleDarkMode():void {
    this.isDark = !this.isDark;

    if (this.isDark) {
      //dark theme
      document.body.classList.add('dark');
      document.getElementById('logo-text')?.classList.remove('text-gray-800');
      document.getElementById('logo-text')?.classList.add('text-inherit');
    } else {
      document.body.classList.remove('dark');
      document.getElementById('logo-text')?.classList.remove('text-inherit');
      document.getElementById('logo-text')?.classList.add('text-gray-800');
    }
  }
  
}
