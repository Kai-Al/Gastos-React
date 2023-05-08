import { useGlobalState } from "../../context/GlobalState";

function TransactionList() {
  const { transactions, deleteTransaction } = useGlobalState();

  return (
    <div>
      <h1>Transaction List</h1>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <h2>{transaction.text}</h2>
          <p>{transaction.amount}</p>
          <button
            onClick={() => {
              deleteTransaction(transaction.id);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default TransactionList;
