const Person = {
  firstName: "Harshit",
  lastName: "Harami",
  age: 55,
  nationality: "American",
  gender: "Female",
  hobbies: ["playing cricket", "chess", "ludo"],
  xyz: {},
  walk: () => console.log("Walking"),
  sleep: () => console.log("Sleeping"),
};

const agents = [
  { id: 1, name: "Jett", isDuelist: false },
  { id: 2, name: "Raze", isDuelist: true },
  { id: 3, name: "Omen", isDuelist: false },
  { id: 4, name: "Reyna", isDuelist: false },
  { id: 5, name: "Pheonix", isDuelist: true },
];

const updatedAgents = agents.map((agent) =>
  agent.id === 4 ? { ...agent, isDuelist: true } : agent
);

// console.log(agents.join(" "));

//  for (let i of agents) console.log(i);

// agents.forEach((agent) => console.log(agent));

const filteredAgents = agents.filter((agent) =>
  agent.name.toLowerCase().includes("b")
);

const duelists = updatedAgents.filter((agent) => agent.isDuelist);

// console.log(agents.find((agent) => agent.name.includes("b"))); //Returns the value of the first element in the array where predicate is true, and undefined otherwise.

//console.log(agents.findIndex((agent) => agent.name.includes("R")));

// console.log([1, 2, 4, 5].indexOf(4));

console.log(agents.some((agent) => agent.name.includes("R")));

const likes = [1, 2, 34, 6, 6, 7];
let sum = 0;
for (let i = 0; i < likes.length; i++) {
  sum += likes[i];
}

// console.log(likes.reduce((sum, num) => sum * num, 1));
