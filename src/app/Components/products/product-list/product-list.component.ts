import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service'
import { fromInt } from 'long';
import { Product } from '../../../models/product'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  productList: Product[];


  constructor(private productservice : ProductService) { }

  ngOnInit() {
    this.productservice.getProducts()
    .snapshotChanges()
    .subscribe(item => {
        this.productList = [];
        item.forEach(element => {
          let x = element.payload.toJSON();
          x["$key"] = element.key;
          this.productList.push(x as Product);
        });
    });
  }

  onEdit(product: Product){
    this.productservice.selectedProduct = Object.assign({}, product);
  }

  onDelete($key: string){
      this.productservice.delteProduct($key);
  }

}
