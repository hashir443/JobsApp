import { Injectable } from '@angular/core';
import { NotifierService } from 'angular-notifier';
import { NotifierOptions } from 'angular-notifier';

declare type NotificationType =
  | 'default'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

/**
 * Custom angular notifier options
 */
export const customNotifierOptions: NotifierOptions = {
  position: {
    horizontal: {
      /**
       * Defines the horizontal position on the screen
       * @type {'left' | 'middle' | 'right'}
       */

      position: 'left',
      distance: 12,
    },
    vertical: {
      /**
       * Defines the vertical position on the screen
       * @type {'top' | 'bottom'}
       */
      position: 'bottom',
      distance: 12,
      gap: 10,
    },
  },
  theme: 'material',
  behaviour: {
    autoHide: 10000,
    onClick: 'hide',
    onMouseover: 'pauseAutoHide',
    showDismissButton: true,
    stacking: 4,
  },
  animations: {
    enabled: true,
    show: {
      preset: 'slide',
      speed: 300,
      easing: 'ease',
    },
    hide: {
      preset: 'fade',
      speed: 300,
      easing: 'ease',
      offset: 50,
    },
    shift: {
      speed: 300,
      easing: 'ease',
    },
    overlap: 150,
  },
};

@Injectable({
  providedIn: 'root',
})
export class AppToastrService {
  private readonly notifier: NotifierService;

  constructor(notifierService: NotifierService) {
    this.notifier = notifierService;
  }

  success(message: string, id?: string | undefined) {
    this.notify('success', message, id);
  }
  error(message: string, id?: string | undefined) {
    this.notify('error', message, id);
  }
  warning(message: string, id?: string | undefined) {
    this.notify('warning', message, id);
  }
  info(message: string, id?: string | undefined) {
    this.notify('info', message, id);
  }

  /**
   * Hide oldest notification
   */
  public hideOldestNotification(): void {
    this.notifier.hideOldest();
  }

  /**
   * Hide newest notification
   */
  public hideNewestNotification(): void {
    this.notifier.hideNewest();
  }

  /**
   * Hide all notifications at once
   */
  public hideAllNotifications(): void {
    this.notifier.hideAll();
  }

  /**
   * Show a specific notification (with a custom notification ID)
   *
   * @param {string} type    Notification type
   * @param {string} message Notification message
   * @param {string} id      Notification ID
   */
  private notify(
    type: NotificationType,
    message: string,
    id?: string | undefined
  ) {
    this.notifier.show({
      type: type,
      message: message,
      id: id, // Again, this is optional
    });
  }

  /**
   * Hide a specific notification (by a given notification ID)
   *
   * @param {string} id Notification ID
   */
  public hideSpecificNotification(id: string): void {
    this.notifier.hide(id);
  }
}
