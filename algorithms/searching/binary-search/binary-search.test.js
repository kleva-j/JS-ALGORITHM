describe('Binary Search Algorithm', () => {
  it('It should return false if array is empty', () => {
    expect(RecursiveBinarySearchFunction([], 9)).toEqual(false);
  });

  it('It should return false if item is not found.', () => {
    expect(RecursiveBinarySearchFunction('a', 9)).toEqual(false);
  });

  it('It should return true if item is found in an array of length of 2 and below.', () => {
    expect(RecursiveBinarySearchFunction([1, 3], 1)).toEqual(true);
  });

  it('It should return true if item is found in an array of length of 2 and below.', () => {
    expect(RecursiveBinarySearchFunction([1, 3], 3)).toEqual(true);
  });

  it('It should return true if item is found at the midpoint of the array.', () => {
    expect(RecursiveBinarySearchFunction([1, 3, 5], 3)).toEqual(true);
  });

  it('It should return true if item is found in the array.', () => {
    expect(RecursiveBinarySearchFunction([1, 3, 8, 10], 8)).toEqual(true);
  });

  it('It should return false of item is not found in the array.', () => {
    expect(RecursiveBinarySearchFunction([1, 3, 8, 10, 15], 9)).toEqual(false);
  });

  it('It should return false if item is larger than the highest value on the array.', () => {
    expect(RecursiveBinarySearchFunction([1, 3, 8, 10, 15], 19)).toEqual(false);
  });

  it('It should return false if item is smaller than the lowest value on the array.', () => {
    expect(RecursiveBinarySearchFunction([3, 8, 10, 13, 15], 1)).toEqual(false);
  });
});
