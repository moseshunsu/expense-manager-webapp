import { useEffect, useState } from "react";
import { getExpenses } from "../services/expense-service";
import { Expense } from "../model/Expense";

const useExpenses = () => {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [error, setError] = useState(null);
  const [isLoading, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    getExpenses()
      .then((respose) => setExpenses(respose.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoader(false));
  }, []);
  return { expenses, error, isLoading };
};

export default useExpenses;
