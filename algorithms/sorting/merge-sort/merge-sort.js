
const MergeSort = array => {
  if (array.length < 2) return array;

  const mid = Math.floor(array.length / 2);

  const merge = (left, right) => {
    const sortedArray = [];

    while(left.length && right.length) {
      sortedArray.push(left[0] < right[0] ? left.shift() : right.shift())
    }

    while (right.length) {
      sortedArray.push(right.shift());
    }

    while (left.length) {
      sortedArray.push(left.shift());
    }

    return sortedArray;
  }

  return merge(MergeSort(array.slice(0, mid)), MergeSort(array.slice(mid)));
};

console.log(MergeSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]));