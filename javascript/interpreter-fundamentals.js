console.log('a');
setTimeout(function() { console.log('foo'); }, 1000);
setTimeout(function() { console.log('bar'); }, 0);
console.log('b');
