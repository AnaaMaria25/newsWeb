import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newsWeb';
  showFiller = false;
  private formm: FormGroup;
  public idioms: any[] = [
    {value: 'en', viewValue: 'English'},
    {value: 'es', viewValue: 'Spanish'},
  ];

  constructor(public translate: TranslateService, private formBuilder: FormBuilder) {
    translate.setDefaultLang('en');
    this.formm = this.formBuilder.group({
      language: '',
    });
}

public useLanguage() {
  console.log(this.formm.value);
  if (this.formm.value.language !== undefined) {

    this.translate.use(this.formm.value.language);
  }
}
}
