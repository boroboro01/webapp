import CurrencyUtils from "../../utils/CurrencyUtils";
import DateUtils from "../../utils/DateUtils";

interface Props {
  currentUser: string;
  totalExpenses: number;
}

const DashboardStatus = ({ currentUser, totalExpenses }: Props) => {
  return (
    <div className="mt-2">
      <div className="text-center">
        <h5 className="mb-4">Total Expenses</h5>
        <h3>
          <span className="badge rounded-pill app-primary-bg-color">
            {CurrencyUtils.formatToUSD(totalExpenses)}
          </span>
        </h3>
      </div>
      <div className="d-flex justify-content-between">
        <div>
          Welcome, <b className="app-primary-color">{currentUser}</b>
        </div>
        <div>{DateUtils.getFormattedDate(new Date())}</div>
      </div>
    </div>
  );
};

export default DashboardStatus;
