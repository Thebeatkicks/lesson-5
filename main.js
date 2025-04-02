const account = {
    accountName: "Henrik Martini",
    balance: 2,
    exit: false,
}

function atm() {
    while (!account.exit) {
        const message = parseFloat(
            prompt(
                "Select a choice\n 1.) See balance\n 2.) Make a deposit\n 3.) Make a withdrawal\n 4.) Get account name\n 5.) Exit\n"
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
    if (removeMoney > account.balance) {
        accountError();
    } else {
        account["balance"] = account.balance - removeMoney;
        alert("You have withdrawn: " + removeMoney + "kr! You now have " + account.balance + "kr, on your account!" );
    }
}

function getAccountName() {
    alert("This account belongs to " + account.accountName + ".")
}
function accountError() {
    alert("You dont have that much money on your account")
}
function exitAccount() {
    
    alert("See you again soon! You are now logged out!")
    account.exit = true; 
}

atm();