import classes from "./InvoiceItems.module.css";

type InvoiceItem = {
  itemName: string;
  qty: number;
  price: number;
};

interface InvoiceItemsProps {
  items: InvoiceItem[];
  amount: string;
}

const InvoiceItems: React.FC<InvoiceItemsProps> = ({ items, amount }) => {
  return (
    <div className={classes.invoiceItems}>
      <div className={classes.description}>
        {items.map((item, idx) => (
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
        <h2>{amount}</h2>
      </div>
    </div>
  );
};

export default InvoiceItems;
