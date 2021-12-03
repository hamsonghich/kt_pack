import {Component, OnChanges, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, ParamMap} from '@angular/router';
import {DataServicesService} from '../services/data-services.service';
import * as $ from 'jquery';
import {param} from 'jquery';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {empty} from 'rxjs/internal/Observer';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit{
  private id: Observable<any> | any;
  public filter$: Observable<any> | undefined;
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];
  public productType: any[] = [];
  constructor(public activatedRoute: ActivatedRoute, public dataServicesService: DataServicesService,
              ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      console.log('id: ' + this.id);
      this.productType.splice(0, this.productType.length);
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.dataServicesService.dataProductDetailsList.length ; i++){
        // tslint:disable-next-line:prefer-for-of
        for (let j = 0; j < this.dataServicesService.dataProductDetailsList[i].length; j++){
          if (this.dataServicesService.dataProductDetailsList[i][j].typeName.name === this.id){
            this.productType.push(this.dataServicesService.dataProductDetailsList[i][j]);
          }
        }
      }
      console.log('ahihi');
      console.log(this.productType);
    });
    const num = this.productType.length;
    console.log('num: ' + num);
    // tslint:disable-next-line:only-arrow-functions typedef
    $( document ).ready(function() {
      // $(window).scrollTop(0);
    });
    console.log(this.getProductDetailsId());
    // tslint:disable-next-line:prefer-for-of
  }
  public getProductDetailsId(): any {
    // this.activatedRoute.paramMap.subscribe(params => {
    //   this.id = params.get('id');
    //   console.log('id' + this.id);
    // });
    // return this.id;
  }
  public exit(): any {
     // setTimeout( () => {
     //   location.reload();
     // }, 200);
  }



}
