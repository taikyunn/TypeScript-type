// 関数宣言時に型をつける方法
// パラメータの型はパラメータの後に今までと同じように記載する
// パラメータの方は型推論が効かない！注意
// 戻り値はパラメータの()の後ろに書く
// 戻り値は型推論が適用される。
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// 返り値がない場合はvoid型が推論される・何も返さない。
// 返り値が何もない場合はvoid型を書かないといけない。
function sayHello() {
    console.log('hello');
}
// 何も返さないように見えてundefinedがreturnされる
// undefined型がreturnされる。
// 但し戻り値の型をundefined型にすると上記の場合はエラーになるので注意
console.log(sayHello());
// 何もないreturnの場合は、undefined型が利用できる。
// void型も利用可能
// 基本的にはundefined型は使用しないこと。
function sayHello1() {
    console.log('hello');
    return;
}
// undefined型は何もないものとnullのみ入れることができる。
var temp;
var temp1 = null;
// null型もundefined型と同じ値が入る。
var tmpNull;
var tmpNull1 = null;
// add関数を呼び出す側の型注釈のやり方
// つまりadd関数においては引数に2つのnumber型の値を必要とし、返り値がnumber型であるという宣言をしている
var anotherAdd = add;
// アロー関数の場合
var doubleNumber = function (number) { return number * 2; };


