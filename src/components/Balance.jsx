import { useGlobalState } from "../context/GlobalState"

function Balance() {

    const  {transactions}  = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    
    return (
        <div>
            <h1>Balance</h1>
            <h2>${total}</h2>
        </div>
    )
}

export default Balance