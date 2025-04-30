/**Coin Sorter and Wrapper Calculator
Project: Coin Sorter and Wrapper Calculator
Objective:Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. The program will then output the number of coin wrappers needed and the total amount in dollars.
Instructions:
    Define Variables for Coins:
        Create variables to store the number of each type of coin: pennies, nickels, dimes, and quarters.
    Calculate Total Value of Coins:
        Write code to calculate the total value of each type of coin in dollars.
    Calculate the combined total value of all coins.
    Sort Coins into Wrappers:
        Use the standard capacity for each type of coin wrapper:
            Pennies: 50 coins per wrapper
            Nickels: 40 coins per wrapper
            Dimes: 50 coins per wrapper
            Quarters: 40 coins per wrapper
    Calculate the number of wrappers needed for each type of coin.
    Calculate the remaining coins that do not fill a wrapper completely.
    Output Results:
        Use console.log to display the number of wrappers needed for each type of coin and remaining coins that do not fill a wrapper
        Use console.log to display the total amount in dollars.

 * Coin Wrapper Calculator
 * 
 * This program calculates the total value of US coins as well as determines
 * how many coin wrappers are needed for each type of coin.
 */

// Define the number of each type of coin
let pennies = 200; // [keyword=let use let to make a mutable global variable] [(pennies) is the declared variable that stores the number of pennies] = ['200' integer value] {the number of (pennies)}
let nickels = 200; // [keyword=let use let to make a mutable global variable] [(nickels) is the declared variable that stores the number of nickels] = ['200' integer value] {the number of (nickels)}
let dimes = 200; // [keyword=let use let to make a mutable global variable] [(dimes) is the declared variable that stores the number of dimes] = ['200' integer value] {the number of (dimes)}
let quarters = 200; // [keyword=let use let to make a mutable global variable] [(quarters) is the declared variable that stores the number of quarters] = ['200' integer value] {the number of (quarters)}

// Define coin values in dollars
const PENNIES_VALUE = 0.01; // [keyword=const use const to make a constant global variable] [(PENNIES_VALUE) is the declared variable that stores the value of  pennies] = ['0.01' integer value]  {the value of pennies}
const NICKELS_VALUE = 0.05; // [keyword=const use const to make a constant global variable] [(NICKELS_VALUE" is the declared variable that stores the value of  nickels] = ['0.05' integer value]  {the value of nickels}
const DIMES_VALUE = 0.10; // [keyword=const use const to make a constant global variable] [(DIMES_VALUE) is the declared variable that stores the value of  dimes] = ['0.10' integer value]  {the value of dimes}
const QUARTERS_VALUE = 0.25; // [keyword=const use const to make a constant global variable] [(QUARTERS_VALUE) is the declared variable that stores the value of  quarters] = ['0.25' integer value]  {the value of quarters}

// Define wrapper capacities
const PENNY_WRAPPER_CAPACITY = 50; // [keyword=const use const to make a constant global variable] [(PENNY_WRAPPER_CAPACITY) is the declared variable that stores the capacity of a penny wrapper] = ['50' integer value]  {the capacity of penny wrapper}
const NICKEL_WRAPPER_CAPACITY = 40; // [keyword=const use const to make a constant global variable] [(NICKEL_WRAPPER_CAPACITY) is the declared variable that stores the capacity of a nickel wrapper] = ['40' integer value]  {the capacity of nickel wrapper}
const DIME_WRAPPER_CAPACITY = 50; // [keyword=const use const to make a constant global variable] [(DIME_WRAPPER_CAPACITY) is the declared variable that stores the capacity of a dime wrapper] = ['50' integer value]  {the capacity of dime wrapper}
const QUARTER_WRAPPER_CAPACITY = 40; // [keyword=const use const to make a constant global variable] [(QUARTER_WRAPPER_CAPACITY) is the declared variable that stores the capacity of a quarter wrapper] = ['40' integer value]  {the capacity of quarter wrapper}

// Calculate total value of each type of coin
const penniesTotal = pennies * PENNIES_VALUE; // [keyword=const use const to make a constant global variable] [(penniesTotal) is the declared variable that stores the total value of (pennies)] = [(pennies) * (PENNY_VALUE) {the total value of (pennies)}
const nickelsTotal = nickels * NICKELS_VALUE; // [keyword=const use const to make a constant global variable] [(nickelsTotal) is the declared variable that stores the total value of (nickels)] = [(nickels) * (NICKEL_VALUE) {the total value of (nickels)}
const dimesTotal = dimes * DIMES_VALUE;      // [keyword=const use const to make a constant global variable] [(dimesTotal) is the declared variable that stores the total value of (dimes)] = [(dimes) * (DIME_VALUE) {the total value of (dimes)}
const quartersTotal = quarters * QUARTERS_VALUE; // [keyword=const use const to make a constant global variable] [(quartersTotal) is the declared variable that stores the total value of (quarters)] = [(quarters) * (QUARTER_VALUE) {the total value of (quarters)}

// Calculate combined total value
const totalValue = penniesTotal + nickelsTotal + dimesTotal + quartersTotal; // [keyword=const use const to make a constant global variable] [(totalValue) is the declared variable that stores the total value of all coins] = [(pennyTotal) + (nickelTotal) + (dimeTotal) + (quarterTotal)] {the total value of all coins}

// Calculate number of wrappers needed for each type of coin
// Math.floor is a JavaScript method that rounds a number down to the nearest integer.
const pennyWrappers = Math.floor(pennies / PENNY_WRAPPER_CAPACITY); // [keyword=const use const to make a constant global variable] [(pennyWrappers) is the declared variable that stores the number of penny wrappers needed] = [keyword= math.floor round output to the nearest integer of ((pennies) / (PENNY_WRAPPER_CAPACITY))] {the number of penny wrappers needed}
const nickelWrappers = Math.floor(nickels / NICKEL_WRAPPER_CAPACITY);  // [keyword=const use const to make a constant global variable] [(nickelWrappers) is the declared variable that stores the number of nickel wrappers needed] = [keyword= math.floor round output to the nearest integer of ((nickels) / (NICKEL_WRAPPER_CAPACITY))] {the number of nickel wrappers needed}
const dimeWrappers = Math.floor(dimes / DIME_WRAPPER_CAPACITY);  // [keyword=const use const to make a constant global variable] [(dimeWrappers) is the declared variable that stores the number of dime wrappers needed] = [keyword= math.floor round output to the nearest integer of ((dimes) / (DIME_WRAPPER_CAPACITY))] {the number of dime wrappers needed}
const quarterWrappers = Math.floor(quarters / QUARTER_WRAPPER_CAPACITY);  // [keyword=const use const to make a constant global variable] [(quarterWrappers) is the declared variable that stores the number of quarter wrappers needed] = [keyword= math.floor round output to the nearest integer of ((quarters) / (QUARTER_WRAPPER_CAPACITY))] {the number of quarter wrappers needed}

// Calculate remaining coins that don't fill a wrapper
// The modulus operator (%) calculates the remainder of a division operation.
const remainingPennies = pennies % PENNY_WRAPPER_CAPACITY;   // [keyword=const use const to make a constant global variable] [(remainingPennies) is the declared variable that stores the number of remaining pennies] = [(pennies) % (PENNY_WRAPPER_CAPACITY)] {the number of remaining pennies}
const remainingNickels = nickels % NICKEL_WRAPPER_CAPACITY;  // [keyword=const use const to make a constant global variable] [(remainingNickels) is the declared variable that stores the number of remaining nickels] = [(nickels) % (NICKEL_WRAPPER_CAPACITY)] {the number of remaining nickels}
const remainingDimes = dimes % DIME_WRAPPER_CAPACITY;  // [keyword=const use const to make a constant global variable] [(remainingDimes) is the declared variable that stores the number of remaining dimes] = [(dimes) % (DIME_WRAPPER_CAPACITY)] {the number of remaining dimes}
const remainingQuarters = quarters % QUARTER_WRAPPER_CAPACITY;  // [keyword=const use const to make a constant global variable] [(remainingQuarters) is the declared variable that stores the number of remaining quarters] = [(quarters) % (QUARTER_WRAPPER_CAPACITY)] {the number of remaining quarters}

// Output results
// A newline character [\n] is a special control character that indicates where a line break should occur in text. In JavaScript and many other programming languages, \n is used to represent this line break when working with strings.
console.log("₵₵₵ COIN WRAPPER CALCULATOR ₵₵₵");     // [keyword=console.log use console.log to output the string] {the string "₵₵₵ COIN WRAPPER CALCULATOR ₵₵₵"}
console.log("\nCoin Counts:");  // [keyword=console.log use console.log to output the string] {the string "Coin Counts:"}
console.log(`Pennies: ${pennies}`);  // [keyword=console.log use console.log to output the string] {the string "Pennies: " + (pennies) value}
console.log(`Nickels: ${nickels}`); // [keyword=console.log use console.log to output the string] {the string "Nickels: " + (nickels) value}
console.log(`Dimes: ${dimes}`); // [keyword=console.log use console.log to output the string] {the string "Dimes: " + (dimes) value}
console.log(`Quarters: ${quarters}`); // [keyword=console.log use console.log to output the string] {the string "Quarters: " + (quarters) value}

console.log("\nWrappers Needed:"); // [keyword=console.log use console.log to output the string] {the string "Wrappers Needed:"}
console.log(`Penny wrappers: ${pennyWrappers} (${remainingPennies} pennies remaining)`); // [keyword=console.log use console.log to output the string] {the string "Penny wrappers: " + (pennyWrappers) value + " (" + (remainingPennies) value + " pennies remaining)"}
console.log(`Nickel wrappers: ${nickelWrappers} (${remainingNickels} nickels remaining)`); // [keyword=console.log use console.log to output the string] {the string "Nickel wrappers: " + (nickelWrappers) value + " (" + (remainingNickels) value + " nickels remaining)"}
console.log(`Dime wrappers: ${dimeWrappers} (${remainingDimes} dimes remaining)`); // [keyword=console.log use console.log to output the string] {the string "Dime wrappers: " + (dimeWrappers) value + " (" + (remainingDimes) value + " dimes remaining)"}
console.log(`Quarter wrappers: ${quarterWrappers} (${remainingQuarters} quarters remaining)`); // [keyword=console.log use console.log to output the string] {the string "Quarter wrappers: " + (quarterWrappers) value + " (" + (remainingQuarters) value + " quarters remaining)"}

console.log("\nTotal Value:"); // [keyword=console.log use console.log to output the string] {the string "Total Value:"}
console.log(`Pennies: $${penniesTotal.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Pennies: " + (penniesTotal) value + " to 2 decimal places"}
console.log(`Nickels: $${nickelsTotal.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Nickels: " + (nickelsTotal) value + " to 2 decimal places"}
console.log(`Dimes: $${dimesTotal.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Dimes: " + (dimesTotal) value + " to 2 decimal places"}
console.log(`Quarters: $${quartersTotal.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Quarters: " + (quartersTotal) value + " to 2 decimal places"}
console.log(`Total: $${totalValue.toFixed(2)}`);    // [keyword=console.log use console.log to output the string] {the string "Total: " + (totalValue) value + " to 2 decimal places"}