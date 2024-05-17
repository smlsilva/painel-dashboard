import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentComponentQualidade } from '../content/content.component';

@Component({
  selector: 'app-navbar-qualidade',
  standalone: true,
  imports: [CommonModule, RouterLink, ContentComponentQualidade],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponentQualidade {

}
