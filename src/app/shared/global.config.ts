
export class GLOBAL {
    private static _currentUser: any;
    private static _currentLanguageString: string = '_currentLanguage';


    public static get currentUser(): any {
        return this._currentUser;
    }

    public static set currentUser(user: any) {
        this._currentUser = user;
    }


    public static get currentLanguage(): string {
        return sessionStorage.getItem(this._currentLanguageString) ?? '';
    }

    public static set currentLanguage(language: string) {
        sessionStorage.setItem(this._currentLanguageString, language);
    }
    public static popupconfig()  {
      return {
           width: '70%',
           height: '60%',
           disableClose: true
       }
   }



 }
