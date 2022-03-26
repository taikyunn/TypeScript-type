"use strict";
function echo(message) {
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
implicitAny.toUpperCase();
let nullableMessage = echo('hi');
let undefinedableMessage = undefined;
let onlyNull = undefined;
let onlyUndefined = null;
echo.call(null, 'hi');
