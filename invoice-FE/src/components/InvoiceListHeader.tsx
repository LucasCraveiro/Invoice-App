import classes from "./InvoiceListHeader.module.css";

type InvoiceItem = {
  itemName: string;
  qty: number;
  price: number;
};

type InvoiceData = {
  id: string;
  dueDate: string;
  company: string;
  amount: string;
  status: string;
  type: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  email: string;
  billTo: string;
  invoiceDate: string;
  items: InvoiceItem[];
}[];

interface InvoiceListHeaderProps {
  data: InvoiceData;
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
}

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
        <button className={classes.new_invoice_btn_wrapper}>
          <span className={classes.circle_plus}>+</span>
          <span className={classes.invoice_btn}>New Invoice</span>
        </button>
      </div>
    </div>
  );
};

export default InvoiceListHeader;
