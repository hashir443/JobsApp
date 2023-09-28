import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AppLanguage } from 'src/app/app.component';
import { GLOBAL } from 'src/app/shared/global.config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  languages: {label: string, code: string,  isSelected: boolean}[] = [
    {label: 'ENG', code: AppLanguage.en,  isSelected: false},
    {label: '中国人', code: AppLanguage.cn,  isSelected: false}
  ];

  selectedLanguage = '';

  constructor(private translate: TranslateService) { }

  ngOnInit() {
    let curLang = this.translate.currentLang;
    if(curLang) {
      let index = this.languages.findIndex(lang => lang.code === curLang);
      this.languages[index].isSelected = true;
      this.selectedLanguage = this.languages[index].label;
    }
  }

  onLanguageChange(code: string) {
    // Reset the previously selected language
    const previousIndex = this.languages.findIndex(lang => lang.isSelected === true);
    if (previousIndex !== -1) {
        this.languages[previousIndex].isSelected = false;
    }

    // Set the new language as selected
    const newIndex = this.languages.findIndex(lang => lang.code === code);
    if (newIndex !== -1) {
        this.languages[newIndex].isSelected = true;
        this.selectedLanguage = this.languages[newIndex].label;
    } else {
        // Handle the case where the new language code is not found
        // You may want to add some error handling here
    }

    // Update the global and default language
    GLOBAL.currentLanguage = code;
    this.translate.setDefaultLang(code);
    this.translate.use(code);
}

}
