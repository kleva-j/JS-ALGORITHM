
//RECURSIVE IMPLEMENTATION

const RecursiveBinarySearchFunction = (array, element) => {
  if (!Array.isArray(array) || array.length === 0) return false;
  
  const recurse = (arr) => {
    let left = arr[0], right = arr[arr.length - 1];
    if (left === element || right === element) return true;
    if (element < left || element > right) return false;

    const mid = Math.floor(arr.length / 2);
    const leftHalf = arr.slice(0, mid);
    const rightHalf = arr.slice(mid);

    if (arr[mid] === element) return true;
    else if (arr[mid] < element) return recurse(rightHalf);
    else if (arr[mid] > element) return recurse(leftHalf);
    return false;
  }

  return recurse(array);
}
