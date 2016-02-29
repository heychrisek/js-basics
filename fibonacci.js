// get nth number of fibonacci sequence
function fibonnaci(number) {
  if (number === 0 || number === 1) {
    return 0
  }
  var factors = [1, 0]
  for (var i = 1; i < number; i++) {
    var sum = factors.reduce(function(a,b) {return a + b}, 0)
    factors[1] = factors[0]
    factors[0] = sum
  }
  return sum
}

function fib_recursive(number) {
  if (number <= 2) {
    return 1
  } else {
    return fib_recursive(number - 1) + fib_recursive(number - 2)
  }
}

// can improve performance by memoizing (cache dictionary of {argument: value})
var cache = {}
function fib_recursive_memoized(number) {
  if (cache[number]) {
    return cache[number]
  } else {
    var result = fib_recursive(number)
    cache[number] = result
    return result
  }
}