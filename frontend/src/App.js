import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateExpense from "./pages/createExpense";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/addExpense" element={<CreateExpense />} />
      </Routes>
    </div>
  );
}

export default App;
