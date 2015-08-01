var hir = 'Danny Delott';

var obj = {
  hir: 'Noah  Sluss',
  key: {
    hir: 'Tony Johnson',
    getHir: function() {
      return this.hir
    }
  }
}

var findHir = obj.key.getHir;

console.log(obj.key.getHir())
console.log(findHir());

/*

Is anything different going to happen when running this in Node vs a browser?
Why?

*/
