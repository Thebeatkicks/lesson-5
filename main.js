/*Instructions: 

BANK ACCOUNT 

Since this is a little bit longer assignment, this will be the only assignment that you will get for this week 

 

REQUIREMENTS 

Create an object called account that has the following properties: 

accountName, should be the data type string 

This property should contain the name of the account holder 

 

- balance, should be the data type number 

this property should contain the total amount of the account 

 

 - getBalance, should be a function 

this function should display the total amount of the account to the user 

 

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

function atm() {
    const message = parseFloat(
        prompt(
            "Selectg at choice 1.) See balance 2.) Make a deposit 3.) Make a withdrawal 4.) Get account name 5.) Exit"
        )
    );
    switch (message) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
    }
}

object account


function getBalance() {

}
function deposit() {

}
function withdrawal() {

}
function getAccountName () {

}
function accountError() {

}
function exitAccount() {

}