import ExpenseList from "../../components/ExpenseList";
import useExpenses from "../../hooks/useExpenses";
import { Expense } from "../../model/Expense";
import DashboardStatus from "./DashboardStatus";

const Dashboard = () => {
  const currentUser: string = "boroboro01@example.com";

  const { expenses, error, isLoading } = useExpenses();

  const totalExpenses = expenses.reduce(
    (acc: number, expense: Expense) => acc + expense.amount,
    0
  );

  return (
    <div className="container">
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <DashboardStatus
        currentUser={currentUser}
        totalExpenses={totalExpenses}
      ></DashboardStatus>
      <hr></hr>
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default Dashboard;
