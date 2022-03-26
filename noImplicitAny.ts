function echo(message: string): string | null{
  return message;
}

let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();

let nullableMessage = echo('hi');
let undefinedableMessage: string | undefined = undefined;
let onlyNull :null | undefined = undefined;
let onlyUndefined: undefined | null = null;

echo.call(null, 'hi');
