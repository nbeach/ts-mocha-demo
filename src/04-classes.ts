enum LogLevel {
  ERROR,
  WARN,
  DEBUG
}

class Logger {
  static LEVEL = LogLevel;
  private level: LogLevel;

  constructor(level: LogLevel) {
    this.level = level;
  }

  log(message) {
    let currentLevel = Logger.LEVEL[this.level];
    console.log("${currentLevel}: ${message}");
  }

}

let logger: Logger = new Logger(Logger.LEVEL.DEBUG);
