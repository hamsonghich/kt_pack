import {AfterContentInit, AfterViewInit, Component, Inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {DataServicesService} from '../services/data-services.service';
import { DOCUMENT } from '@angular/common';
import './custom.js';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})

export class ProductDetailsComponent implements OnInit{
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['<i class="fa fa-angle-double-left"></i>', '<i class="fa fa-angle-double-right"></i>'],
    responsive: {
      0: {
        items: 4
      },
      400: {
        items: 4
      },
      740: {
        items: 4
      },
      940: {
        items: 4
      }
    },
    nav: true
  };
  // tslint:disable-next-line:max-line-length
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService,
              @Inject(DOCUMENT) public document: Document,  public router: Router) {
  }
  // itemPro: any;
  public productItem: any;
  private id: Observable<any> | any;

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataServicesService.productDetailsList.thungnhuaDanpla.length; i++) {
        if (this.dataServicesService.productDetailsList.thungnhuaDanpla[i].id.link === this.id) {
          this.productItem = this.dataServicesService.productDetailsList.thungnhuaDanpla[i];
        }
      }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataServicesService.productDetailsList.vachnhuaDanpla.length; i++) {
        if (this.dataServicesService.productDetailsList.vachnhuaDanpla[i].id.link === this.id) {
          this.productItem = this.dataServicesService.productDetailsList.vachnhuaDanpla[i];
        }
      }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataServicesService.productDetailsList.xopEvaPEFoam.length; i++) {
        if (this.dataServicesService.productDetailsList.xopEvaPEFoam[i].id.link === this.id) {
          this.productItem = this.dataServicesService.productDetailsList.xopEvaPEFoam[i];
        }
      }
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataServicesService.productDetailsList.xopBongKhi.length; i++) {
        if (this.dataServicesService.productDetailsList.xopBongKhi[i].id.link === this.id) {
          this.productItem = this.dataServicesService.productDetailsList.xopBongKhi[i];
        }
      }
      console.log(this.productItem);
      console.log(this.dataServicesService.productDetailsList.thungnhuaDanpla[0].id);
    });
    // tslint:disable-next-line:only-arrow-functions typedef
    $(document).ready(function(){
     $('.img-item').css({display : 'none'});
      // tslint:disable-next-line:typedef
     $( '.item_img_small' ).mouseover(function(){
        $( this ).addClass( 'active' );
      });
      // tslint:disable-next-line:typedef
     $( '.item_img_small' ).mouseout(function(){
        $( this ).removeClass( 'active' );
      });
      // tslint:disable-next-line:only-arrow-functions typedef
     $('.content-img').click(function(event){
        $('.img-fake').css('display', 'none');
        console.log(event.target.className);
        const itemImg = document.getElementsByClassName('item_img_small');
        const itemImgBig = document.getElementsByClassName('img-item');
        console.log(itemImg[0].className);
        let idActive;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < itemImg.length; i++) {
          if (itemImg[i].className === 'item_img_small ng-star-inserted active') {
            console.log('id' + itemImg[i].id.replace('img_details', ''));
            idActive = itemImg[i].id.replace('img_details', '');
            console.log('ok:' + itemImg[i].className);
            $('.img-item').css({display: 'none'});
            // @ts-ignore
            document.getElementById('idImg' + idActive).style.display = 'block';
          }
        }
      });
    });
  }
}
