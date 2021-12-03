import { Component, OnInit } from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-xopbongkhi',
  templateUrl: './xopbongkhi.component.html',
  styleUrls: ['./xopbongkhi.component.scss']
})
export class XopbongkhiComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService) {
  }
  page = 1;
  public itemOfPage = 10;
  public itemOfPageArr = [8, 12, 16, 20, 24];
  public chooseItemOfPage = this.itemOfPageArr[0];
  public priceSortArr = [
    {name: 'Giá: Thấp đến Cao', keyword: 'low'},
    {name: 'Giá: Cao đến Thấp', keyword: 'high'}
  ];
  public choosePriceSortArr = this.priceSortArr[0];
  ngOnInit(): void {
    console.log(this.chooseItemOfPage);
    // tslint:disable-next-line:only-arrow-functions typedef
    $( document ).ready(function() {
      $(window).scrollTop(0);
    });
  }
  public popular(): any{
  }
  public sortBestSales(): any {
    // tslint:disable-next-line:only-arrow-functions
    this.dataServicesService.dataProductDetailsList[3] = this.dataServicesService.dataProductDetailsList[3].sort(function(item1, item2){
      const value1 = item1.sellNumber.number;
      const value2 = item2.sellNumber.number;
      if (value1 > value2){
        return -1;
      }
      if (value1 < value2){
        return 1;
      }
      return 0;
    });
  }
  public sortPopular(): any {
    // tslint:disable-next-line:only-arrow-functions
    this.dataServicesService.dataProductDetailsList[3] = this.dataServicesService.dataProductDetailsList[3].sort(function(item1, item2){
      const value1 = item1.star.number;
      const value2 = item2.star.number;
      if (value1 > value2){
        return -1;
      }
      if (value1 < value2){
        return 1;
      }
      return 0;
    });
  }

}
