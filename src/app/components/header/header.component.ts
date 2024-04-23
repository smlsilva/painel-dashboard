import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  constructor(private obj :NavbarComponent){}

  qualidade :boolean = false;

  toggleMenu() {
    this.obj.visionIn = this.obj.visionIn ? false : true;
  }

}
