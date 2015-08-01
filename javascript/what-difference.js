'use strict';

function foo1()
{
  return {
      bar: 'hello'
  };
}

function foo2()
{
  return
  {
      bar: 'hi there'
  };
}

console.log('foo1() returns:', foo1());
console.log('foo2() returns:', foo2());
