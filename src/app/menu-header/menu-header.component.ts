import {Component, OnInit, ViewChild} from '@angular/core';
import {DataServicesService} from '../services/data-services.service';
interface ListHeader{
  mother: {name: any, link: any};
  child: {name: any, link: any}[];
}
interface LinkItemListHeader{
  linksItem: string;
}

@Component({
  selector: 'app-menu-header',
  templateUrl: './menu-header.component.html',
  styleUrls: ['./menu-header.component.scss']
})
export class MenuHeaderComponent implements OnInit {
  public linkItemListHeader: LinkItemListHeader[] = [
    {linksItem: '/templateUI'},
  ];
  constructor(public menuHeader: DataServicesService) { }

  ngOnInit(): void {
  }
  public get(): any{
    return 1;
  }
  public exit(): any{
  }

}
