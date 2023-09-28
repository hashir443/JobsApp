import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { GLOBAL } from './shared/global.config';
import { SpinnerService } from './shared/spinner/spinner.service';
export enum AppLanguage {
  cn = 'cn',
  en = 'en',
}
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  isRequesting = false;
  constructor(private translate: TranslateService,public spinnerService: SpinnerService) {
    this.spinnerService.requestInProcess$.subscribe((isDone) => {
      this.isRequesting = isDone;
    });

    this.translate.onLangChange.subscribe(
      (event: LangChangeEvent) => {
        let lang = event.lang;
        // let htmlTag = this.document.getElementsByTagName(
        //   "html"
        // )[0] as HTMLHtmlElement;
        // htmlTag.dir = lang === AppLanguage.ur ? "rtl" : "ltr";
        this.setDefaultLanguage();
        
      }
    );
  }

  ngOnInit(): void {
    this.translate.addLangs([AppLanguage.en, AppLanguage.cn]);
    this.setDefaultLanguage();
  }

  setDefaultLanguage() {
    let currentLang = GLOBAL.currentLanguage;
    currentLang = currentLang != '' ? currentLang : AppLanguage.en;
    this.translate.setDefaultLang(currentLang);
    this.translate.use(currentLang);
    // this.changeCssFile(currentLang);
  }
}
