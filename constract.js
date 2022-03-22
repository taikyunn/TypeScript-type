let Info = function(id, name) {
  this.id = id;   //引数を格納
  this.name = name;
};

let getInfo = new Info(1, 'Sam'); //コンストラクタの生成

console.log(getInfo.id, getInfo.name);  //1, 'Sam'

let Info2 = (id, name) => {
  this.id = id;
  this.name = name;
};

let getInfo2 = new Info(1, 'Sam');

//'Uncaught TypeError: Info is not a constructor'
console.log(getInfo.id, getInfo.name);
