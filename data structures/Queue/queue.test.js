const { Queues_ES5, Queues_ES6 } = require('./queue');


describe('Queue Data Structure.', () => {

  describe('Q1', () => {
    const Q1 = Queues_ES5();
    const firstItem = 12;

    it('It should return 0 as the size for an empty queue', () => {
      expect(Q1.size()).to.equal(0);
    });
  
    it('It should enqueue an item and return an updated size', () => {
      Q1.enqueue(firstItem);
      expect(Q1.size()).to.equal(1);
      expect(Q1.peak()).to.equal(firstItem);
    });
  
    it('It should enqueue and dequeue and also return an updated size', () => {
      const newItem = 21;
      Q1.enqueue(newItem);
      expect(Q1.size()).to.equal(2);
      expect(Q1.peak()).to.equal(firstItem);

      Q1.dequeue();
      expect(Q1.size()).to.equal(1);
      expect(Q1.peak()).to.equal(newItem);
    });

  });

  describe('Q2', () => {
    const Q2 = new Queues_ES6();
    const firstItem = 12;

    it('It should return 0 as the size for an empty queue', () => {
      expect(Q2.size).to.equal(0);
    });

    it('It should enqueue an item and return an updated size', () => {
      Q2.enqueue(firstItem);
      expect(Q2.size).to.equal(1);
      expect(Q2.peak()).to.equal(firstItem);
    });

    it('It should enqueue and dequeue and also return an updated size', () => {
      const newItem = 21;
      Q2.enqueue(newItem);
      expect(Q2.size).to.equal(2);
      expect(Q2.peak()).to.equal(firstItem);

      Q2.dequeue();
      expect(Q2.size).to.equal(1);
      expect(Q2.peak()).to.equal(newItem);
    });

  });

});
