describe('FizzBuzz Test', function() {

  it('works with 16', function() {
    expect(fizzbuzz(16)).toEqual(['Fizz', 'Buzz', 'Fizz', 'Fizz', 'Buzz', 'Fizz', 'FizzBuzz']);
  });

});

describe('Truthy Test', function() {

  it('Truthy values', function() {
    expect(-1).toBeTruthy();
    expect('1').toBeTruthy();
    expect([]).toBeTruthy();
    expect({}).toBeTruthy();
    expect(true).toBeTruthy();
    expect(Math.sin).toBeTruthy();
    expect(Math.PI).toBeCloseTo(3.142, 3);
  });

});

describe('Equality Test', function() {

  it('Truthy values', function() {
    expect(1).toEqual('1');
    expect(1).toBe('1');
  });

});
