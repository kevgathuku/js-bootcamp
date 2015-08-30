describe('Factorial Test', function() {

  it('for a non-number', function() {
    expect(factorial('')).toBe(false);
  });

  it('factorial of 0', function() {
    expect(factorial(0)).toBe(1);
  });

  it('factorial of 1', function() {
    expect(factorial(1)).toBe(1);
  });

  it('factorial of a negative number', function() {
    expect(factorial(-10)).toBe(false);
  });

  it('factorial of 5', function() {
    expect(factorial(5)).toBe(120);
  });

  it('2 equal arrays', function() {
    expect([1]).toBe([1]);
  });

  it('unequal arrays comparison', function() {
    expect([1]).toBe([1, 2]);
  });

});
