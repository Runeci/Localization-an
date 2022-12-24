import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'localize';

  localeList = [
    {code: 'es-US', label: 'En'},
    {code: 'ru', label: 'Ru'},
  ]
}
