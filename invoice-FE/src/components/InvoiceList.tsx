import classes from "./InvoiceList.module.css";
import { Link } from "react-router-dom";
import Arrow from "../assets/arrow.svg";
import { InvoiceListProps } from "../types";

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
