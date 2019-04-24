import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './components/accueil/accueil.component';
import { IndicesComponent } from './indices/indices.component';

const routes: Routes = [
  { path: 'Accueil',    component: AccueilComponent },
  { path: 'CFD',        component: IndicesComponent,  data:{type:"cfd"}},
  { path: 'Futures',    component: IndicesComponent,  data:{type:"futures"}},
  { path: 'Actions',    component: IndicesComponent,  data:{type:"actions"}},
  { path: 'Matieres',   component: IndicesComponent,  data:{type:"matieres"}},
  { path: '', redirectTo: '/Accueil', pathMatch: 'full' },
  { path: '**', component: AccueilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
