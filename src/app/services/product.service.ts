import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { from } from 'rxjs';
import { Product } from '../models/product';
import { ProductComponent } from '../Components/products/product/product.component';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList: AngularFireList<any>;
  selectedProduct: Product = new Product();

  constructor(private firebase : AngularFireDatabase) { }

  getProducts(){

    return this.productList = this.firebase.list('products');
  }

  insertProduct(product : Product){

    this.productList.push({

      Nombre: product.Nombre,
      Categoria: product.Categoria,
      Local: product.Local,
      Precio: product.Precio
    });

  }

  updateProduct(product: Product){

    this.productList.update(product.$key, {
      Nombre: product.Nombre,
      Categoria: product.Categoria,
      Local: product.Local,
      Precio: product.Precio
    });
  }

  delteProduct($key: string){

    this.productList.remove($key);
  }

}
