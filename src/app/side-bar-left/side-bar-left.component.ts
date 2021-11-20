import {Component, OnInit, ViewChild} from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-side-bar-left',
  templateUrl: './side-bar-left.component.html',
  styleUrls: ['./side-bar-left.component.scss']
})
export class SideBarLeftComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion | any;
  constructor(public  menuHeader: DataServicesService) {
  }

  ngOnInit(): void {
  }
  public exit(): any {
    // setTimeout(() => {
    //   location.reload();
    // }, 100);
  }
}
