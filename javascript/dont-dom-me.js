var allDivs = document.getElementsByTagName('div');
var body = document.getElementsByTagName('body')[0];

for (var i = 0; i < allDivs.length; i++) {
  var newDiv = document.createElement('div');
  body.appendChild(newDiv);
}

/*

(in the browser)
Think carefully about what will happen when you run this!

*/
