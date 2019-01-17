// Practice Logic in JavaScript

// Coins to Cash

// Define an object and store it in a variable named piggyBank. The object should have the following keys defined: quarters, nickels, dimes, pennies.
// For each coin type, give yourself as many as you like.


const piggyBank = { 
    pennies: 342,
    nickels: 22,
    dimes: 37,
    quarters: 17
}

let dollarAmount = 0


const pennyValue = piggyBank.pennies * 0.01;
const nickelValue = piggyBank.nickels * 0.05;
const dimeValue = piggyBank.dimes * 0.10;
const quarterValue = piggyBank.quarters * 0.25;

dollarAmount = `$ ${(pennyValue + nickelValue + dimeValue + quarterValue).toFixed(2)}`;

console.log(dollarAmount);


// Once you have given yourself a large stash of coins in your piggybank, look at each key and perform the appropriate math on the integer value to determine how much money you have in dollars. Store that value in a variable named dollarAmount.

// When done, output the value to the browser console.

// For example, if my piggy bank only held those pennies from above, when I type the variable name of dolllarAmount into the console, the output would be.

// > dollarAmount
// $3.42



// Cash to Coins

// Now do the reverse. Convert the dollar amount into the coins that make up that dollar amount. The final result is an object with the correct number of quarters, dimes, nickels, and pennies.

const dollarAmount = 0.10
const piggyBank = {}

// Your magic code here



console.log(piggyBank)
// That should produce the following output.

{
  quarters: 0,
  dimes: 1,
  nickels: 0,
  pennies: 0
}