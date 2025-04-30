/**Coin Sorter and Wrapper Calculator
Project: Coin Sorter and Wrapper Calculator
Objective: Create a JavaScript program that calculates the total value of coins in US currency (pennies, nickels, dimes, and quarters) and sorts them into coin wrappers. The program will then output the number of coin wrappers needed and the total amount in dollars.
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

// v2 Notes: I did not like the way the original solution did not reflect the actual properties of a physical coin or the way that we as humans conceptualize them. In the end, while this apprach did turn out 100% object-oriented and probably most accurately reflects the real-world objects, it was not the most efficient on many levels.
// v3 Notes: I found This last approach the most elegant. Not only does it represent the physical objects, it is both easy for the user to understand and easy for the computer to calculate. 

// Define the coin types with their properties in a single object
const coins = { // [keyword=const use const to make a constant global variable] [(coins) is the declared object that stores all coin information]
    penny: { // [(penny) is a property of the coins object representing penny information]
      count: 200, // [(count) is the property that stores the number of pennies] = ['200' integer value] {the number of pennies}
      value: 0.01, // [(value) is the property that stores the value of a penny] = ['0.01' decimal value] {the value of a penny in dollars}
      wrapperCapacity: 50, // [(wrapperCapacity) is the property that stores the capacity of a penny wrapper] = ['50' integer value] {the capacity of a penny wrapper}
      get total() { return this.count * this.value; }, // [keyword=get defines a getter method] [(total) calculates the total value of pennies] = [(count) * (value)] {the total value of pennies}
      get wrappers() { return Math.floor(this.count / this.wrapperCapacity); }, // [keyword=get defines a getter method] [(wrappers) calculates the number of penny wrappers needed] = [keyword=Math.floor rounds down to nearest integer ((count) / (wrapperCapacity))] {the number of penny wrappers needed}
      get remaining() { return this.count % this.wrapperCapacity; } // [keyword=get defines a getter method] [(remaining) calculates the remaining pennies] = [(count) % (wrapperCapacity)] {the number of remaining pennies}
    },
    nickel: { // [(nickel) is a property of the coins object representing nickel information]
      count: 200, // [(count) is the property that stores the number of nickels] = ['200' integer value] {the number of nickels}
      value: 0.05, // [(value) is the property that stores the value of a nickel] = ['0.05' decimal value] {the value of a nickel in dollars}
      wrapperCapacity: 40, // [(wrapperCapacity) is the property that stores the capacity of a nickel wrapper] = ['40' integer value] {the capacity of a nickel wrapper}
      get total() { return this.count * this.value; }, // [keyword=get defines a getter method] [(total) calculates the total value of nickels] = [(count) * (value)] {the total value of nickels}
      get wrappers() { return Math.floor(this.count / this.wrapperCapacity); }, // [keyword=get defines a getter method] [(wrappers) calculates the number of nickel wrappers needed] = [keyword=Math.floor rounds down to nearest integer ((count) / (wrapperCapacity))] {the number of nickel wrappers needed}
      get remaining() { return this.count % this.wrapperCapacity; } // [keyword=get defines a getter method] [(remaining) calculates the remaining nickels] = [(count) % (wrapperCapacity)] {the number of remaining nickels}
    },
    dime: { // [(dime) is a property of the coins object representing dime information]
      count: 200, // [(count) is the property that stores the number of dimes] = ['200' integer value] {the number of dimes}
      value: 0.10, // [(value) is the property that stores the value of a dime] = ['0.10' decimal value] {the value of a dime in dollars}
      wrapperCapacity: 50, // [(wrapperCapacity) is the property that stores the capacity of a dime wrapper] = ['50' integer value] {the capacity of a dime wrapper}
      get total() { return this.count * this.value; }, // [keyword=get defines a getter method] [(total) calculates the total value of dimes] = [(count) * (value)] {the total value of dimes}
      get wrappers() { return Math.floor(this.count / this.wrapperCapacity); }, // [keyword=get defines a getter method] [(wrappers) calculates the number of dime wrappers needed] = [keyword=Math.floor rounds down to nearest integer ((count) / (wrapperCapacity))] {the number of dime wrappers needed}
      get remaining() { return this.count % this.wrapperCapacity; } // [keyword=get defines a getter method] [(remaining) calculates the remaining dimes] = [(count) % (wrapperCapacity)] {the number of remaining dimes}
    },
    quarter: { // [(quarter) is a property of the coins object representing quarter information]
      count: 200, // [(count) is the property that stores the number of quarters] = ['200' integer value] {the number of quarters}
      value: 0.25, // [(value) is the property that stores the value of a quarter] = ['0.25' decimal value] {the value of a quarter in dollars}
      wrapperCapacity: 40, // [(wrapperCapacity) is the property that stores the capacity of a quarter wrapper] = ['40' integer value] {the capacity of a quarter wrapper}
      get total() { return this.count * this.value; }, // [keyword=get defines a getter method] [(total) calculates the total value of quarters] = [(count) * (value)] {the total value of quarters}
      get wrappers() { return Math.floor(this.count / this.wrapperCapacity); }, // [keyword=get defines a getter method] [(wrappers) calculates the number of quarter wrappers needed] = [keyword=Math.floor rounds down to nearest integer ((count) / (wrapperCapacity))] {the number of quarter wrappers needed}
      get remaining() { return this.count % this.wrapperCapacity; } // [keyword=get defines a getter method] [(remaining) calculates the remaining quarters] = [(count) % (wrapperCapacity)] {the number of remaining quarters}
    }
  };
  
  // Calculate combined total value of all coins
  const totalValue = Object.values(coins).reduce((sum, coin) => sum + coin.total, 0); // [keyword=const use const to make a constant variable] [(totalValue) is the declared variable that stores the total value of all coins] = [keyword=Object.values gets all coin objects and reduce sums their total values] {the total value of all coins}
  
  // Output results
  // A newline character [\n] is a special control character that indicates where a line break should occur in text. In JavaScript and many other programming languages, \n is used to represent this line break when working with strings.
  console.log("₵₵₵ COIN WRAPPER CALCULATOR ₵₵₵");     // [keyword=console.log use console.log to output the string] {the string "₵₵₵ COIN WRAPPER CALCULATOR ₵₵₵"}
  console.log("\nCoin Counts:");  // [keyword=console.log use console.log to output the string] {the string "Coin Counts:"}
  console.log(`Pennies: ${coins.penny.count}`);  // [keyword=console.log use console.log to output the string] {the string "Pennies: " + (coins.penny.count) value}
  console.log(`Nickels: ${coins.nickel.count}`); // [keyword=console.log use console.log to output the string] {the string "Nickels: " + (coins.nickel.count) value}
  console.log(`Dimes: ${coins.dime.count}`); // [keyword=console.log use console.log to output the string] {the string "Dimes: " + (coins.dime.count) value}
  console.log(`Quarters: ${coins.quarter.count}`); // [keyword=console.log use console.log to output the string] {the string "Quarters: " + (coins.quarter.count) value}
  
  console.log("\nWrappers Needed:"); // [keyword=console.log use console.log to output the string] {the string "Wrappers Needed:"}
  console.log(`Penny wrappers: ${coins.penny.wrappers} (${coins.penny.remaining} pennies remaining)`); // [keyword=console.log use console.log to output the string] {the string "Penny wrappers: " + (coins.penny.wrappers) value + " (" + (coins.penny.remaining) value + " pennies remaining)"}
  console.log(`Nickel wrappers: ${coins.nickel.wrappers} (${coins.nickel.remaining} nickels remaining)`); // [keyword=console.log use console.log to output the string] {the string "Nickel wrappers: " + (coins.nickel.wrappers) value + " (" + (coins.nickel.remaining) value + " nickels remaining)"}
  console.log(`Dime wrappers: ${coins.dime.wrappers} (${coins.dime.remaining} dimes remaining)`); // [keyword=console.log use console.log to output the string] {the string "Dime wrappers: " + (coins.dime.wrappers) value + " (" + (coins.dime.remaining) value + " dimes remaining)"}
  console.log(`Quarter wrappers: ${coins.quarter.wrappers} (${coins.quarter.remaining} quarters remaining)`); // [keyword=console.log use console.log to output the string] {the string "Quarter wrappers: " + (coins.quarter.wrappers) value + " (" + (coins.quarter.remaining) value + " quarters remaining)"}
  
  console.log("\nTotal Value:"); // [keyword=console.log use console.log to output the string] {the string "Total Value:"}
  console.log(`Pennies: $${coins.penny.total.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Pennies: $" + (coins.penny.total) value formatted to 2 decimal places}
  console.log(`Nickels: $${coins.nickel.total.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Nickels: $" + (coins.nickel.total) value formatted to 2 decimal places}
  console.log(`Dimes: $${coins.dime.total.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Dimes: $" + (coins.dime.total) value formatted to 2 decimal places}
  console.log(`Quarters: $${coins.quarter.total.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "Quarters: $" + (coins.quarter.total) value formatted to 2 decimal places}
  console.log(`Total: $${totalValue.toFixed(2)}`);    // [keyword=console.log use console.log to output the string] {the string "Total: $" + (totalValue) value formatted to 2 decimal places}