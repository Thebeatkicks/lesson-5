

const account = {
    accountName: "Henrik Martini",
    balance: 2,
}

function atm() {
    const message = parseFloat(
        prompt(
            "Select a choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );
    switch (message) {
        case 1:
            getBalance();
            break
        case 2:
            deposit();
            break
        case 3:
            withdrawal();
            break
        case 4:
            getAccountName()
            break
        case 5:
    }
}

 function getBalance() {
    alert("You have: " + account.balance + "kr, on your account.");
}

function deposit() {
    let addMoney = parseFloat(prompt("How much would you like to add to your account?"))
    account["balance"] = account.balance + addMoney;
    alert("You have added: " + addMoney + "kr! You now have " + account.balance + "kr, on your account!" );
}

function withdrawal() {
    let removeMoney = parseFloat(prompt("How much would you like to withdraw from your account?"))
    account["balance"] = account.balance - removeMoney;
    console.log(account.balance)
    //alert("You have withdrawn: " + removeMoney + "kr! You now have " + account.balance + "kr, on your account!" );
}

function getAccountName() {
    alert("This account belongs to " + account.accountName + ".")
}
function accountError() {

}
function exitAccount() {
    alert("See you again soon! You are now logged out!")
}


atm();

/*
 - deposit, also a function 

 this function should be able to deposit money onto the balance of the account 

 

 - withdrawal, also a function 

 this function should be able do withdraw money from the balance of the account 

 

 - getAccountName, function as well 

 this function should display the account holders name to the user 


 - accountError, same as above function! 


 this one is a bit tricky... it's up to you to figure out how or what you should use this for. 

HINT: it's more a thinking poblem than a technical problem :) 

 

EXTRA: exitAccount, should be a function 

this function should exit the account 

HINT: there are a few different ways to do this, it's up to you which way you choose. 


EXTRA = OPTIONAL NOT MANDATORY 

 

Remember that a function is just a value. And if a function is just a 

value then we can both pass it as a parameter to a function and 

pass it as a property of an object. 

 

The object should handle all of the functionality (logic) 

 

The atm() function should be responsible for showing the user interface 

and based on the user input show the right meny choice 

I have created some starting code for you: 

En bild som visar skärmbild, text

Automatiskt genererad beskrivning 

 */

/*
1. create an object
2. prompt questions to give data to the object
3. when all questions are answered prompt atm function
4. code all atm choises
4. add an error? if removeMoney > account.balance, return to atm()

switch/case

*/