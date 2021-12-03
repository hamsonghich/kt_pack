import {Component, ElementRef, OnInit} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
import {NavigationEnd, Router, NavigationStart} from '@angular/router';
import {any} from 'codelyzer/util/function';

@Component({
  selector: 'app-more-product',
  templateUrl: './more-product.component.html',
  styleUrls: ['./more-product.component.scss']
})
export class MoreProductComponent implements OnInit {

  constructor(public dataServicesService: DataServicesService, public router: Router) { }
  arrFirstPage: any[] = [];
  ngOnInit(): void {
    for (let i = 0; i < this.dataServicesService.dataProductDetailsList.length; i++){
      this.arrFirstPage[i] = 1;
    }
  }
  public exit(): any {
    // setTimeout(() => {
    //   location.reload();
    // }, 100);
  }
}
