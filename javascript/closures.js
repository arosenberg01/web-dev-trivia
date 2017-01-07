// How would you write times to give the output below? Why?
function times(fn, x) {
	
}

var calledOnce = function() {
	console.log('1');
};

var calledTwice = times(calledOnce, 2);
calledTwice(); // 1
calledTwice(); // 1
calledTwice(); // undefined;