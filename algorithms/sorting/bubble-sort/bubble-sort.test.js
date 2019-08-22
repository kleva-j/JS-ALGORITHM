describe('Bubble Sort Algorithm', () => {

  it('It should sort ', () => {
    expect(BubbleSort([2, 5, 7, 4, 3, 9, 1, 6, 10, 8])).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('It should sort negative decimal placed numbers', () => {
    expect(BubbleSort([-0.125, -0.2, -0.25, -0.4, -0.5])).toEqual([-0.5, -0.4, -0.25, -0.2, -0.125]);
  });

  it('It should sort negative fractional numbers', () => {
    expect(BubbleSort([-1/2, -1/4, -1/5, -1/8, -2/5])).toEqual([-0.5, -0.4, -0.25, -0.2, -0.125])
  });

  it('It should sort positive fractional numbers', () => {
    expect(BubbleSort([1/2, 1/4, 1/5, 1/8, 2/5])).toEqual([0.125, 0.2, 0.25, 0.4, 0.5]);
  });

  it('It should sort postive decimal placed numbers', () => {
    expect(BubbleSort([0.5, 0.4, 0.25, 0.2, 0.125])).toEqual([0.125, 0.2, 0.25, 0.4, 0.5]);
  });
});
