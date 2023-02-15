import {Transaction, Wallet} from "./types"

 const myWallet: Wallet = {
    enable: true, 
    transactions:[]
}

function addTransaction(transaction: Transaction){
    myWallet.transactions.push(transaction)
}

addTransaction({description:"Salário", type:"C",value:12000})
addTransaction({description:"Lanche", type:"D", value:100})
addTransaction({description:"PS5", type:"D", value:5000})

console.log(myWallet)