var a = {};
var b = {prop: 'b'};
var c = {prop: 'c'};
var d = {prop: 'd'};

a[b] = 'foo';
a[c] = 'bar';
a[d] = 'baz';

console.log(a[c]);

/*

How do keys in Javascript objects work?

*/
