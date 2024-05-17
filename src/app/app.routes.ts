import { Routes } from '@angular/router';
import { QualidadeView } from './view/qualidade/qualidade.component';
import { Dashboard } from './view/dashboard/dashboard.component';
import { ProducaoView } from './view/producao/producao.component';
import { RedeExternaView } from './view/rede_externa/rede_externa.component';

export const routes: Routes = [
  { path: "", component: Dashboard },
  { path: "qualidade", component: QualidadeView },
  { path: "producao", component: ProducaoView },
  { path: "rede-externa", component: RedeExternaView}
];
