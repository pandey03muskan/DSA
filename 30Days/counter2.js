var createCounter = function(init) {
    let n = init
    return {
        increment : function() {
            n++
            let val = n
            return val
        },
        reset : function() {
            n = init
            return init
        },
        decrement : function() {
            n--
            let val = n
            return val
        }
    }
};

let counter = createCounter(5)
console.log(counter.increment())
console.log(counter.reset())
console.log(counter.decrement())