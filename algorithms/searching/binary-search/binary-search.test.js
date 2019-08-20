it('Binary search', () => {
  expect(RecursiveBinarySearchFunction([], 9)).toEqual(false);
  expect(RecursiveBinarySearchFunction('a', 9)).toEqual(false);
  expect(RecursiveBinarySearchFunction([1, 3], 1)).toEqual(true);
  expect(RecursiveBinarySearchFunction([1, 3], 3)).toEqual(true);
  expect(RecursiveBinarySearchFunction([1, 3, 5], 3)).toEqual(true);
	expect(RecursiveBinarySearchFunction([1, 3, 8, 10], 8)).toEqual(true);
  expect(RecursiveBinarySearchFunction([1, 3, 8, 10, 15], 9)).toEqual(false);
  expect(RecursiveBinarySearchFunction([1, 3, 8, 10, 15], 19)).toEqual(false);
  expect(RecursiveBinarySearchFunction([3, 8, 10, 13, 15], 1)).toEqual(false);
});