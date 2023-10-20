import { Link } from "react-router-dom";
import ArrowBack from "../assets/arrowBack.svg";
import classes from "./ControllerInvoice.module.css";
import { ControllerProps } from "../types";

const ControllerInvoice: React.FC<ControllerProps> = ({ status }) => {
  return (
    <>
      <div className={classes.go_back}>
        <Link to={"/"} className={classes.arrow_link}>
          <img src={ArrowBack} alt="logo" className={classes.arrow} />
          <p className={classes.back}>Go back</p>
        </Link>
      </div>
      <div className={classes.controler}>
        <p className={classes.status}>Status</p>
        <div
          className={
            status === "paid"
              ? classes.box_status_paid
              : classes.box_status_pending
          }
        >
          <div
            className={status === "paid" ? classes.paid : classes.pending}
          ></div>
          {status}
        </div>
        <div className={classes.buttons_wrapper}>
          <button className={classes.edit}>Edit</button>
          <button className={classes.delete}>Delete</button>
          <button className={classes.markPaid}>
            {status === "paid" ? "Mark as Pending" : "Mark as Paid"}
          </button>
        </div>
      </div>
    </>
  );
};

export default ControllerInvoice;
