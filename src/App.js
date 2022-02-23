import {useState, useEffect} from 'react'

import Header from "./components/Header";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";

function App() {
  const [income, setIncome] = useState([])

  return (
    <div className="App">
      <Header />
      <IncomeForm />
      <IncomeList />
    </div>
  );
}

export default App;
