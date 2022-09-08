import { Component } from '@angular/core';
import { Categories } from './shared/types/categories.enum';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    navLinks = [Categories.EPISODES, Categories.MUSEUM];
}
