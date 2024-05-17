import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentComponentProducao } from '../content/content.component';

@Component({
  selector: 'app-navbar-producao',
  standalone: true,
  imports: [CommonModule, RouterLink, ContentComponentProducao],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponentProducao {

}
