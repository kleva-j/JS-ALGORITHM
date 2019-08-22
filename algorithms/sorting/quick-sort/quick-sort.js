
const swap = (arr, start, end) => {
  const newStart = arr[start];
  arr[start] = arr[end];
  arr[end] = newStart;
}

const partition = (arr, upperBoundary, lowerBoundary) => {
  const pivot = arr[lowerBoundary];
  
  while(lowerBoundary < upperBoundary) {
    while(arr[lowerBoundary] <= pivot) {
      lowerBoundary++;
    }
    while(arr[upperBoundary] >= pivot) {
      upperBoundary--;
    }
    if (lowerBoundary < upperBoundary) {
      swap(arr, lowerBoundary, upperBoundary)
    }
  }
  swap(arr, lowerBoundary, arr[lowerBoundary]);
  return arr[upperBoundary];
}

const QuickSort = array => {
  const lowerBoundary = 0;
  const upperBoundary = (array.length - 1);

  if(lowerBoundary < upperBoundary) {
    const indexPos  = partition(array, upperBoundary, lowerBoundary);
    QuickSort(array, lowerBoundary, indexPos - 1);
    QuickSort(array, indexPos + 1, upperBoundary);
  }
  return array;
}

const sortedList = QuickSort([5, 2, 7, 8, 19, 3]);
// sortedList
console.log(sortedList)
