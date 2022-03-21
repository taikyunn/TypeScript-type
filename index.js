// boolean
var hasValue = true;
// number
var count = 10;
var float = 3.14;
var negative = -0.12;
// string
var single = 'hello';
var double = "hello";
var back = "hello";
// object:型推論での定義
var person = {
    name: "Jack",
    age: 21
};
console.log(person.name);
// object: 型注釈での定義(セミコロンが必要)
var person1 = {
    name: "Jack",
    age: 21
};
// object型で定義することもできる。ただし情報がほぼないので、使わないこと
var person2 = {
    name: "Jack",
    age: 21
};
// 配列
// 型推論
var fruits = ["Apple", "Banana", "Grape"];
// 型注釈
var fruits1 = ["Apple", "Banana", "Grape"];
// Tuple型: 厳格な配列を定義したい時に使用
// 型注釈の形でしか使用できない。
// 配列の中身の[0]はstring, [1]はnumber,[2]はbooleanという厳格な形の定義ができる
var book = ["business", 1500, false];
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
var coffee = {
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
var SIZE;
(function (SIZE) {
    SIZE[SIZE["Small"] = 0] = "Small";
    SIZE[SIZE["Medium"] = 4] = "Medium";
    SIZE[SIZE["Large"] = 5] = "Large";
})(SIZE || (SIZE = {}));
console.log(SIZE.Medium); // 4
console.log(SIZE[1]); // Medium
// no error!!
console.log(SIZE[5]); // undefined
