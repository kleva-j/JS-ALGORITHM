
const BubbleSort = array => {
  let len = array.length;

  const swap = (arr, left, right) => {
    let rightElement = arr[right];
    arr[right] = arr[left];
    arr[left] = rightElement;
  };

  do {
    for(let i = 0; i < len - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1)
      }
    }

  } while(len--);
  return array;
};
