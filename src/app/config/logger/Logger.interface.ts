export interface Logger {
  debug(callerClass: object, message: string): void;
  info(callerClass: object, message: string): void;
  error(callerClass: object, message: string): void;
}
