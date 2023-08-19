class Logger {

  info(...data: unknown[]): void {
    console.log(...data);
  }
  panic(...data: unknown[]): void {
    console.warn(...data);
  }
}

export { Logger };
