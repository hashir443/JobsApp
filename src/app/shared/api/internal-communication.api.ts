import { Injectable, OnDestroy } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InternalCommunicationService {
  // private data = new BehaviorSubject(false);
  // currentData = this.data.asObservable();


  // private showNotification = new BehaviorSubject(false);
  // showNotificationState = this.data.asObservable();


  // setData(data: boolean) {
  //       this.data.next(data);
  //  }

  //  private createGroupPopup = new BehaviorSubject(false)
  // currentDataPopupState = this.createGroupPopup.asObservable();

  //   setDataPopupState(data: boolean) {
  //       this.createGroupPopup.next(data);
  //  }

   private error = new BehaviorSubject(false);
   currentError = this.error.asObservable();
 
 
   setError(error: any) {
         this.error.next(error);
    }

  //   setShowNotificationState(state: boolean) {
  //     this.showNotification.next(state);
  //   }
    

  //   private queryParam = new BehaviorSubject<any>(null)
  //   hasQueryParam = this.queryParam.asObservable();

  //   constructor(private router: Router) {
  //     this.router.events.subscribe((event) => {
  //       if (event instanceof NavigationStart) {
  //         // Check if the current route contains '/profile/about'
  //         if (event.url.includes('/profile/about')) {
  //           this.queryParam.next(null);
  //         }
  //       }
  //     });
  //   }

  //   setQueryParam(param: number) {
  //     this.queryParam.next(param);
  //   }

  //   private groupDataWithPost = new BehaviorSubject<any>(null)
  //   hasGroupDataWithPost = this.groupDataWithPost.asObservable();

  //   setGroupData(gData: Group): any {
  //     return this.groupDataWithPost.next(gData);
  //   }

  //   private memberInvitation = new BehaviorSubject(false);
  //   memberInvitationState = this.memberInvitation.asObservable();

  //   setMemberInvitation (state: boolean) {
  //     this.memberInvitation.next(state);
  //   }

  //   private groupDeleted = new BehaviorSubject(false);
  //   groupDeletedState = this.groupDeleted.asObservable();

  //   setgroupDeleted (state: boolean) {
  //     this.groupDeleted.next(state);
  //   }

  //   private newGroupCreated = new BehaviorSubject(false);
  //   newGroupCreatedState = this.newGroupCreated.asObservable();

  //   setnewGroupCreated (state: boolean) {
  //     this.newGroupCreated.next(state);
  //   }
    
  //   private userDeclinedGroupRequest = new BehaviorSubject(false);
  //   userDeclinedGroupRequestState = this.userDeclinedGroupRequest.asObservable();

  //   setUserDeclinedGroupRequest (state: boolean) {
  //     this.userDeclinedGroupRequest.next(state);
  //   }

  //   private isTagSearched = new BehaviorSubject(false);
  //   isTagSearchedState = this.isTagSearched.asObservable();

  //   setIsTagSearched (state: boolean) {
  //     this.isTagSearched.next(state);
  //   }

    // ngOnDestroy() {
    //   this.queryParam.complete(); // Clean up the BehaviorSubject on component destruction
    // }

}
