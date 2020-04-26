const BubbleSort = require('./bubble-sort');

describe('Bubble Sort Algorithm', () => {

  it('It should sort ', () => {
    const unsortedArray = [2, 5, 7, 4, 3, 9, 1, 6, 10, 8];
    const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    expect(BubbleSort(unsortedArray)).to.have.lengthOf(sortedArray.length);
    expect(BubbleSort(unsortedArray)).to.be.an('array').to.have.ordered.members(sortedArray);
  });

  it('It should sort negative decimal placed numbers', () => {
    const unsortedArray = [-0.125, -0.2, -0.25, -0.4, -0.5];
    const sortedArray = [-0.5, -0.4, -0.25, -0.2, -0.125];
    expect(BubbleSort(unsortedArray)).to.have.lengthOf(sortedArray.length);
    expect(BubbleSort(unsortedArray)).to.be.an('array').to.have.ordered.members(sortedArray);
  });

  it('It should sort negative fractional numbers', () => {
    const unsortedArray = [-1/2, -1/4, -1/5, -1/8, -2/5];
    const sortedArray = [-0.5, -0.4, -0.25, -0.2, -0.125];
    expect(BubbleSort(unsortedArray)).to.have.lengthOf(sortedArray.length);
    expect(BubbleSort(unsortedArray)).to.be.an('array').to.have.ordered.members(sortedArray);
  });

  it('It should sort positive fractional numbers', () => {
    const unsortedArray = [1/2, 1/4, 1/5, 1/8, 2/5];
    const sortedArray = [0.125, 0.2, 0.25, 0.4, 0.5];
    expect(BubbleSort(unsortedArray)).to.have.lengthOf(sortedArray.length);
    expect(BubbleSort(unsortedArray)).to.be.an('array').to.have.ordered.members(sortedArray);
  });

  it('It should sort postive decimal placed numbers', () => {
    const unsortedArray = [0.5, 0.4, 0.25, 0.2, 0.125];
    const sortedArray = [0.125, 0.2, 0.25, 0.4, 0.5];
    expect(BubbleSort(unsortedArray)).to.have.lengthOf(sortedArray.length);
    expect(BubbleSort(unsortedArray)).to.be.an('array').to.have.ordered.members(sortedArray);
  });
});
