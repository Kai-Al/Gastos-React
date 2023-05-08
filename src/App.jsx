import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header";
import Balance from "./components/Balance";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Balance />
        <TransactionForm />
        <h1>React Context API</h1>
      </div>
    </GlobalProvider>
  );
}

export default App;
