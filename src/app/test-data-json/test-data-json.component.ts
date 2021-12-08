import { Component, OnInit } from '@angular/core';
import {DataJsonServerService} from '../services/data-json-server.service';
import {data} from 'jquery';
import {DataServicesService} from '../services/data-services.service';

@Component({
  selector: 'app-test-data-json',
  templateUrl: './test-data-json.component.html',
  styleUrls: ['./test-data-json.component.scss']
})
export class TestDataJsonComponent implements OnInit {
  public keyInputGet: any;
  public keyInputPost: any;
  public payload  = this.dataServicesService.listHeader;
  public dataAddCart1: any[] = [];
  constructor(public dataJsonServerService: DataJsonServerService, public dataServicesService: DataServicesService) { }

  ngOnInit(): void {
  }
  public getData(): any{
    console.log('keyInputGet: ' + this.keyInputGet);
    this.dataJsonServerService.getDataJsonCustom(this.keyInputGet).subscribe(data1 => {
      console.log('data get: ', data1);
    });
  }
  public postData(): any{
    console.log('keyInputPost: ' +  this.keyInputPost);
    this.dataJsonServerService.postDataJsonCustom(this.keyInputPost, this.payload).subscribe(data2 => {
      console.log('data post: ', data2);
    });
  }



}
