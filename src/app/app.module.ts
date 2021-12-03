import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatOptionModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MenuHeaderComponent } from './menu-header/menu-header.component';
import { ThungnhuaDanplaComponent } from './thungnhua-danpla/thungnhua-danpla.component';
import { MenuHeaderMobileComponent } from './menu-header-mobile/menu-header-mobile.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import { TintucComponent } from './tintuc/tintuc.component';
import { LienheComponent } from './lienhe/lienhe.component';
import {A11yModule} from '@angular/cdk/a11y';
import { FooterMainComponent } from './footer-main/footer-main.component';
import { GioithieuComponent } from './gioithieu/gioithieu.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SideBarLeftComponent } from './side-bar-left/side-bar-left.component';
import {NgxPaginationModule} from 'ngx-pagination';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { ProductDetailsMoreInfoComponent } from './product-details-more-info/product-details-more-info.component';
import {RouterModule} from '@angular/router';
import { MoreProductComponent } from './more-product/more-product.component';
import { ProductTypeComponent } from './product-type/product-type.component';
import { VachnhuaDanplaComponent } from './vachnhua-danpla/vachnhua-danpla.component';
import { XopEvaFoamComponent } from './xop-eva-foam/xop-eva-foam.component';
import { XopbongkhiComponent } from './xopbongkhi/xopbongkhi.component';
import {RatingModule} from 'ngx-rating';
import { BannerSalesComponent } from './banner-sales/banner-sales.component';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FixContentComponent } from './fix-content/fix-content.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuHeaderComponent,
    ThungnhuaDanplaComponent,
    MenuHeaderMobileComponent,
    TintucComponent,
    LienheComponent,
    FooterMainComponent,
    GioithieuComponent,
    ProductComponent,
    ProductDetailsComponent,
    NotFoundComponent,
    SideBarLeftComponent,
    ProductDetailsMoreInfoComponent,
    MoreProductComponent,
    ProductTypeComponent,
    VachnhuaDanplaComponent,
    XopEvaFoamComponent,
    XopbongkhiComponent,
    BannerSalesComponent,
    TrangChuComponent,
    SearchResultComponent,
    FixContentComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatAutocompleteModule,
        MatOptionModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        MatInputModule,
        MatExpansionModule,
        MatListModule,
        CdkAccordionModule,
        A11yModule,
        FormsModule,
        NgxPaginationModule,
        MatSelectModule,
        MatButtonToggleModule,
        NgbModule,
        BrowserAnimationsModule,
        CarouselModule,
        RouterModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
