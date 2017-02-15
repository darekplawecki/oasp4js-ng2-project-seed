import {Component} from "@angular/core";
// import * as template from './app-nav.component.html!text';
// import {asString} from '../util/as-string';

@Component({
  selector: 'app-nav',
  // template: asString(template)
  templateUrl: './app-nav.component.html'
})
export class AppNavComponent {
  navCollapsed: boolean = true;

  toggleNavigation(): void {
    this.navCollapsed = !this.navCollapsed;
  };
}
