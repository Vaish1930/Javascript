//Function to find the maximum number of meetings that can
//be performed in a meeting room.
function maxMeetings() {
  let start = [1, 3, 0, 5, 8, 5];
  let end = [2, 4, 6, 7, 9, 9];
  let count = 1;
  let n = start.length;
  let meetings = new Array(n);
  for (let i = 0; i < start.length; i++) {
    meetings[i] = {
      s: start[i],
      e: end[i],
    };
  }
  meetings.sort((a, b) => a.e - b.e);
  let lastIndex = meetings[0].e;
  for (let i = 1; i < meetings.length; i++) {
    if (lastIndex < meetings[i].s) {
      count++;
      lastIndex = meetings[i].e;
    }
  }
  console.log(count);
}

maxMeetings();
