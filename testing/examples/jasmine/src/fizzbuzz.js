function fizzbuzz(limit) {
  var results = [];
  for (var i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    }
  }
  return results;
};

console.log(fizzbuzz(16));
