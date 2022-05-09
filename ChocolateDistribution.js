function findMinDiff(arr, n, m) {
  //code here
  arr.sort((a, b) => a - b);
  let diff = arr[m - 1] - arr[0];

  for (let x = 1; x < n; x++) {
    let diff1 = arr[x + (m - 1)] - arr[x];

    if (diff > diff1) {
      diff = diff1;
    }
  }
  console.log(diff);
}
let arr = [7, 3, 2, 4, 9, 12, 56];
let m = 3;
let n = 7;
findMinDiff(arr, n, m);
