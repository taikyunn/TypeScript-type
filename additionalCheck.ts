let global = "globalHello";
function noUnusedLocals() {
  let noUnusedLocals = 'test';
  console.log(noUnusedLocals)
}

function noUnusedParameters(num1: number) {
  console.log(num1);
}

function noImplicitReturns(message: string) :string | undefined {
  if (message) {
    return message;
  }
  return;
}
