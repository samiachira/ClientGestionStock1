import {Produit} from '../shared/produit';
import {Injectable} from '@angular/core';

@Injectable()
export  class ProduitMockService{
  PRODUIT: Produit [] =[];


  constructor(){
    let p1 :Produit=new Produit('livre',50,5800);
    let p2 :Produit=new Produit('cahier',450,480);
    let p3 : Produit= new Produit('stylo',500,750);

    this.PRODUIT.push(p1);
    this.PRODUIT.push(p2);
    this.PRODUIT.push(p3);
  }
  public  getProduit(): Produit[]{
    return this.PRODUIT;
  }
}




