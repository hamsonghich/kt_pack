import {Component, Inject, OnInit} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import {DataServicesService} from '../services/data-services.service';
import { DOCUMENT } from '@angular/common';
import './custom.js';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})

export class ProductDetailsComponent implements OnInit{
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService,
              @Inject(DOCUMENT) public document: Document,  public router: Router) {

  }
  public dataAddCart: any[] = [];
  public productItem1 = {
  addCart: false,
  typeName: {name: '', id: ''},
  id: {name: '', link: ''},
  img: [{ name: '', link: '' }, ],
  address: {name: ''},
  price: {name: ''},
  sellNumber: {number: 0},
  like: false,
  star: {number: 0},
  discount: {number: 0},
  evaluate: {number: 0},
  description: [
    {
      title: '', contentParam: [{param1: '', param2: ''}, ],
    },
]
  };
  public booleanCart = {
    addCart: false,
  }; // trang thai show add hide delete
  public productItem: Observable<any> | any;
  public id: Observable<any> | any;
  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions typedef
    $(document).ready(function(){
      // tslint:disable-next-line:only-arrow-functions typedef
      $('.addCart').click(function(){
        $('.toastAddCart').animate({
          right: '200px',
          top: '7px',
          opacity: 1,
        }, 1000).delay(2000);
        $('.toastAddCart').animate({
          right: '0px',
          top: '7px',
          opacity: 0,
        }, 1000);
      });
    });
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataServicesService.dataProductDetailsList.length ; i++){
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.dataServicesService.dataProductDetailsList[i].length; j++){
          if (this.dataServicesService.dataProductDetailsList[i][j].id.link === this.id){
            this.productItem = this.dataServicesService.dataProductDetailsList[i][j];
          }
        }
      }
    });
    this.productItem1 = JSON.parse(JSON.stringify(this.productItem));
    this.booleanCart = JSON.parse(JSON.stringify(this.productItem.addCart));
  }
  public clickImg(k: number): any{
    console.log('da click' + k);
    const  itemBig = document.getElementsByClassName('img-item');
    $('.img-item').css({display: 'none'});
    $('#idImg' + k).css({display: 'block'});
  }

  public reload(): any {
    this.productItem1 = JSON.parse(JSON.stringify(this.productItem));
    this.booleanCart = JSON.parse(JSON.stringify(this.productItem.addCart));
  }
  public addCart(): any{
    this.productItem1.addCart = true;
    this.dataAddCart.push(this.productItem1);
    console.log(this.dataAddCart);
    this.dataServicesService.dataAddCartItem$.next(this.dataAddCart);
    console.log(this.dataServicesService.dataAddCartItem$.getValue());
  }


}
