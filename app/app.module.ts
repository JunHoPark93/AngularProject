import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ApplicationComponent from './components/application/application.component';
import CarouselComponent from './components/carousel/carousel.component';
import FooterComponent from './components/footer/footer.component';
import NavbarComponent from './components/navbar/navbar.component';
import ProductItemComponent from './components/product-item/product-item.component';
import SearchComponent from './components/search/search.component';
import StarsComponent from './components/stars/stars.component';
import { ProductService } from './services/product.service';
import {RouterModule} from "@angular/router";
import HomeComponent from "./components/home/home.component";
import ProductDetailComponent from "./components/product-detail/product-detail.component";
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

@NgModule({
    imports : [BrowserModule,
        RouterModule.forRoot([
            { path : '', component : HomeComponent },
            { path : 'products/:prodTitle', component : ProductDetailComponent }
        ])],
    declarations : [
        ApplicationComponent,
        CarouselComponent,
        FooterComponent,
        NavbarComponent,
        HomeComponent,
        ProductDetailComponent,
        ProductItemComponent,
        SearchComponent,
        StarsComponent
    ],
    providers : [ProductService, {provide : LocationStrategy, useClass : HashLocationStrategy }], // Product Service가 ApplicationComponent에 주입될 때 사용한다.
    bootstrap : [ApplicationComponent]
})
export class AppModule {}