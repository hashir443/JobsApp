import { Component } from '@angular/core';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';
import { GLOBAL } from './shared/global.config';
import { SpinnerService } from './shared/spinner/spinner.service';
import { AnimationController, Animation } from '@ionic/angular';
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
  myCustomTransition = (baseEl: any, opts?: any): Animation => {
    const enteringEl = opts.enteringEl;
    const leavingEl = opts.leavingEl;
    const animationCtrl = this.animCtrl;
  
    // Check if it's a forward (going forward) or back (going back) transition
    const isForward = opts.direction === 'forward';
  
    // Create a fade-in animation for the entering element
    const fadeIn = animationCtrl
      .create()
      .addElement(enteringEl)
      .duration(300)
      .iterations(1)
      .fromTo('opacity', '0', '1') // Fading in from 0 to 1
      .easing('linear');
  
    // Create a fade-out animation for the leaving element
    const fadeOut = animationCtrl
      .create()
      .addElement(leavingEl)
      .duration(300)
      .iterations(1)
      .fromTo('opacity', '1', '0') // Fading out from 1 to 0
      .easing('linear');
  
    // Create a transformation animation for the current screen (leaving element)
    const transform = animationCtrl
      .create()
      .addElement(leavingEl)
      .duration(300)
      .iterations(1)
      .fromTo('transform', 'translateX(0)', isForward ? 'translateX(-100%)' : 'translateX(100%)') // From left to right or right to left
      .easing('linear');
  
    // Create a group animation to play the appropriate animations
    const animations = [fadeIn, fadeOut, transform];
  
    // If it's a back transition, reverse the order of animations
    if (!isForward) {
      animations.reverse();
    }
  
    const animation = animationCtrl.create().duration(300).addAnimation(animations);
  
    // Return the animation object
    return animation;
  };

  isRequesting = false;
  constructor(
    private translate: TranslateService,
    public spinnerService: SpinnerService,
    private animCtrl: AnimationController
  ) {
    this.spinnerService.requestInProcess$.subscribe((isDone) => {
      this.isRequesting = isDone;
    });

    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      let lang = event.lang;
      // let htmlTag = this.document.getElementsByTagName(
      //   "html"
      // )[0] as HTMLHtmlElement;
      // htmlTag.dir = lang === AppLanguage.ur ? "rtl" : "ltr";
      this.setDefaultLanguage();
    });
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
