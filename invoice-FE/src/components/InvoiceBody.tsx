import classes from "./InvoiceBody.module.css";

interface InvoiceBodyProps {
  id: string;
  type: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  invoiceDate: string;
  dueDate: string;
  billTo: string;
  email: string;
}

const InvoiceBody: React.FC<InvoiceBodyProps> = ({
  id,
  type,
  street,
  city,
  postalCode,
  country,
  invoiceDate,
  dueDate,
  billTo,
  email,
}) => {
  return (
    <div className={classes.invoiceBody}>
      <div className={classes.invoiceHeader}>
        <div className="id_type_box">
          <h3>{`#${id}`}</h3>
          <p>{type}</p>
        </div>
        <div className={classes.address}>
          <p>{street}</p>
          <p>{city}</p>
          <p>{postalCode}</p>
          <p>{country}</p>
        </div>
      </div>
      <div className={classes.invoiceContent}>
        <div>
          <p>Invoice Date</p>
          <h3>{invoiceDate}</h3>
        </div>
        <div>
          <p>Payment Due</p>
          <h3>{dueDate}</h3>
        </div>
        <div>
          <p>Bill To</p>
          <h3>{billTo}</h3>
        </div>
        <div>
          <p>Sent to</p>
          <h3>{email}</h3>
        </div>
      </div>
    </div>
  );
};

export default InvoiceBody;
