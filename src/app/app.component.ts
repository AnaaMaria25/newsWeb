import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  public ishome: boolean;
  private formm: FormGroup;
  public idioms: any[] = [
    { value: 'en', viewValue: 'English' },
    { value: 'es', viewValue: 'Spanish' },
  ];

  constructor(public translate: TranslateService, private formBuilder: FormBuilder, public router: Router) {
    translate.setDefaultLang('en');
    this.ishome = true;
    this.formm = this.formBuilder.group({
      language: '',
    });
  }

  public useLanguage() {
    if (this.formm.value.language !== undefined) {
      this.translate.use(this.formm.value.language);
    }
    this.showFiller = false;
  }
  public isHome() {
    console.log(this.router.url);
    console.log(this.ishome);
    this.ishome = false;
    console.log(this.ishome);
  }
}
