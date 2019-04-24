import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class IndiceModule { 

  id: number;
  pays:string;
  nom : string;

  IndiceModule(ID:number,PAYS:string,NOM:string)
  {
    this.id = ID;
    this.pays=PAYS;
    this.nom = NOM;
  }

}
