var num = 1;
var name = 'Superman';
var obj = {
  val: 'first'
}

function alter(num, name, obj) {
  num += 9;
  name = 'Batman';
  obj.val = 'second'
}

alter(num, name, obj);

console.log(num);
console.log('The best superhero:', name);
console.log(obj.val);
