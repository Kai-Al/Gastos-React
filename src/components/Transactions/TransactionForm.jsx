import { useState } from "react";
import { useGlobalState } from "../../context/GlobalState";

function TransactionForm() {
  const [Description, setDescription] = useState();
  const [Amount, setAmount] = useState();
  const { addTransaction } = useGlobalState();

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(Description, Amount);
    const newTransaction = {
      id: window.crypto.randomUUID(),
      text: Description,
      amount: +Amount,
    };
    addTransaction(newTransaction);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">
          <i className="bi bi-plus-square"></i>
        </button>
      </form>
    </div>
  );
}

export default TransactionForm;
