import MainWrapper from "../components/MainWrapper";
import classes from "./InvoiceDetails.module.css";
import { useParams } from "react-router-dom";
import { dataInvoice } from "../utils";
import { Link } from "react-router-dom";
import ArrowBack from "../assets/arrowBack.svg";

const InvoiceDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { invoiceId } = useParams();

  return (
    <MainWrapper>
      <div className={classes.invoiceWrapper}>
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
              dataInvoice[0].status === "paid"
                ? classes.box_status_paid
                : classes.box_status_pending
            }
          >
            <div
              className={
                dataInvoice[0].status === "paid"
                  ? classes.paid
                  : classes.pending
              }
            ></div>
            {dataInvoice[0].status}
          </div>
          <div className={classes.buttons_wrapper}>
            <button className={classes.edit}>Edit</button>
            <button className={classes.delete}>Delete</button>
            <button className={classes.markPaid}>
              {dataInvoice[0].status === "paid"
                ? "Mark as Pending"
                : "Mark as Paid"}
            </button>
          </div>
        </div>
        <div className={classes.invoiceBody}>
          <div className={classes.invoiceHeader}>
            <div className="id_type_box">
              <h3>{`#${dataInvoice[0].id}`}</h3>
              <p>{dataInvoice[0].type}</p>
            </div>
            <div className={classes.address}>
              <p>{dataInvoice[0].street}</p>
              <p>{dataInvoice[0].city}</p>
              <p>{dataInvoice[0].postalCode}</p>
              <p>{dataInvoice[0].country}</p>
            </div>
          </div>
          <div className={classes.invoiceContent}>
            <div>
              <p>Invoice Date</p>
              <h3>{dataInvoice[0].invoiceDate}</h3>
            </div>
            <div>
              <p>Payment Due</p>
              <h3>{dataInvoice[0].dueDate}</h3>
            </div>
            <div>
              <p>Bill To</p>
              <h3>{dataInvoice[0].billTo}</h3>
            </div>
            <div>
              <p>Sent to</p>
              <h3>{dataInvoice[0].email}</h3>
            </div>
          </div>
          <div className={classes.invoiceItems}>
            <div className={classes.description}>
              {dataInvoice[0].items.map((item, idx) => (
                <div className={classes.item_desc}>
                  <div className={classes.item_inside_wrapper}>
                    {idx === 0 && <h5>Item Name</h5>}
                    <p className={classes.item_name_desc}>{item.itemName}</p>
                  </div>
                  <div className={classes.item_inside_wrapper}>
                    {idx === 0 && <h5>QTY.</h5>}
                    <p>{item.qty}</p>
                  </div>
                  <div className={classes.item_inside_wrapper}>
                    {idx === 0 && <h5>Price per item</h5>}
                    <p>{`$ ${item.price}`}</p>
                  </div>
                  <div className={classes.item_inside_wrapper}>
                    {idx === 0 && <h5>Total</h5>}
                    <p className={classes.item_total}>
                      {`$ ${(item.qty * item.price).toFixed(2)}`}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.total}>
              <h5>Amount Due</h5>
              <h2>{dataInvoice[0].amount}</h2>
            </div>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default InvoiceDetails;
