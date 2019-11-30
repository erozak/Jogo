import { assign, get, sample, invoke } from 'lodash';

import { NODE_ENV } from 'environment';

import { colorize, LOGGER_COLORS } from './Logger.colors';

export enum LOG_LEVEL {
  error,
  warn,
  info,
  verbose,
}

export interface LoggerConfig {
  level: LOG_LEVEL;
  silent: boolean;
  namespace?: string;
}

function logWithConsole(
  level: LOG_LEVEL,
  message?: string,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...args: any[]
): void {
  invoke(
    console,
    get(
      {
        [LOG_LEVEL.error]: 'error',
        [LOG_LEVEL.warn]: 'warn',
        [LOG_LEVEL.info]: 'info',
        [LOG_LEVEL.verbose]: 'debug',
      },
      level,
      'log',
    ),
    message,
    ...args,
  );
}

export class Logger {
  public config: LoggerConfig;
  public color: string;

  constructor(config?: Partial<LoggerConfig>) {
    this.config = assign(
      {
        level: LOG_LEVEL.verbose,
        silent: NODE_ENV.production,
      },
      config,
    );

    this.color = sample(LOGGER_COLORS) || 'inherit';
  }

  protected log(
    level: LOG_LEVEL,
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    args: any[],
  ) {
    if (this.config.silent || level > this.config.level) {
      return;
    }

    let formatted = '';
    const params = [];

    if (this.config.namespace) {
      formatted = colorize(this.config.namespace) + ' ';
      params.push(
        `color: ${this.color}; font-weight: bold;`,
        'color: inherit; font-weight: inherit;',
      );
    }
    console.log('!!!!' + formatted + message, ...params, ...args);
    logWithConsole(level, formatted + message, ...params, ...args);
  }

  public verbose(
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) {
    this.log(LOG_LEVEL.verbose, message, args);
  }

  public info(
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) {
    this.log(LOG_LEVEL.info, message, args);
  }

  public warn(
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) {
    this.log(LOG_LEVEL.warn, message, args);
  }

  public error(
    message: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ...args: any[]
  ) {
    this.log(LOG_LEVEL.error, message, args);
  }
}
