import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardsComponent } from '../cards/cards.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, HeaderComponent, CardsComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

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
