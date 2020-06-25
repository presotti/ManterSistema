import { AlterarSistemaComponent } from './alterar-sistema/alterar-sistema.component';
import { IncluirSistemaComponent } from './incluir-sistema/incluir-sistema.component';
import { PesquisarSistemaComponent } from './pesquisar-sistema/pesquisar-sistema.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: PesquisarSistemaComponent
  },
  {
    path: 'incluir',
    component: IncluirSistemaComponent
  },
  {
    path: 'alterar/:id',
    component: AlterarSistemaComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
