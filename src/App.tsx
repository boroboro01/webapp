import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/dashboard/Dashboard";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import NewExpense from "./pages/expense/NewExpense";
import ExpenseDetails from "./pages/expense/ExpenseDetails";
import ExpenseReports from "./pages/expense/ExpenseReports";
import { useAuthContext } from "./hooks/useAuthContext";

const App = () => {
  const { isAuthenticated } = useAuthContext();
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route
          path="/login"
          element={!isAuthenticated ? <Login></Login> : <Navigate to="/" />}
        ></Route>
        <Route
          path="/register"
          element={
            !isAuthenticated ? <Register></Register> : <Navigate to="/" />
          }
        ></Route>
        <Route
          path="/"
          element={
            isAuthenticated ? <Dashboard></Dashboard> : <Navigate to="/login" />
          }
        ></Route>
        <Route
          path="/new"
          element={
            isAuthenticated ? (
              <NewExpense></NewExpense>
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/view/:expenseId"
          element={
            isAuthenticated ? (
              <ExpenseDetails></ExpenseDetails>
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/edit/:expenseId"
          element={
            isAuthenticated ? (
              <NewExpense></NewExpense>
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
        <Route
          path="/reports"
          element={
            isAuthenticated ? (
              <ExpenseReports></ExpenseReports>
            ) : (
              <Navigate to="/login" />
            )
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
