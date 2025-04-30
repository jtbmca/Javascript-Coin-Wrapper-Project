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

// v2 Notes: I did not like the way v1 did not reflect the actual properties of a physical coin or the way that we as humans conceptualize them. In the end, while this second apprach did turn out 100% object-oriented and probably most accurately reflects the real-world objects, it was not the most efficient on many levels. Might be good for a simulation, but not for a calculator.

// Define a Coin class to represent common coin properties and behaviors
class Coin { // [keyword=class defines a blueprint for creating objects] [(Coin) is the base class for all coin types]
    constructor(name, count, value, wrapperCapacity) { // [keyword=constructor initializes new instances of the class] [(name, count, value, wrapperCapacity) are parameters for creating a coin]
      this.name = name; // [(name) is the property that stores the name of the coin] = [(name) parameter] {the name of the coin}
      this.count = count; // [(count) is the property that stores the number of coins] = [(count) parameter] {the number of coins}
      this.value = value; // [(value) is the property that stores the value of a coin] = [(value) parameter] {the value of a coin in dollars}
      this.wrapperCapacity = wrapperCapacity; // [(wrapperCapacity) is the property that stores the capacity of a coin wrapper] = [(wrapperCapacity) parameter] {the capacity of a coin wrapper}
    }
  
    // Calculate the total value of this type of coin
    getTotal() { // [method that calculates the total value of coins]
      return this.count * this.value; // [returns (count) * (value)] {the total value of coins}
    }
  
    // Calculate how many full wrappers can be filled
    getWrappersNeeded() { // [method that calculates the number of wrappers needed]
      return Math.floor(this.count / this.wrapperCapacity); // [keyword=Math.floor rounds down to nearest integer ((count) / (wrapperCapacity))] {the number of wrappers needed}
    }
  
    // Calculate how many coins remain after filling wrappers
    getRemainingCoins() { // [method that calculates the remaining coins]
      return this.count % this.wrapperCapacity; // [returns (count) % (wrapperCapacity)] {the number of remaining coins}
    }
  
    // Format the total value as currency
    getFormattedTotal() { // [method that formats the total value as currency]
      return this.getTotal().toFixed(2); // [returns the total value formatted to 2 decimal places] {the formatted total value}
    }
  
    // Get plural or singular form of the coin name
    getNamePlural() { // [method that returns the plural form of the coin name]
      return this.name + 's'; // [returns (name) + 's'] {the plural form of the coin name}
    }
  }
  
  // Create specific coin type classes that extend the base Coin class
  class Penny extends Coin { // [keyword=class defines a blueprint for creating objects] [(Penny) is a class that extends (Coin)]
    constructor(count) { // [keyword=constructor initializes new instances of the class] [(count) is a parameter for creating a penny]
      super('penny', count, 0.01, 50); // [keyword=super calls the parent class constructor] [('penny', count, 0.01, 50) are arguments passed to the parent constructor] {initializes a penny with name 'penny', count, value 0.01, and wrapper capacity 50}
    }
  }
  
  class Nickel extends Coin { // [keyword=class defines a blueprint for creating objects] [(Nickel) is a class that extends (Coin)]
    constructor(count) { // [keyword=constructor initializes new instances of the class] [(count) is a parameter for creating a nickel]
      super('nickel', count, 0.05, 40); // [keyword=super calls the parent class constructor] [('nickel', count, 0.05, 40) are arguments passed to the parent constructor] {initializes a nickel with name 'nickel', count, value 0.05, and wrapper capacity 40}
    }
  }
  
  class Dime extends Coin { // [keyword=class defines a blueprint for creating objects] [(Dime) is a class that extends (Coin)]
    constructor(count) { // [keyword=constructor initializes new instances of the class] [(count) is a parameter for creating a dime]
      super('dime', count, 0.10, 50); // [keyword=super calls the parent class constructor] [('dime', count, 0.10, 50) are arguments passed to the parent constructor] {initializes a dime with name 'dime', count, value 0.10, and wrapper capacity 50}
    }
  }
  
  class Quarter extends Coin { // [keyword=class defines a blueprint for creating objects] [(Quarter) is a class that extends (Coin)]
    constructor(count) { // [keyword=constructor initializes new instances of the class] [(count) is a parameter for creating a quarter]
      super('quarter', count, 0.25, 40); // [keyword=super calls the parent class constructor] [('quarter', count, 0.25, 40) are arguments passed to the parent constructor] {initializes a quarter with name 'quarter', count, value 0.25, and wrapper capacity 40}
    }
  }
  
  // Create instances of each coin type with the specified counts
  const penny = new Penny(200); // [keyword=const use const to make a constant variable] [(penny) is the declared variable that stores a Penny instance] = [keyword=new creates a new instance of (Penny) with count 200] {a new Penny object with count 200}
  const nickel = new Nickel(200); // [keyword=const use const to make a constant variable] [(nickel) is the declared variable that stores a Nickel instance] = [keyword=new creates a new instance of (Nickel) with count 200] {a new Nickel object with count 200}
  const dime = new Dime(200); // [keyword=const use const to make a constant variable] [(dime) is the declared variable that stores a Dime instance] = [keyword=new creates a new instance of (Dime) with count 200] {a new Dime object with count 200}
  const quarter = new Quarter(200); // [keyword=const use const to make a constant variable] [(quarter) is the declared variable that stores a Quarter instance] = [keyword=new creates a new instance of (Quarter) with count 200] {a new Quarter object with count 200}
  
  // Store all coins in an array for easier iteration
  const allCoins = [penny, nickel, dime, quarter]; // [keyword=const use const to make a constant variable] [(allCoins) is the declared variable that stores an array of all coin instances] = [array containing (penny), (nickel), (dime), and (quarter)] {an array of all coin objects}
  
  // Calculate the total value of all coins
  const totalValue = allCoins.reduce((sum, coin) => sum + coin.getTotal(), 0); // [keyword=const use const to make a constant variable] [(totalValue) is the declared variable that stores the total value of all coins] = [keyword=reduce sums the total values of all coins in (allCoins)] {the total value of all coins}
  
  // Output results
  // A newline character [\n] is a special control character that indicates where a line break should occur in text. In JavaScript and many other programming languages, \n is used to represent this line break when working with strings.
  console.log("₵₵₵ COIN WRAPPER CALCULATOR ₵₵₵");     // [keyword=console.log use console.log to output the string] {the string "₵₵₵ COIN WRAPPER CALCULATOR ₵₵₵"}
  
  console.log("\nCoin Counts:");  // [keyword=console.log use console.log to output the string] {the string "Coin Counts:"}
  allCoins.forEach(coin => { // [keyword=forEach iterates through each element in (allCoins)]
    console.log(`${coin.getNamePlural()}: ${coin.count}`); // [keyword=console.log use console.log to output the string] {the string "(coin name plural): (coin count)"}
  });
  
  console.log("\nWrappers Needed:"); // [keyword=console.log use console.log to output the string] {the string "Wrappers Needed:"}
  allCoins.forEach(coin => { // [keyword=forEach iterates through each element in (allCoins)]
    console.log(`${coin.name} wrappers: ${coin.getWrappersNeeded()} (${coin.getRemainingCoins()} ${coin.getNamePlural()} remaining)`); // [keyword=console.log use console.log to output the string] {the string "(coin name) wrappers: (wrappers needed) ((remaining coins) (coin name plural) remaining)"}
  });
  
  console.log("\nTotal Value:"); // [keyword=console.log use console.log to output the string] {the string "Total Value:"}
  allCoins.forEach(coin => { // [keyword=forEach iterates through each element in (allCoins)]
    console.log(`${coin.getNamePlural()}: $${coin.getFormattedTotal()}`); // [keyword=console.log use console.log to output the string] {the string "(coin name plural): $(formatted total)"}
  });
  console.log(`Total: $${totalValue.toFixed(2)}`);    // [keyword=console.log use console.log to output the string] {the string "Total: $(total value formatted to 2 decimal places)"}