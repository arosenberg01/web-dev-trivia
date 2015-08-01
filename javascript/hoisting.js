var a = 1;

function b() {
    a = 10;
    return;
    function a() {}
}

b();
console.log(a);
