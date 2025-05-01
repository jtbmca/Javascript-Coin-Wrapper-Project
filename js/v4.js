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
// v4 Notes: Update for datachallenge. I am happy with the solution, but it is only partially implemented. I bascially added a function to count each first letter of the string and add to the corresponding count.
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

  var challengeData = ['dime','dime','dime','penny','nickel','penny','dime','quarter','dime','nickel','nickel','dime','quarter','nickel','penny','dime','nickel','dime','dime','dime','quarter','nickel','quarter','dime','nickel','penny','dime','penny','nickel','quarter','quarter','quarter','dime','nickel','dime','quarter','dime','penny','penny','nickel','penny','penny','dime','nickel','penny','penny','quarter','quarter','nickel','nickel','penny','dime','nickel','quarter','nickel','nickel','quarter','quarter','dime','nickel','penny','dime','dime','nickel','penny','quarter','quarter','quarter','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','quarter','penny','quarter','nickel','dime','quarter','dime','penny','quarter','nickel','nickel','nickel','quarter','penny','nickel','nickel','dime','dime','dime','quarter','quarter','quarter','penny','penny','dime','dime','dime','penny','quarter','nickel','quarter','quarter','penny','nickel','penny','nickel','nickel','penny','quarter','nickel','dime','quarter','nickel','dime','penny','nickel','nickel','penny','penny','penny','dime','quarter','quarter','quarter','penny','dime','nickel','dime','dime','penny','quarter','penny','quarter','penny','dime','dime','nickel','dime','penny','penny','nickel','penny','nickel','quarter','dime','dime','nickel','nickel','nickel','dime','dime','dime','quarter','penny','dime','nickel','quarter','nickel','penny','nickel','penny','nickel','penny','nickel','nickel','penny','dime','nickel','dime','dime','quarter','quarter','quarter','penny','dime','penny','dime','dime','penny','penny','nickel','nickel','penny','quarter','nickel','quarter','dime','nickel','quarter','nickel','penny','dime','quarter','nickel','penny','quarter','quarter','penny','quarter','dime','penny','dime','nickel','penny','dime','quarter','nickel','quarter','quarter','quarter','dime','quarter','dime','quarter','nickel','penny','penny','quarter','quarter','penny','dime','penny','dime','penny','nickel','nickel','dime','penny','quarter','penny','quarter','nickel','quarter','penny','nickel','quarter','dime','quarter','dime','penny','dime','dime','quarter','penny','penny','nickel','nickel','quarter','nickel','quarter','dime','quarter','penny','penny','penny','nickel','nickel','quarter','penny','quarter','quarter','penny','nickel','dime','penny','quarter','nickel','dime','penny','penny','quarter','penny','penny','dime','nickel','dime','penny','dime','nickel','nickel','dime','dime','penny','nickel','penny','dime','dime','nickel','dime','dime','penny','penny','dime','penny','nickel','quarter','nickel','quarter','quarter','penny','nickel','penny','quarter','nickel','nickel','quarter','penny','penny','nickel','nickel','penny','penny','nickel','quarter','nickel','dime','nickel','nickel','penny','quarter','dime','dime','nickel','dime','nickel','nickel','dime','quarter','quarter','nickel','penny','dime','dime','dime','dime','quarter','nickel','nickel','dime','nickel','quarter','nickel','dime','quarter','nickel','dime','quarter','quarter','penny','quarter','nickel','dime','quarter','penny','penny','nickel','nickel','quarter','dime','penny','dime','dime','quarter','dime','penny','quarter','penny','penny','nickel','nickel','nickel','penny','penny','quarter','penny','penny','quarter','dime','quarter','nickel','quarter','nickel','penny','penny','penny','dime','dime','dime','dime','nickel','dime','quarter','nickel','dime','nickel','dime','dime','penny','dime','quarter','nickel','penny','nickel','penny','penny','quarter','dime','nickel','nickel','nickel','penny','nickel','dime','penny','quarter','quarter','dime','quarter','penny','nickel','nickel','penny','dime','dime','nickel','nickel','dime','penny','nickel','penny','quarter','dime','nickel','dime','penny','penny','quarter','dime','quarter','penny','penny','nickel','quarter','quarter','quarter','dime','penny','dime','dime','dime','quarter','penny','penny','dime','quarter','dime','penny','quarter','dime','dime','dime']
  /**
 * Processes an array of coin names and updates the count of each coin type
 * in the coins object based on the first letter of each coin name.
 * 
 * @param {string[]} coinData - Array of coin names to process
 * @param {Object} coins - The coins object to update
 * @returns {Object} The updated coins object
 */
function processCoinChallenge(coinData, coins) { // [keyword=function defines a reusable block of code] [(processCoinChallenge) is the function name] [(coinData, coins) are parameters] {a function that processes coin data and updates coin counts}
  // For performance, create a mapping of first letters to coin types
  const coinMapping = { // [keyword=const use const to make a constant variable] [(coinMapping) is the declared object that maps first letters to coin types]
    'p': 'penny', // [('p') is a key in the mapping object] = ['penny' string value] {maps 'p' to penny}
    'n': 'nickel', // [('n') is a key in the mapping object] = ['nickel' string value] {maps 'n' to nickel}
    'd': 'dime', // [('d') is a key in the mapping object] = ['dime' string value] {maps 'd' to dime}
    'q': 'quarter' // [('q') is a key in the mapping object] = ['quarter' string value] {maps 'q' to quarter}
  };
  
  // Track counts for user feedback
  const countSummary = { // [keyword=const use const to make a constant variable] [(countSummary) is the declared object that tracks counts of processed coins]
    penny: 0, // [(penny) is a property in the countSummary object] = [0 integer value] {initial count of pennies}
    nickel: 0, // [(nickel) is a property in the countSummary object] = [0 integer value] {initial count of nickels}
    dime: 0, // [(dime) is a property in the countSummary object] = [0 integer value] {initial count of dimes}
    quarter: 0 // [(quarter) is a property in the countSummary object] = [0 integer value] {initial count of quarters}
  };

  // Process each coin in the array
  coinData.forEach(coinName => { // [keyword=forEach iterates through each element in (coinData)] [(coinName) is the current element in the iteration]
    // Get the first letter and convert to lowercase for consistency
    const firstLetter = coinName.charAt(0).toLowerCase(); // [keyword=const use const to make a constant variable] [(firstLetter) is the declared variable that stores the first letter of the coin name] = [(coinName.charAt(0)) gets the first character of (coinName) and (toLowerCase()) converts it to lowercase] {the lowercase first letter of the coin name}
    
    // Look up the coin type from our mapping
    const coinType = coinMapping[firstLetter]; // [keyword=const use const to make a constant variable] [(coinType) is the declared variable that stores the coin type] = [(coinMapping[firstLetter]) looks up the coin type using the first letter] {the coin type corresponding to the first letter}
    
    // If we have a valid coin type, update its count
    if (coinType && coins[coinType]) { // [keyword=if conditional statement] [(coinType && coins[coinType]) checks if coinType exists and is a valid property in coins] {if the coin type is valid}
      coins[coinType].count++; // [(coins[coinType].count++) increments the count property of the coin type in the coins object] {increases the count of the coin type by 1}
      countSummary[coinType]++; // [(countSummary[coinType]++) increments the count of the coin type in the countSummary object] {increases the count summary of the coin type by 1}
    }
  });

  // Log summary for user feedback
  console.log('Coins processed:'); // [keyword=console.log use console.log to output the string] {the string "Coins processed:"}
  Object.entries(countSummary).forEach(([type, count]) => { // [keyword=Object.entries gets key-value pairs from (countSummary)] [keyword=forEach iterates through each pair] [([type, count]) destructures each pair into type and count]
    console.log(`${type}: ${count} coins added`); // [keyword=console.log use console.log to output the string] {the string "(type): (count) coins added"}
  });
  
  return coins; // [keyword=return specifies the value to be returned by the function] [(coins) is the updated coins object] {returns the updated coins object}
}

// Example usage with the coins object from the first revision
const updatedCoins = processCoinChallenge(challengeData, coins); // [keyword=const use const to make a constant variable] [(updatedCoins) is the declared variable that stores the result of processCoinChallenge] = [(processCoinChallenge(challengeData, coins)) calls the function with challengeData and coins as arguments] {the updated coins object after processing the challenge data}

// Display updated coin counts and totals
console.log('\nUpdated Coin Counts:'); // [keyword=console.log use console.log to output the string] {the string "Updated Coin Counts:"}
Object.entries(updatedCoins).forEach(([type, coin]) => { // [keyword=Object.entries gets key-value pairs from (updatedCoins)] [keyword=forEach iterates through each pair] [([type, coin]) destructures each pair into type and coin]
  console.log(`${type}: ${coin.count} coins ($${coin.total.toFixed(2)})`); // [keyword=console.log use console.log to output the string] {the string "(type): (coin.count) coins ($(coin.total) formatted to 2 decimal places)"}
});

// Calculate and display new total value
const newTotalValue = Object.values(updatedCoins) // [keyword=const use const to make a constant variable] [(newTotalValue) is the declared variable that stores the total value of all coins] = [keyword=Object.values gets all values from (updatedCoins)]
  .reduce((sum, coin) => sum + coin.total, 0); // [keyword=reduce applies a function to each element to reduce to a single value] [(sum, coin) => sum + coin.total is the reducer function that adds each coin's total to the sum] [0 is the initial value of sum] {the total value of all coins}
console.log(`\nNew Total Value: $${newTotalValue.toFixed(2)}`); // [keyword=console.log use console.log to output the string] {the string "New Total Value: $(newTotalValue) formatted to 2 decimal places"}

// Display wrapper information
console.log('\nWrappers Needed:'); // [keyword=console.log use console.log to output the string] {the string "Wrappers Needed:"}
Object.entries(updatedCoins).forEach(([type, coin]) => { // [keyword=Object.entries gets key-value pairs from (updatedCoins)] [keyword=forEach iterates through each pair] [([type, coin]) destructures each pair into type and coin]
  console.log(`${type} wrappers: ${coin.wrappers} (${coin.remaining} ${type}s remaining)`); // [keyword=console.log use console.log to output the string] {the string "(type) wrappers: (coin.wrappers) ((coin.remaining) (type)s remaining)"}
});