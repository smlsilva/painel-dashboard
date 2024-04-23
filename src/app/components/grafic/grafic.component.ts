import { Component } from '@angular/core';
import { ChartsComponent } from '../charts/charts.component';

@Component({
  selector: 'app-grafic',
  standalone: true,
  imports: [ChartsComponent],
  templateUrl: './grafic.component.html',
  styleUrl: './grafic.component.css'
})
export class GraficComponent {

  qualidade :string = "Qualidade";
  producao :string = "Produção";
  redeExterna :string = "Rede Externa";

  getSetores(setor: number) {

    switch(setor) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      default:
        break;
    }

  }
}
