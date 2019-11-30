import { Service } from '../Service';
import { Subject } from 'rxjs';

import { Notification } from './Widget.model';

export class WidgetService extends Service {
  protected notification$ = new Subject<Notification>();

  constructor() {
    super('Widget');
  }

  get notification() {
    return this.notification$.asObservable();
  }

  public destroy() {
    this.notification$.complete();

    super.destroy();
  }

  public pushNotification(notification: Notification) {
    this.logger.info('push notification: %O', notification);

    this.notification$.next(notification);
  }
}
