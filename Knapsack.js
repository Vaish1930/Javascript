function fractionalKnapsack() {
  let arr = [
    { values: 60, weights: 10 },
    { values: 100, weights: 20 },
    { values: 120, weights: 30 },
  ];
  let n = 3,
    w = 50;
  let sum = 0;
  let ar = new Array(n);
  for (let i = 0; i < n; i++) {
    ar[i] = {
      value: arr[i].values,
      weight: arr[i].weights,
      ratio: arr[i].values / arr[i].weights,
    };
  }
  ar.sort((a, b) => b.ratio - a.ratio);
  for (let i = 0; w != 0; i++) {
    if (ar[i].weight <= w) {
      w = w - ar[i].weight;
      sum = sum + ar[i].value;
    } else {
      sum = sum + ar[i].value * (w / ar[i].weight);
      w = 0;
    }
  }
  console.log(sum);
}
fractionalKnapsack();
