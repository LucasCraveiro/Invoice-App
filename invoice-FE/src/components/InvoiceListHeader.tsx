import classes from "./InvoiceListHeader.module.css";
import { InvoiceListHeaderProps } from "../types";
import { Link } from "react-router-dom";

const InvoiceListHeader: React.FC<InvoiceListHeaderProps> = ({
  data,
  selectedFilter,
  setSelectedFilter,
}) => {
  return (
    <div className={classes.top_card}>
      <div className={classes.title_card}>
        <h2>Invoices</h2>
        <p>{`There are ${data.length} total invoices`}</p>
      </div>
      <div className={classes.buttons_card}>
        <select
          className={classes.filter}
          autoFocus={false}
          disabled={false}
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
        >
          <option value="filter_by_date">Filter by Date</option>
          <option value="filter_by_status">Filter by Status</option>
          <option value="filter_by_amount">Filter by Amount</option>
          <option value="filter_by_company">Filter by Company</option>
        </select>
        <Link to="/addInvoice" className={classes.new_invoice_btn_wrapper}>
          <span className={classes.circle_plus}>+</span>
          <span className={classes.invoice_btn}>New Invoice</span>
        </Link>
      </div>
    </div>
  );
};

export default InvoiceListHeader;
