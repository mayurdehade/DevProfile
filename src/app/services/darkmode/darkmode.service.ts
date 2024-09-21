import { Injectable, signal, effect } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DarkmodeService {

  darkModeSignal = signal<string>(
    JSON.parse(window.localStorage.getItem('darkModeSignal') ?? 'null')
  );

  updateDarkMode() {
    this.darkModeSignal.update((value) => (value == "dark" ? "null" : "dark"))
  }

  constructor() { 
    effect(() => {
      window.localStorage.setItem('darkModeSignal', JSON.stringify(this.darkModeSignal()));
    })
  }
}
