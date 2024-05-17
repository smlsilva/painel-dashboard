import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, CardsComponent, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  validadorQualidade :boolean = false;
  validadorProducao :boolean = false;
  validadorRedeExterna :boolean = false;
  visionIn :boolean = true;

  toggle(value: number) {

    switch(value){
      case 1:
        this.validadorQualidade = this.validadorQualidade ? false : true;
        this.validadorProducao = false;
        this.validadorRedeExterna = false;
        break;
      case 2:
        this.validadorQualidade = false;
        this.validadorProducao = this.validadorProducao ? false : true;
        this.validadorRedeExterna = false;
        break;
      case 3:
        this.validadorQualidade = false;
        this.validadorProducao = false;
        this.validadorRedeExterna = this.validadorRedeExterna ? false : true;
        break;
      default:
        break;
    }

  }

  visionMenu() {
    this.visionIn = this.visionIn ? false : true;
  }

}
