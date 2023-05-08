import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/Transactions/TransactionForm";
import TransactionList from "./components/Transactions/TransactionList";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <TransactionForm />
        <h1>Expense Tracker</h1>
        <TransactionList />
        <h1>React Context API</h1>
      </div>
    </GlobalProvider>
  );
}

export default App;
