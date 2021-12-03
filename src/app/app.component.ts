import {Component, OnInit} from '@angular/core';
import {Router, Event, NavigationEnd, RouterModule} from '@angular/router';
import { filter } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ProjectHomework';
  // tslint:disable-next-line:typedef
  public ngOnInit() {
    // tslint:disable-next-line:only-arrow-functions typedef
    $(document).ready(function(){
      // tslint:disable-next-line:only-arrow-functions typedef
      $('.scrollTop').click(function(){
        console.log('da click top');
        window.scrollTo(0, 0);
      });
    });
  }
}

