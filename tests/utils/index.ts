class Expect {
  constructor(result: any) {
    this.result = result;
  }

  result: any;

  toBe<T>(value: T) {
    console.log(this.result === value);
  }

  toBeTruthy(value: boolean) {
    value === true;
  }

  toBeFalsy(value: boolean) {
    value === false;
  }
}

function it(description: string, callback: Function) {
  console.log(description);
  callback();
}

function expect(result: any) {
  return new Expect(result);
}

export { it, expect };
