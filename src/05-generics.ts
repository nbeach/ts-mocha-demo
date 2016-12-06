function generic<T>(arg: T): T {
    return arg;
}

let someValue = generic<string>("stuff");

class Sourcer<T> {
  private source: T

  setSource(source: T) {
    this.source = source
  }

}

let sourcer = new Sourcer<string>();

class SourceOutputer<X, Y> {
  private source: X
  private output: Y

  setSource(source: X) {
    this.source = source
  }

  getOutput(): Y {
    return this.output
  }
}

let sourceOutputer = new SourceOutputer<number, string>();

class Messager<T extends string> {
  private message: string

  setMessage(message: T) {
    this.message = message;
  }

}
