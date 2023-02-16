import {Transaction, Wallet} from "./types"

 const myWallet: Wallet = {
    enable: true, 
    transactions:[]
}

const myWallet2: Wallet = {
    enable: true, 
    transactions:[]
}

const myWallet3: Wallet = {
    enable: true, 
    transactions:[]
}

function addTransaction(transaction: Transaction, wallet: Wallet){
    wallet.transactions.push(transaction)
}

function printTransactions(wallet: Wallet){
    wallet.transactions.forEach((item) => {
        console.log(`Transação: ${item.description} \n Tipo: ${item.type} \n Valor: R$ ${item.value} \n`);
        
    })
}

function getBalance(wallet: Wallet): number {
    const {transactions} = wallet;
    let saldo = 0;
    
    transactions.forEach((item) => {
        if(item.type === "C"){
            saldo += item.value;
        } else {
            saldo -= item.value;
        }
    })
    
    return saldo
}

addTransaction({description:"Salário", type:"C",value:12000}, myWallet)
addTransaction({description:"Lanche", type:"D", value:100}, myWallet)
addTransaction({description:"PS5", type:"D", value:5000}, myWallet)
addTransaction({description:"Guardar dinheiro", type:"C", value:1000}, myWallet2)


// printTransactions(myWallet)
const saldo = getBalance(myWallet);
console.log(`O saldo da sua carteira é R$ ${saldo}`);


