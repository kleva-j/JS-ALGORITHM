const { Stack_ES5, Stack_ES6 } = require('./stack');


describe('Stack Data Structure.', () => {

  describe('S1', () => {
    const S1 = Stack_ES5();
    const firstItem = 12;

    it('It should return zero (0) as the size for an empty stack', () => {
      expect(S1.size()).to.equal(0);
    });
  
    it('It should push an item onto the stack and return an updated size', () => {
      S1.push(firstItem);
      expect(S1.size()).to.equal(1);
      expect(S1.peak()).to.equal(firstItem);
    });
  
    it('It should enstack and destack an item onto the stack and also return an updated size', () => {
      const newItem = 21;
      S1.push(newItem);
      expect(S1.size()).to.equal(2);
      expect(S1.peak()).to.equal(newItem);

      S1.pop();
      expect(S1.size()).to.equal(1);
      expect(S1.peak()).to.equal(firstItem);
    });

  });

  describe('S2', () => {
    const S2 = new Stack_ES6();
    const firstItem = 12;

    it('It should return zero (0) as the size for an empty stack', () => {
      expect(S2.size).to.equal(0);
    });

    it('It should push an item onto the stack and return an updated size', () => {
      expect(S2.size).to.equal(0);
      S2.push(firstItem);
      expect(S2.size).to.equal(1);
      expect(S2.peak()).to.equal(firstItem);
    });

    it('It should add and remove an item onto/from the stack and also return an updated size', () => {
      const newItem = 21;
      S2.push(newItem);
      expect(S2.size).to.equal(2);
      expect(S2.peak()).to.equal(newItem);

      S2.pop();
      expect(S2.size).to.equal(1);
      expect(S2.peak()).to.equal(firstItem);
    });

  });

});
