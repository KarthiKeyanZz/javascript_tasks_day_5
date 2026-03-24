// ES6 + Array Practice Tasks

// 🔹 Spread & Rest Operator


// Merge two arrays [10,20] and [30,40] using spread and add 50 at the end.
// task-1: Merge and add 50

const lowVals = [10, 20];
const midVals = [30, 40];
const combinedSequence = [...lowVals, ...midVals, 50];
console.log(combinedSequence);

// Clone an array [1,2,3] and modify the clone without affecting the original.
// task-2: Clone and modify

let originalScores = [1, 2, 3];
let updatedScores = [...originalScores];
updatedScores.push(4);
console.log("original:", originalScores);
console.log("clone:", updatedScores);

// Merge two objects where both have a salary key — observe which value overrides.
// task-3: Object merge (last key wins)

const baseRecord = { name: "John", salary: 20000 };
const priorityRecord = { salary: 30000, role: "Developer" };
const finalEmployee = { ...baseRecord, ...priorityRecord };
console.log(finalEmployee); // salary will be 30000

// Create a function that accepts unlimited numbers using rest and returns their sum.
// task-4: Rest parameter sum

function aggregate(...nums) {
  return nums.reduce((total, val) => total + val, 0);
}
console.log(aggregate(1, 2, 3, 4, 5));

// Create a function that takes first two parameters separately and rest as an array — print only rest values.
// task-5: Separate first two, rest as array

function processBatch(id, category, ...metadata) {
    console.log(metadata);
}
processBatch(10, 20, 30, 40, 40);


// ================================================================================


// 🔹 Destructuring


// Extract first and last value from [5,10,15,20] using destructuring.
// task-6: First and Last

let points = [5, 10, 15, 20];
let [start, m1, m2, end] = points;
console.log("first element:", start);
console.log("last element:", end);

// Swap two variables using destructuring.
// task-7: Swap variables

let alpha = 10;
let beta = 20;
[alpha, beta] = [beta, alpha];
console.log(alpha); // 20
console.log(beta);  // 10

// From nested array [1,[2,[3,[4]]]], extract value 4.
// task-8: Nested extraction

let deepNest = [1, [2, [3, [4]]]];
let [v1, [v2, [v3, [target]]]] = deepNest;
console.log(target); // 4


// Destructure object {name:"John", age:25} and rename variables (name → userName).
// task-9: Rename variables

const profile = { name: "John", age: 25 };
const { name: userName, age: userAge } = profile;
console.log(userName);

// Set default value while destructuring when property is missing.
// task-10: Default values

const settings = { name1: "ben" };
const { name1, age1 = 18 } = settings;
console.log(age1); // 18


// ================================================================================


// 🔹 Basic Array Operations


// Add values [6,7] to [1,2,3,4,5] using push.
// task-11: Push

let primaryDigits = [1, 2, 3, 4, 5];
primaryDigits.push(6, 7);
console.log(primaryDigits);

// Remove last element and store it in a variable.
// task-12: Pop

let stack = [1, 2, 3, 4, 5];
let removedItem = stack.pop();
console.log("removed last element:", removedItem);

// Remove first element and log remaining array.
// task-13: Shift

let queue = [1, 2, 3, 4];
let served = queue.shift();
console.log("first element:", served);
console.log(queue);

// Add element at beginning using unshift.
// task-14: Unshift

let list = [2, 3, 4, 5];
list.unshift(1);
console.log("after adding the first element:", list);

// Use splice() to remove middle elements from [1,2,3,4,5,6].
// task-15: Splice middle

let midRemove = [1, 2, 3, 4, 5, 6];
midRemove.splice(2, 3); 
console.log(midRemove); // [1, 2, 6]


// ================================================================================


// 🔹 Slice / Splice / Flat


// Extract [4000,5000,6000] using slice().
// task-16: Slice

let priceRange = [1000, 2000, 3000, 4000, 5000, 6000, 7000];
let midSection = priceRange.slice(3, 6);
console.log(midSection); // [4000, 5000, 6000]

// Replace 2 elements in an array using splice().
// task-17: Splice replace

let codes = [1, 2, 3, 4, 5];
codes.splice(2, 2, 99, 100);
console.log(codes);

// Flatten [1,[2,[3,[4]]]] completely.
// task-18: Flat Infinity

let tangled = [1, [2, [3, [4]]]];
let linear = tangled.flat(Infinity);
console.log(linear);

// Flatten only one level of nested array.
// task-19: Flat level 1

let multiLevel = [1, [2, [3, [4]]]];
let flatOne = multiLevel.flat(1);
console.log(flatOne);

// Insert values without deleting using splice().
// task-20: Splice insert

let gapArray = [1, 2, 5];
gapArray.splice(2, 0, 3, 4);
console.log(gapArray);


// ================================================================================


// 🔹 Searching & Checking


// Check if value 100 exists in an array.
// task-21: Includes

let checkList = [100, 200, 300, 400];
console.log(checkList.includes(100));

// Find index of value 3 starting from index 2.
// task-22: IndexOf with start

let dataset = [1, 2, 3, 4, 3, 5];
let foundAt = dataset.indexOf(3, 2);
console.log(foundAt);

// Find last occurrence of 5 in [1,5,3,5,2].
// task-23: LastIndexOf

let occurences = [1, 5, 3, 5, 2];
let lastPos = occurences.lastIndexOf(5);
console.log(lastPos);

// Check if all values are positive using every().
// task-24: Every

let values = [10, 20, 30, 40];
let allPositive = values.every(num => num > 0);
console.log(allPositive);

// Check if any value is greater than 50 using some().
// task-25: Some

let weights = [10, 20, 60, 40];
let hasHeavy = weights.some(w => w > 50);
console.log(hasHeavy);


// ================================================================================


// 🔹 Sorting


// Sort [10,5,100,1] in ascending order correctly.
// task-26: Ascending

let mixNumbers = [10, 5, 100, 1];
mixNumbers.sort((a, b) => a - b);
console.log("ascending order", mixNumbers);

// Sort array of numbers in descending order.
// task-27: Descending

mixNumbers.sort((a, b) => b - a);
console.log("descending order", mixNumbers);

// Sort array of objects by salary.
// task-28: Object sort

let staff = [
  { name: "John", salary: 30000 },
  { name: "ben", salary: 50000 },
  { name: "Bob", salary: 20000 }
];
staff.sort((a, b) => a.salary - b.salary);
console.log(staff);

// Reverse a sorted array.
// task-29: Reverse

let countdown = [1, 5, 6, 9];
countdown.reverse();
console.log(countdown);

// Identify why default sort() fails for numbers.
// task-30: Default sort behavior

let defaultSort = [10, 5, 100, 1];
defaultSort.sort(); // String sorting: "1", "10", "100", "5"
console.log(defaultSort);


// ================================================================================


// 🔹 Higher Order Functions


// forEach
// Print all elements of an array using forEach().
// task-31: forEach print

let items = [10, 20, 30, 40];
items.forEach(el => console.log(el));

// Try returning value from forEach() — observe result.
// task-32: forEach return

let numbers = [1, 2, 3];
let testReturn = numbers.forEach(n => n * 2);
console.log(testReturn); // undefined

// map
// Convert [1,2,3] into [2,4,6].
// task-33: Map multiply

let inputs = [1, 2, 3];
let doubled = inputs.map(i => i * 2);
console.log(doubled);

// Convert array of names to uppercase.
// task-34: Map uppercase

let users = ["john", "ben", "bob"];
let shouting = users.map(u => u.toUpperCase());
console.log(shouting);

// Extract only salary from employee objects.
// task-35: Map extract key

let corps = [
  { name: "John", salary: 30000 },
  { name: "Ben", salary: 50000 },
  { name: "Bob", salary: 20000 }
];
let payScale = corps.map(c => c.salary);
console.log(payScale);

// filter
// Filter employees with salary > 300000.
// task-36: Filter objects

let highEarners = [
  { name: "John", salary: 300000 },
  { name: "Ben", salary: 500000 },
  { name: "Bob", salary: 600000 }
];
let filteredCorps = highEarners.filter(e => e.salary > 300000);
console.log(filteredCorps);

// Get even numbers from an array.
// task-37: Filter evens

let stream = [1, 2, 3, 4, 5, 6];
let evenStream = stream.filter(s => s % 2 === 0);
console.log(evenStream);

// Filter strings with length > 5.
// task-38: Filter string length

let dictionary = ["apple", "banana", "grapes", "kiwi"];
let longTerms = dictionary.filter(d => d.length > 5);
console.log(longTerms);

// find
// Find first number greater than 50.
// task-39: Find first match

let sensors = [10, 40, 60, 80];
let trigger = sensors.find(s => s > 50);
console.log("first matched number:", trigger);

// Find first employee with salary < 200000.
// task-40: Find object

let lowPayList = [
  { name: "John", salary: 300000 },
  { name: "Ben", salary: 500000 },
  { name: "Bob", salary: 150000 }
];
let result = lowPayList.find(e => e.salary < 200000);
console.log(result);


// ================================================================================


// 🔹 Reduce (Important 🔥)


// Find total sum of [10,20,30].
// task-41: Sum

let batch = [10, 20, 30];
let totalSum = batch.reduce((acc, curr) => acc + curr, 0);
console.log(totalSum);

// Find maximum number using reduce.
// task-42: Max

let stats = [10, 50, 30, 80, 20];
let peakVal = stats.reduce((max, n) => n > max ? n : max);
console.log(peakVal);

// Count total number of elements.
// task-43: Count

let collection = [1, 2, 3, 4, 5];
let size = collection.reduce(acc => acc + 1, 0);
console.log(size);

// Convert array into object using reduce.
// task-44: Array to Object

let keys = ["a", "b", "c"];
let keyMap = keys.reduce((obj, val, idx) => {
  obj[idx] = val;
  return obj;
}, {});
console.log(keyMap);

// Calculate total salary of employees.
// task-45: Total Salary

let devTeam = [
  { name: "John", salary: 30000 },
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 20000 }
];
let payrollTotal = devTeam.reduce((sum, dev) => sum + dev.salary, 0);
console.log(payrollTotal);


// ================================================================================


// 🔹 Conversion


// Convert array [1,2,3] into string using toString().
// task-46: toString

let coords = [1, 2, 3];
console.log(coords.toString());

// Join array with " - " separator.
// task-47: Join

let segments = [1, 2, 3];
console.log(segments.join(" - "));

// Convert string "1,2,3" into array.
// task-48: Split

let dataString = "1,2,3";
let dataArray = dataString.split(",");
console.log(dataArray);

// Convert nested array into flat string.
// task-49: Flat + Join

let deepList = [1, [2, [3, 4]]];
let stringified = deepList.flat(Infinity).join(",");
console.log(stringified);

// Combine map + join to create sentence from words.
// task-50: Map + Join

let phrases = ["hello", "world", "javascript"];
let finalSentence = phrases.map(p => p.toUpperCase()).join(" ");
console.log(finalSentence);


// ================================================================================


// 🟣 Bonus (Real-World Tasks)


// Build a mini cart total calculator using reduce().
// task-51: Cart Total

let groceryCart = [
  { item: "Shirt", price: 500, qty: 2 },
  { item: "Shoes", price: 1000, qty: 1 },
  { item: "Cap", price: 200, qty: 3 }
];
let cartTotal = groceryCart.reduce((acc, p) => acc + (p.price * p.qty), 0);
console.log(cartTotal);

// Filter products under ₹500.
// task-52: Price Filter
let catalog = [
  { name: "Pen", price: 50 },
  { name: "Bag", price: 700 },
  { name: "Book", price: 300 }
];
let budgetItems = catalog.filter(c => c.price < 500);
console.log(budgetItems);

// Create search functionality using filter().
// task-53: Search

let hardware = ["Laptop", "Mobile", "Tablet", "Mouse"];
let searchTerm = "mo";
let searchResults = hardware.filter(h => 
  h.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(searchResults);

// Remove duplicates from array.
// task-54: Remove Duplicates

let rawData = [1, 2, 2, 3, 4, 4, 5];
let uniqueData = rawData.filter((val, idx) => rawData.indexOf(val) === idx);
console.log(uniqueData);

// Group employees by salary range.
// task-55: Grouping
let workforce = [
  { name: "John", salary: 20000 },
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 80000 },
  { name: "Sam", salary: 15000 }
];
let groupedPay = workforce.reduce((acc, emp) => {
  let tier = emp.salary < 30000 ? "Low" : emp.salary < 70000 ? "Medium" : "High";
  if (!acc[tier]) acc[tier] = [];
  acc[tier].push(emp);
  return acc;
}, {});
console.log(groupedPay);


// ================================================================================
