"use strict";
const atm = require('./atm')

atm.validatePin()
mainMenu()
function mainMenu() {
  let prompt = require("prompt-sync")();
  console.log("Welcome to devCodeCamp bank! Please enter 1 to check balance, 2 to withdraw from your account or 3 to add funds to your account. Enter 4 at anytime to quit.")
  let menu = parseInt(prompt());
  switch(menu){
    case 1:
      atm.getBalance()
      mainMenu()
    case 2:
      atm.withdraw()
      mainMenu()
    case 3:
      atm.deposit()
      mainMenu()
    case 4:
      console.log("Terminating Application")
      process.exit()
  }
  //Make a deposit
  //Make a withdrawal
  //Quit

}

//TODO: Call mainMenu function to start our app!
