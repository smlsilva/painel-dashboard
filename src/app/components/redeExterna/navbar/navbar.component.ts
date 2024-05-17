import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ContentComponentRedeExterna } from '../content/content.component';

@Component({
  selector: 'app-navbar-redeExterna',
  standalone: true,
  imports: [CommonModule, RouterLink, ContentComponentRedeExterna],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponentRedeExterna {

  validadorQualidade :boolean = false;
  validadorProducao :boolean = false;
  visionIn :boolean = true;

  toggle(value: number) {

    switch(value){
      case 1:
        this.validadorQualidade = this.validadorQualidade ? false : true;
        break;
      case 2:
        this.validadorProducao = this.validadorProducao ? false : true;
        break;
      case 3:
        break;
      default:
        break;
    }

  }

}
