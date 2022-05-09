function JobScheduling() {
  let arr = [
    { id: 1, dead: 2, profit: 100 },
    { id: 2, dead: 1, profit: 19 },
    { id: 3, dead: 2, profit: 27 },
    { id: 4, dead: 1, profit: 25 },
    { id: 5, dead: 1, profit: 15 },
  ];

  let count = 0;
  let sum = 0,
    max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (max < arr[i].dead) {
      max = arr[i].dead;
    }
  }
  let result = new Array(max).fill(0);
  arr.sort((a, b) => b.profit - a.profit);
  for (let i = 0; i < result.length; i++) {
    if (result[i] != 1 && i < arr[i].dead) {
      sum = sum + arr[i].profit;
      count++;
      result[i] = 1;
    }
  }

  console.log(count);
  console.log(sum);
}

JobScheduling();
