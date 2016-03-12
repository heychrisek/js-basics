function sieveOfEratosthenes(limit) {
  // build up sieve array of booleans, true where index is prime, false where index isn't.
  // e.g., [ , , true, true, false, true] => index 0, 1, and 4 aren't prime; 2, 3, and 5 are.
  var sieve = [];

  // initially set sieve[index] to true, while index <= limit
  for (var i = 2; i <= limit; i += 1) {
    sieve[i] = true;
  }

  // while i squared <= limit (e.g., when limit = 10, while i is 2 or 3), set sieve[index] to
  // false for (index * index) AND (index * index + index), while <= limit
  for (i = 2; i * i <= limit; i += 1) {
    if (sieve[i] !== true) {
      continue
    }

    for (var l = i * i; l <= limit; l += i) {
      sieve[l] = false
    }
  }

  // build up primes array, pushing the value into array for all true values of sieve
  var primes = [];
  sieve.forEach(function (value, i) {
    if (value) {
      primes.push(i);
    }
  });

  return primes;
}