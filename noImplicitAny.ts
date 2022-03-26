function echo(message: string) {
  return message;
}

let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase(); 

let nullableMessage: string = null;
let undefinedableMessage: string = undefined;
let onlyNull :null = undefined;
let onlyUndefined: undefined = null;
