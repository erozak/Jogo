import { Logger } from '../Logger';

export class Service {
  protected logger: Logger;

  constructor(namespace: string) {
    this.logger = new Logger({
      namespace,
    });

    this.logger.verbose('initial');
  }

  public destroy() {
    this.logger.verbose('destroy');
  }
}
