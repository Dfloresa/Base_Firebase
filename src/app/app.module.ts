import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//firebase
import { AngularFireModule} from 'angularfire2'
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { environment } from '../environments/environment';

//componentes
import { ProductsComponent } from './Components/products/products.component';
import { ProductListComponent } from './Components/products/product-list/product-list.component';
import { ProductComponent } from './Components/products/product/product.component';


//Services
import { ProductService } from './services/product.service'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [ ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
