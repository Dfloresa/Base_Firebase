import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { from } from 'rxjs';
import { Product } from '../models/product';
 

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase : AngularFireDatabase) { }

  getProduct(){

    return this.productList = this.firebase.list('products');
  }

  insertProduct(product : Product){

    this.productList.push({

      Nombre: product.Nomobre,
      Categoria: product.Categoria,
      Local: product.Local,
      Precio: product.Precio
    });

  }

  updateProduct(product: Product){

    this.productList.update(product.Id, {
      Nombre: product.Nomobre,
      Categoria: product.Categoria,
      Local: product.Local,
      Precio: product.Precio
    });
  }

  deelteProduct(product: Product){

    this.productList.remove(product.Id);
  }


}
