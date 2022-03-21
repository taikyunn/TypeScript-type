// アロー関数:従来のJSの関数を簡素化した形のもの
function test1(a) {
  return a + 100;
}

// functionという語を削除し、引数と本体の開始中括弧の間に矢印を配置する。
(a) => {
  return a + 100;
}

// 中括弧とreturnを削除
(a) => a + 100;

// 引数の括弧を削除
a => a + 10

// ex1をログ出ししてみる
let ex1 = a => a + 10;
console.log(ex1(10));

// ex:2
function test2 (a,b) {
    return a + b + 100;
}
console.log(test2(100,200));

// ex2:アロー関数に変更する
let test2AllowFunction = (a, b) => a + b + 100;
console.log(test2AllowFunction(100,200));

// ex:3従来の関数 (引数なし)
let exa = 4;
let exb = 2;
function test3(){
  return exa + exb + 100;
}
console.log(test3());

// ex3をアロー関数に変更する
let test3AllowFunction = () => exa + exb + 100;
console.log(test3AllowFunction());

// ex:4 関数の処理で追加が必要な場合はreturnが必要
function test4(a,b) {
  let chuck = 42;
  return a + b + 42;
}
console.log(test4(1,2));

// ex4をアロー関数に変更
let test4AllowFunction = (a,b) => {
  let chuck = 42;
  return a + b + chuck;
}
console.log(test4AllowFunction(1,2));

// アロー関数にて引数が一つの場合は、()を省略できる。
let greeting = name => {
  console.log('Hello,' + name)
};

greeting('Tom!');

let averageHeight = (a, b, c) => {
  let totalHeight = a + b + c;
  return totalHeight / 3;
};

console.log(averageHeight(160, 165, 170));
