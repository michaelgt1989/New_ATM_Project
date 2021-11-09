"use strict";

const account = require('./account')
let prompt = require("prompt-sync")();

function getBalance() {
  console.log("Your current balance is $" + account.balance)
}

function withdraw(){
  let withdrawalAmount = parseInt(prompt("Please enter the amount of money you'd like to withdraw"))
  if(isNaN(withdrawalAmount)){
    console.log("Please enter a value")
    withdraw()
}
else if(withdrawalAmount <= account.balance) {
    account.balance = account.balance - withdrawalAmount
    console.log("Issuing $" + withdrawalAmount + " New Account Balance is $" + account.balance)
}
else{
  console.log("Enter A Ammount Less than $" + account.balance)
  withdraw()
}
}


function deposit(){
  let depositAmount = parseInt(prompt("please enter the amount of money you'd like to deposit"));
  if(isNaN(depositAmount)){
      console.log("Please enter a value")
      deposit()
  }
  else
  {
  account.balance = account.balance + depositAmount
  console.log("We Deposited $" + depositAmount + " Your New Account Balance is $" + account.balance)
  }
}

function validatePin() {
  let prompt = require("prompt-sync")();
  let userPin = parseInt(prompt("Please enter your pin"));
  if(userPin === account.pin){
    console.log("Pin Entered Correctly")
  }
  else{
    console.log("Incorrect Pin. Please try Again");
    validatePin()
  }
}


//TODO: Export these functions

module.exports.getBalance = getBalance;
module.exports.withdraw = withdraw;
module.exports.deposit = deposit;
module.exports.validatePin = validatePin;

