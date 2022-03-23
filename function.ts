// 関数宣言時に型をつける方法
// パラメータの型はパラメータの後に今までと同じように記載する
// パラメータの方は型推論が効かない！注意
// 戻り値はパラメータの()の後ろに書く
// 戻り値は型推論が適用される。
function add(num1: number, num2: number): number {
  return num1 + num2;
}
console.log(add(1,2));

// 返り値がない場合はvoid型が推論される・何も返さない。
// 返り値が何もない場合はvoid型を書かないといけない。
function sayHello(): void {
  console.log('hello');
}
// 何も返さないように見えてundefinedがreturnされる
// undefined型がreturnされる。
// 但し戻り値の型をundefined型にすると上記の場合はエラーになるので注意
console.log(sayHello());

// 何もないreturnの場合は、undefined型が利用できる。
// void型も利用可能
// 基本的にはundefined型は使用しないこと。
function sayHello1(): undefined {
  console.log('hello');
  return;
}

// undefined型は何もないものとnullのみ入れることができる。
let temp: undefined ;
// let temp1: undefined = null;

// null型もundefined型と同じ値が入る。
let tmpNull: null;
let tmpNull1: null = null;

// add関数を呼び出す側の型注釈のやり方
// つまりadd関数においては引数に2つのnumber型の値を必要とし、返り値がnumber型であるという宣言をしている
const anotherAdd: (n1: number, n2: number) => number = add;

// アロー関数の場合
// パラメーターに型をつける場合は、1つでも括弧をつける
// または左側につけることもできる
const doubleNumber = (number: number): number => number * 2;
const doubleNumber1: (num: number) =>  number = num => num * 2;

// コールバック関数に型をつける
// cb:(引数:型)=>返り値の形で定義する
function doubleAndHandle(num: number, cb: (nun: number) => number): void {
  const doubleNum = cb(num * 2);
  console.log(doubleNum);
}
doubleAndHandle(21, doubleNum => {
  return doubleNum
});

// unknown型
// any型を少し厳しくした型
// any型と同様になんでも入れられる。ただし入れるときは注意する
let unknownInput: unknown;
let anyInput: any;
let text: string;
unknownInput = 'hello';
unknownInput = 21;
unknownInput = true;
anyInput = unknownInput;
// 入れる場合はtypeofで型を限定してから入れる必要がある。
if (typeof unknownInput === 'string') {
  text = unknownInput;
}

// never型
// 決して何も返さない型
function error(): never {
  throw new Error();
}
console.log(error());
