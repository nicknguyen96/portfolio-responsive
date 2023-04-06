import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // header
  isShow: boolean = true;
  darkTheme = true;

  closeMenu() {
    this.isShow = false;
  }
  openMenu() {
    this.isShow = true;
  }

  toggleDarkTheme() {
    this.darkTheme = !this.darkTheme;
    if (this.darkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
  }


}
