import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";
import IncomeExpenses from "./components/IncomeExpenses";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <IncomeExpenses />
        <Balance />
        <TransactionForm />
        <h1>Expense Tracker</h1>
        <TransactionList />
      </div>
    </GlobalProvider>
  );
}

export default App;
