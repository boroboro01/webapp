import { useEffect, useState } from "react";
import { getExpensesByExpenseId } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenseByExpenseId = (expenseId: string) => {
  const [expense, setExpense] = useState<Expense | undefined>();
  const [errors, setErrors] = useState<string>("");
  const [isLoading, setLoader] = useState<boolean>(false);

  useEffect(() => {
    setLoader(true);
    getExpensesByExpenseId(expenseId)
      .then((response) => setExpense(response.data))
      .catch((error) => {
        setErrors(error.message);
        console.log(error);
      })
      .finally(() => setLoader(false));
  }, []);

  return { expense, errors, isLoading, setLoader, setErrors };
};

export default useExpenseByExpenseId;
