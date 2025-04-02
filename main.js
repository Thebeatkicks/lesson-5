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
            getAccountName();
            break
        case 5:
            exitAccount();
            break
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
    //console.log(account.balance)
    alert("You have withdrawn: " + removeMoney + "kr! You now have " + account.balance + "kr, on your account!" );
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

