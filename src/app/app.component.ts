import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Dashboard } from './view/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Dashboard, RouterOutlet],
  templateUrl: './app.component.html',
  styles: ''
})
export class AppComponent {
  title = 'painel_dashboard';
}
