function isPrime(number) {
  // 0 and 1 are not prime
  if (number < 2) {
    return false;
  }
  // multiples of 2 (except 2 itself) are not prime
  if (number % 2 === 0) {
    return number === 2;
  }
  // multiples of 3 (except 3 itself) are not prime
  if (number % 3 === 0) {
    return number === 3;
  }

  // We've checked divisibility with 2 and 3. Now we test against 5, 11, 17, etc.
  //
  // E.g., isPrime(6659) sets [horizon, factor] to [81, 5], then [81, 11], then
  // [81, 17], and so on. We check if `number` is divisible by `factor` or 
  // factor + 2` for each value of factor. If factor exceeds horizon, we know
  // we've tested the maximum possible factor (the numbers' square root)

  var horizon = Math.floor(Math.sqrt(number));
  var factor = 5;

  while (factor <= horizon) {
    console.log(horizon, factor)
    if (number % factor === 0) {
      return false;
    }
    if (number % (factor + 2) === 0) {
      return false;
    }
    factor += 6
  }
  return true;
};

