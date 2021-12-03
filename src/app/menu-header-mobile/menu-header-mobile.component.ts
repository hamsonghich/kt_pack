import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {MenuHeaderComponent} from '../menu-header/menu-header.component';
import {DataServicesService} from '../services/data-services.service';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-menu-header-mobile',
  templateUrl: './menu-header-mobile.component.html',
  styleUrls: ['./menu-header-mobile.component.scss']
})
export class MenuHeaderMobileComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | any;
  constructor(public  menuHeader: DataServicesService) {
  }
  ngOnInit(): void {
    // console.log(this.menuHeader.listHeader);
  }
  public exit(): any{
  }
}
