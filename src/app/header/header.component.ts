import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {FormControl} from '@angular/forms';
import {DataServicesService} from '../services/data-services.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public counter = 0;
  public dataCart: any[] = [];
  public dataSearchKeyword: any[] = [];
  public dataSearchMatch: any[] = [];
  public options1: any[] = [];
  public dataTest: any[] = [];
  myControl = new FormControl();
  options  = this.dataServicesService.listHeader.map((item) => {
    return item.mother;
  });
  filteredOptions: Observable<string[]> | any;
  constructor(public dataServicesService: DataServicesService, public router: Router) {
    this.dataServicesService.dataSearchHeader1 = this.filteredOptions;
    this.dataServicesService.key = this.myControl.value;
    console.log('value --');
    console.log(this.myControl.value);
  }
  ngOnInit(): void {
    this.dataServicesService.dataAddCartItem$.subscribe(dem => {
      this.dataCart.splice(0, this.dataCart.length);
      dem.forEach((item1: any) => {
        this.dataCart.push(item1);
        this.counter = this.dataCart.length;
        console.log('---------ii---------');
        console.log(this.dataCart);
        console.log('----------ii--------');
      });
    });

    $(document).ready(() => {
      // tslint:disable-next-line:typedef
      $('.inputSearch').keyup(function(e) {
        if (e.which === 13) {
          $(this).blur();
        }
       });
      $('.inputSearch').focusin(() => {
          $('.listSearch').fadeIn(100);
          $('.indexBlack').show();
          console.log('da focus');
          this.router.navigateByUrl(`/trangchu`);
        });
      $('.inputSearch').focusout((ev) => {
            $('.listSearch').fadeOut(100);
            $('.indexBlack').hide();
            console.log('thoat focus');
        });

      $('#top-header__right--menu').click(() => {
        $('.container-listMenuTop').toggleClass('active');
      });

    });
    $(window).resize(() => {
        const screenWidth = $(window).width();
        console.log('width:' +  screenWidth);
        if (screenWidth as number  < 720) {
            console.log('nho');
            $('#top-header__right--menu').show();
            $('#screenPC').hide();
            $('#screenMobile').show();
          }
          else if  (screenWidth as number >= 720 ) {
            console.log('to');
            $('#top-header__right--menu').hide();
            $('#screenPC').show();
            $('#screenMobile').hide();
          }
      });
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
    console.log('------------------');
    // console.log(this.dataServicesService.dataSearchHeader);
    this.dataServicesService.dataSearchHeader1 = this.filteredOptions;
    console.log(this.dataServicesService.dataSearchHeader1.length);
  }
  public height(): any{
    console.log('height: ' + $('#cdk-overlay-0').css('height'));
    return $('#cdk-overlay-0').css('height');
  }
  private _filter(value: string): any[]{
    const filterValue = value.toLowerCase();
    console.log(filterValue);
    return this.dataServicesService.dataSearchHeader.filter(item1 =>
      this.removeDauTV(item1.name).toLowerCase().includes(filterValue));
  }

  public getInputValue(): any {
    // console.log('--------------------subject--------------');
    // console.log(this.dataServicesService.currentNameSubject$.getValue());
    console.log('da chay vao result');
    this.dataSearchKeyword.splice(0, this.dataSearchKeyword.length);
    this.dataSearchMatch.splice(0, this.dataSearchMatch.length);
    this.dataServicesService.dataProductDetailsList.forEach(item => {
      item.forEach(item1 => {
        const obj = JSON.parse(JSON.stringify(item1));
        // tslint:disable-next-line:max-line-length
        if (this.dataServicesService.removeDauTV(obj.id.name).includes(this.dataServicesService.removeDauTV(this.myControl.value.toLowerCase()))){
          console.log(true);
          this.dataSearchMatch.push(item1);
        }
      });
    });
    this.dataServicesService.currentNameSubject$.next(this.dataSearchMatch);
    console.log('data search match');
    console.log(this.dataSearchMatch);
    this.router.navigateByUrl(`/searchResult`);
  }
  public removeDauTV(str: string): any{
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'a');
    str = str.toString().replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'e');
    str = str.toString().replace(/??|??|???|???|??/g, 'i');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'o');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'u');
    str = str.toString().replace(/???|??|???|???|???/g, 'y');
    str = str.toString().replace(/??/g, 'd');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'A');
    str = str.toString().replace(/??|??|???|???|???|??|???|???|???|???|???/g, 'E');
    str = str.toString().replace(/??|??|???|???|??/g, 'I');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???|??|???|???|???|???|???/g, 'O');
    str = str.toString().replace(/??|??|???|???|??|??|???|???|???|???|???/g, 'U');
    str = str.toString().replace(/???|??|???|???|???/g, 'Y');
    str = str.toString().replace(/??/g, 'D');
    // Combining Diacritical Marks
    str = str.toString().replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ''); // huy???n, s???c, h???i, ng??, n???ng
    str = str.toString().replace(/\u02C6|\u0306|\u031B/g, ''); // m?? ?? (??), m?? ??, m?? ?? (??)
    return str.toLowerCase();
  }
  public hideAutoComplete(): any{
    // document.querySelectorAll<HTMLElement>('.mat-autocomplete-panel')[0].style.display = 'none';
    $('.mat-autocomplete-panel').hide();
  }
}
