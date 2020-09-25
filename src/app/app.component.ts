import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'eslint-ng-demo';

  // index.ts
  arr: string[] = ['one', 'two', "three"];
}
