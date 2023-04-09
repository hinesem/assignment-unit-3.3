console.log('****** Part Supply *******');

// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40 
//    & console.log the variable
console.log('1. Number of partsNeeded:');

let partsNeeded = 40;
console.log(`parts needed: ${partsNeeded}`);
console.log('\n');

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

console.log('\n');

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(`the second item in the array is: ${supplyChanges[1]}`);

console.log('\n');

// 4. The last item was added by mistake. Remove it from the 'supplyChanges' 
//    array & console.log the value removed.
console.log('4. Removed item:');
console.log(supplyChanges.pop());


console.log('\n');

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25);
console.log(supplyChanges);

console.log('\n');

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.' 
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.' 

console.log('6. Showing supplyChanges...');

for (let x = 0; x <= supplyChanges.length; x++) {
    if (supplyChanges[x] > 0) {
        console.log(`added ${supplyChanges[x]} parts`);
    } else if (supplyChanges[x] === 0) {
        console.log('no change'); 
    } else if (supplyChanges[x] < 0) {
        console.log (`removed ${supplyChanges[x]} parts`);
    } 
}
console.log('\n');

// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop. 
console.log('7. Showing supplyChanges with "for of" loop');

for (x of supplyChanges) {
    if (x > 0) {
        console.log(`added ${x} parts`);
    } else if (x === 0) {
        console.log('no change'); 
    } else {
        console.log (`removed ${x} parts`);
    }
}
console.log('\n');
// 8. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('8. Total supplies available is:');

let total = 0;

// for (let i = 0; i < supplyChanges[i]; i ++) {
//     total += supplyChanges[i];
// }
// console.log(total);

for (let i = 0; i <= supplyChanges[i]; i++) {
    if (supplyChanges[i] > 0) {
        total += supplyChanges[i];
    } else if (supplyChanges[i] === 0) {
        //total += 0;
        continue;
    } else if (supplyChanges[i] < 0) {
        total += supplyChanges[i];
    }
    console.log(`the total is at ${total}`);
}
console.log(total);
console.log('\n');
console.log('-----------------');

total = 0;
for (let i of supplyChanges) {
    //let total = 0;
    if (i > 0) {
        total += i;
        console.log(total);
    } else if (i === 0) {
        //total += 0;
        continue;
    } else if (i < 0) {
        total += i;
        console.log(total);
    }
    console.log(`the total is at: ${total}`);
} 


console.log('\n');
// 9. We have a large stash of parts in our warehouse that we 
//    need to box up and get ready for shipment. 
//    There are 572 parts in total, and each box holds 7 parts.
//    Use a `while` loop to keep adding parts to boxes until
//    no more boxes can be filled.
//    Then log how many boxes were filled, and how many parts are left over.
console.log('9. Filling boxes with a "while" loop');

let i = 0; //setting number of items 
count = 0; //
while(i <= 572) {// as long as i is less than or equal to 572, do this code below
    572 % 7 === 0;// divide 572 w 0 remainder by 7
    i+=7; //need to increment 7 items every iteration
    count += 1; //this will count each iteration (boxes)
    console.log(`box: ${count}`) //logging which box we've filled
}

