"use strict";
// boolean
let hasValue = true;
// number
let count = 10;
let float = 3.14;
let negative = -0.12;
// string
let single = 'hello';
let double = "hello";
let back = `hello`;
// object:型推論での定義
const person = {
    name: "Jack",
    age: 21
};
console.log(person.name);
// object: 型注釈での定義(セミコロンが必要)
const person1 = {
    name: "Jack",
    age: 21
};
// object型で定義することもできる。ただし情報がほぼないので、使わないこと
const person2 = {
    name: "Jack",
    age: 21
};
// 配列
// 型推論
const fruits = ["Apple", "Banana", "Grape"];
// 型注釈
const fruits1 = ["Apple", "Banana", "Grape"];
// Tuple型: 厳格な配列を定義したい時に使用
// 型注釈の形でしか使用できない。
// 配列の中身の[0]はstring, [1]はnumber,[2]はbooleanという厳格な形の定義ができる
const book = ["business", 1500, false];
// 下記はできる。初期値は厳しいけど要素の追加には甘い
book.push(21);
// 但し中身を参照する際はエラーになる。
// console.log(book[3])
// 列挙型のenum
// 特定の中身のみを利用できるようにした時に使用する
// パスカルケースで書くことが多い
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
;
const coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
// 以下のように書くと数値が出力される
var CoffeeSize1;
(function (CoffeeSize1) {
    CoffeeSize1[CoffeeSize1["SHORT"] = 0] = "SHORT";
    CoffeeSize1[CoffeeSize1["TALL"] = 1] = "TALL";
    CoffeeSize1[CoffeeSize1["GRANDE"] = 2] = "GRANDE";
    CoffeeSize1[CoffeeSize1["VENTI"] = 3] = "VENTI";
})(CoffeeSize1 || (CoffeeSize1 = {}));
;
console.log(CoffeeSize1.SHORT);
// 以下だと途中で数値が変わってくる
// numberが割と自由に充てることができるからundefinedになりがち。
var SIZE;
(function (SIZE) {
    SIZE[SIZE["Small"] = 0] = "Small";
    SIZE[SIZE["Medium"] = 4] = "Medium";
    SIZE[SIZE["Large"] = 5] = "Large";
})(SIZE || (SIZE = {}));
console.log(SIZE.Medium); // 4
console.log(SIZE[1]); // undefined
// no error!!
console.log(SIZE[5]); // Large
// any型：何でも入っちゃう。あまり詳しく型付けできない
// 詳しくtsを使いたい場合はanyを使用しないこと。
let anything = true;
anything = 'hello';
anything = ['hello', 33, true];
anything = {};
anything.test = 'test';
let banana = 'banana';
banana = anything;
// union型
// 下はnumberもstringも扱えるという意味
let unionType = 10;
unionType = 'hello';
unionType.toUpperCase();
// union型の配列の定義
// 以下はnumber型とstring型が入る配列を定義している。
// enum型みたいな使い方ができる。但しオブジェクトではないためドットでアクセスできない
let unionTypes = [21, 'hello'];
let clothSize = 'small';
// リテラル型
// 以下のようにapple型を指定することができ、appleという文字列しか入らなくなる
// constを使うことにより、リテラル型を使用することができる。
// letを使用するとリテラル型を使用できない。
const apple = 'apple';
const number = 0;
const cloth = {
    color: 'white',
    size: 'medium',
};
let size = 'large';
