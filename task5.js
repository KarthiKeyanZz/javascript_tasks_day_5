// Spread & Rest Operator
//task-1
const primary = [100, 200];
const secondary = [300, 400];
const combined = [...primary, ...secondary, 500];
console.log(combined);

// task-2
let scores = [85, 90, 95];
let backup = [...scores];
backup.push(100);
console.log("original:", scores);
console.log("clone:", backup);

//task-3
const profile = { name: "Alice", salary: 45000 };
const updates = { salary: 55000, role: "Senior Developer" };
const finalProfile = { ...profile, ...updates };
console.log(finalProfile);

//task-4
function calculateSum(...vals) {    //here it collect arguments as the array like[10, 20, 30, 40, 50]
  return vals.reduce((total, num) => total + num, 0);  //here it will loop and add the numbers
}
console.log(calculateSum(10, 20, 30, 40, 50));  //final output = 150

//task-5
function logExtras(id, ...details) {
    console.log(details);
}
logExtras(1, "React", "Node", "MongoDB", "Express");

//Destructuring
//task-6
let dimensions = [120, 240, 360, 480];
let [width, h1, h2, depth] = dimensions;
console.log("first element:", width); 
console.log("last element:", depth);  

//task-7
let xCoord = 50;
let yCoord = 150;
[xCoord, yCoord] = [yCoord, xCoord];
console.log(xCoord); // 150
console.log(yCoord); // 50

//task-8
let matrix = ["A", ["B", ["C", ["D"]]]];
let [val1, [val2, [val3, [val4]]]] = matrix;
console.log(val4);

//task-9
const user = { name: "Sarah", age: 32 };
const { name: handle, age: userAge } = user;
console.log(handle); 
console.log(userAge);      

//task-10
const config = { theme: "dark" };
const { theme, mode = "auto" } = config;
console.log(theme); 
console.log(mode);  

// Basic Array Operations
//task-11
let digits = [10, 11, 12, 13, 14];
digits.push(15, 16);
console.log(digits); 

//task-12
let prices = [9.99, 19.99, 29.99];
let lastPrice = prices.pop();
console.log("removed last element:", lastPrice);

//task-13
let queue = ["User1", "User2", "User3"];
let processed = queue.shift();
console.log("first element:", processed);
console.log(queue);

//task-14
let levels = [2, 3, 4, 5];
levels.unshift(0);
console.log("after adding the frst element:", levels);

//task-15
let sequence = [10, 20, 30, 40, 50, 60];
sequence.splice(1, 4);  //splice(startIndex, deleteCount)
console.log(sequence); // [10, 60]

//Slice/Splice/Flat 
//task-16
let hexCodes = [100, 200, 300, 400, 500, 600, 700];
let subset = hexCodes.slice(1, 4); //slice(start, end)
console.log(subset); // [200, 300, 400]

//task-17
let markers = [10, 20, 30, 40, 50];
markers.splice(1, 3, 88, 99); 
console.log(markers); // [10, 88, 99, 50]

//task-18
let deepArray = [10, [20, [30, [40]]]];
let flatDeep = deepArray.flat(Infinity);
console.log(flatDeep);

//task-19
let nested = [1, [2, [3, [4]]]];
let shallowFlat = nested.flat(1);
console.log(shallowFlat);

//task-20
let steps = [1, 2, 5];
steps.splice(2, 0, 3, 4);
console.log(steps); // [1, 2, 3, 4, 5]

//Searching & Checking
//task-21
let ids = [101, 202, 303, 404];
console.log(ids.includes(202)); 

//task-22
let repeats = [1, 2, 9, 4, 9, 6];
let pos = repeats.indexOf(9, 3); 
console.log(pos); // 4

//task-23
let versions = [1, 2, 1, 3, 1];
let lastIdx = versions.lastIndexOf(1); 
console.log(lastIdx); // 4

//task-24
let ages = [18, 21, 25, 30];
let allAdults = ages.every(a => a >= 18);
console.log(allAdults); 

//task-25
let marks = [45, 50, 85, 30];
let hasDistinction = marks.some(m => m > 80);
console.log(hasDistinction);

//Sorting
//task-26
let unordered = [40, 10, 100, 25];
unordered.sort((a, b) => a - b);
console.log("ascending order", unordered); 

//task-27
unordered.sort((a, b) => b - a);
console.log("descending order", unordered);

//task-28
let developers = [
  { name: "John", salary: 35000 },
  { name: "Ben", salary: 65000 },
  { name: "Bob", salary: 25000 }
];
developers.sort((a, b) => a.salary - b.salary);
console.log(developers);

//task-29
let bits = [0, 1, 0, 1];
bits.reverse();
console.log(bits);

//task-30
let mixed = [2, 11, 22, 1];
mixed.sort();   //string sorting
console.log(mixed); // [1, 11, 2, 22] 

//Higher Order Functions
//ForEach
//task-31
let dataset = [100, 200, 300];
dataset.forEach(item => console.log(item));

//task-32
let baseValues = [5, 10, 15];
let resultVal = baseValues.forEach(v => v * 10);
console.log(resultVal); // undefined

//map
//task-33
let points = [1, 2, 3];
let doubled = points.map(p => p * 2);
console.log(doubled); 

//task-34
let cities = ["london", "paris", "tokyo"];
let shoutCities = cities.map(c => c.toUpperCase());
console.log(shoutCities); 

//task-35
let staff = [
  { name: "Anna", salary: 40000 },
  { name: "Mike", salary: 55000 }
];
let payroll = staff.map(s => s.salary);
console.log(payroll); 

//filter
//task-36
let inventory = [
  { name: "Monitor", price: 200 },
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 }
];
let expensive = inventory.filter(p => p.price > 500);
console.log(expensive);

//task-37
let nums = [11, 22, 33, 44, 55, 66];
let divisibleByTwo = nums.filter(n => n % 2 === 0);
console.log(divisibleByTwo); 

//task-38
let fruit = ["kiwi", "banana", "watermelon", "pear"];
let longFruit = fruit.filter(f => f.length > 5);
console.log(longFruit); 

//find
//task-39
let readings = [15, 45, 75, 95];
let firstHigh = readings.find(r => r > 50);
console.log("first matched numder:", firstHigh); 

//task-40
let candidates = [
  { name: "Joy", score: 70 },
  { name: "Pat", score: 90 },
  { name: "Leo", score: 85 }
];
let topCandidate = candidates.find(c => c.score > 80);
console.log(topCandidate);

//Reduce
//task-41
let expenses = [150, 250, 350];
let totalCost = expenses.reduce((acc, curr) => acc + curr, 0);
console.log(totalCost); 

//task-42
let weights = [5, 12, 8, 22, 14];
let heaviest = weights.reduce((peak, w) => 
  w > peak ? w : peak
);
console.log(heaviest); 

//task-43
let items = ["a", "b", "c", "d"];
let lengthCount = items.reduce(count => count + 1, 0);
console.log(lengthCount); 

//task-44
let letters = ["X", "Y", "Z"];
let letterObj = letters.reduce((obj, char, idx) => { 
  obj[idx] = char;
  return obj;
}, {});
console.log(letterObj);
 
//task-45
let projectStaff = [
  { name: "Alice", hours: 40 },
  { name: "Bob", hours: 35 },
  { name: "Charlie", hours: 25 }
];
let totalHours = projectStaff.reduce(
  (sum, person) => sum + person.hours,
  0
);
console.log(totalHours); 

// Conversion
//task-46
let coord = [10, 20, 30];
let coordStr = coord.toString();
console.log(coordStr); 

//task-47
let wordsList = ["Home", "About", "Contact"];
let nav = wordsList.join(" | ");
console.log(nav); 

//task-48
let csv = "Red,Blue,Green";
let colors = csv.split(",");
console.log(colors); 

//task-49
let layered = [1, [2, [3, 4]]];
let flatString = layered.flat(Infinity).join(":");
console.log(flatString); 

//task-50
let tags = ["tech", "coding", "web"];
let hashtag = tags
  .map(t => t.toUpperCase())
  .join("#");
console.log("#" + hashtag); 

//Bonus (Real-World Tasks)
//task-51
let wishlist = [
  { title: "Game", cost: 60, amount: 1 },
  { title: "Controller", cost: 50, amount: 2 },
  { title: "Headset", cost: 100, amount: 1 }
];
let grandTotal = wishlist.reduce((sum, p) => 
  sum + (p.cost * p.amount), 0
);
console.log(grandTotal);  

//task-52
let hardware = [
  { device: "Keyboard", price: 45 },
  { device: "Mouse", price: 20 },
  { device: "Monitor", price: 300 }
];
let budgetGear = hardware.filter(h => h.price < 100);
console.log(budgetGear);

//task-53
let namesList = ["Python", "Java", "Javascript", "C++"];
let query = "java";
let filteredNames = namesList.filter(n => 
  n.toLowerCase().includes(query.toLowerCase())
);
console.log(filteredNames); 

//task-54
let duplicates = [7, 8, 8, 9, 10, 10, 11];
let uniqueSet = duplicates.filter((val, i) => 
  duplicates.indexOf(val) === i
);
console.log(uniqueSet); 

//task-55
let workers = [
  { name: "Dina", pay: 25000 },
  { name: "Erik", pay: 55000 },
  { name: "Faye", pay: 95000 },
  { name: "Gabe", pay: 20000 }
];

let categorized = workers.reduce((acc, person) => {
  let status = person.pay < 30000 ? "Junior" :
               person.pay < 70000 ? "Mid" : "Senior";

  if (!acc[status]) acc[status] = [];
  acc[status].push(person);
  return acc;
}, {});

console.log(categorized);