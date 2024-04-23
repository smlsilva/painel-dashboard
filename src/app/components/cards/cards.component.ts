import { Component } from '@angular/core';
import { GraficComponent } from '../grafic/grafic.component';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [GraficComponent],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {

  title :string = "Qualidade";
  title2 :string = "Produção";
  title3 :string = "Rede Externa";

  valorTotal :number = 0;
  valorTotal2 :number = 0;
  valorTotal3 :number = 0;

}
