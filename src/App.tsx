import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NewExpense from "./pages/expense/NewExpense";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
import ExpenseReports from "./pages/expense/ExpenseReports";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Dashboard></Dashboard>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/new" element={<NewExpense></NewExpense>}></Route>
        <Route path="/view" element={<ExpenseDetails></ExpenseDetails>}></Route>
        <Route
          path="/reports"
          element={<ExpenseReports></ExpenseReports>}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
