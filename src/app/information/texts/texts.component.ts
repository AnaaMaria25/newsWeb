import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-texts',
  templateUrl: './texts.component.html',
  styleUrls: ['./texts.component.scss']
})
export class TextsComponent implements OnInit {

  public text: boolean;
  constructor(private router: Router, public translate: TranslateService) {
    translate.setDefaultLang('en');
    if ( this.router.url === '/about') {
      this.text = true;
    } else {
      this.text = false;
    }
  }

  ngOnInit() {
  }

}
