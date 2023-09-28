import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

  constructor() { }

  // Observable string sources
  requestInProcessSource = new Subject<boolean>();
  // Observable string streams
  requestInProcess$ = this.requestInProcessSource.asObservable();
  // Service message commands
  requestInProcess(isRequesting: boolean) {
    setTimeout(() => {
      this.requestInProcessSource.next(isRequesting);
    }, 1)
  }
}
