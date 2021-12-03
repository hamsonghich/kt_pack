import {AfterContentInit, AfterViewInit, Component, Inject, Injector, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router, NavigationEnd } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import {DataServicesService} from '../services/data-services.service';
import { DOCUMENT } from '@angular/common';
import './custom.js';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})

export class ProductDetailsComponent implements OnInit,  AfterViewInit{
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
  private loadAPI: Promise<unknown> | any;
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService,
              @Inject(DOCUMENT) public document: Document,  public router: Router) {
  }
  // itemPro: any;
  public productItem: any;
  private id: Observable<any> | any;

  ngOnInit(): void {
    // tslint:disable-next-line:only-arrow-functions typedef
    $.getScript('src/assets_v2/js/main.js');
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
            this.reloadJq();
            this.productItem = (this.dataServicesService.dataProductDetailsList[i][j]);
          }
        }
      }
    });
  }
  ngAfterViewInit(): any{

  }

  public reloadJq(): any {
  }

}
