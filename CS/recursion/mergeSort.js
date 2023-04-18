export default function mergeSort(arr) {
  // Base case when the array is of a single value
  if (arr.length < 2) {
    return arr;
  }

  // Split the array in half, left half first
  const middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle, arr.length));
  // Merge the two sides
  return merge(left, right);
}


//   Merging left and right
function merge(left, right) {
  let p1 = 0;
  let p2 = 0;
  let ans = [];
  while (p1 < left.length && p2 < right.length) {
    if (left[p1] < right[p2]) {
      ans.push(left[p1]);
      p1++;
    } else {
      ans.push(right[p2]);
      p2++;
    }
  }
  for (; p1 < left.length; p1++) {
    ans.push(left[p1]);
  }
  for (; p2 < right.length; p2++) {
    ans.push(right[p2]);
  }
  return ans;
}

// console.log(mergeSort([1, 10, 3, 15, 12, 6, 7, 8])); [1, 3, 6, 7, 8, 10, 12, 15]
// console.log(mergeSort([2, 1])); [1, 2]
// console.log(mergeSort([1, 10, 5, 6, 4, 123, 4])); [1, 4, 4, 5, 6, 10, 123]
