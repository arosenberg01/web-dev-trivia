var num = 1;
var name = 'Superman';
var obj = {
  val: 'foo'
};
var bool = true;

function alter(num, name, obj, bool) {
  num += 9;
  name = 'Batman';
  obj.val = 'bar';
  bool = false;
}

alter(num, name, obj, bool)

console.log(num);
console.log(name);
console.log(obj.val);
console.log(bool);




