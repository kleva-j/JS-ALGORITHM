it('Linear search', () => {
  expect(LinearSearch([], 9)).toEqual(false);
  expect(LinearSearch('a', 9)).toEqual(false);
  expect(LinearSearch([1, 3], 1)).toEqual(true);
  expect(LinearSearch([1, 3], 3)).toEqual(true);
  expect(LinearSearch([1, 3, 5], 3)).toEqual(true);
	expect(LinearSearch([1, 3, 8, 10], 8)).toEqual(true);
  expect(LinearSearch([1, 3, 8, 10, 15], 9)).toEqual(false);
  expect(LinearSearch([1, 3, 8, 10, 15], 19)).toEqual(false);
  expect(LinearSearch([3, 8, 10, 13, 15], 1)).toEqual(false);
});