var printHelloword = function(){
    return  function () {
        return "Hello World"
    }
}

const q = printHelloword();
console.log(q)
console.log(typeof q)
console.log(q())