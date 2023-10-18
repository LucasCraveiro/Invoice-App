import classes from "./InvoiceList.module.css";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";

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

interface InvoiceListProps {
  data: InvoiceData;
}

const InvoiceList: React.FC<InvoiceListProps> = ({ data }) => {
  return (
    <div className={classes.list_parent}>
      {data.map((item) => (
        <div key={item.id} className={classes.list_single}>
          <p className={classes.box_id}>{item.id}</p>
          <p className={classes.box_date}>{item.dueDate}</p>
          <p className={classes.box_company}>{item.company}</p>
          <p className={classes.box_price}>{item.amount}</p>
          <p
            className={
              item.status === "paid"
                ? classes.box_status_paid
                : classes.box_status_pending
            }
          >
            <span
              className={
                item.status === "paid" ? classes.paid : classes.pending
              }
            ></span>
            {item.status}
          </p>
          <Link to={`invoiceDetails/${item.id}`} className={classes.arrow_link}>
            <img src={Arrow} alt="logo" className={classes.arrow} />
          </Link>
        </div>
      ))}
    </div>
  );
};

export default InvoiceList;
