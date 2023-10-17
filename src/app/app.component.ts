import { Component, OnInit } from '@angular/core';
import { PopupPlugin } from 'popup-plugin';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-capacitor';

  async showPopup() {
    await PopupPlugin.showPopup({message: 'Hello World'});
  }
}
