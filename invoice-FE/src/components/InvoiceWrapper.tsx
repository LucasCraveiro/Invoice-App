import classes from "./InvoiceWrapper.module.css";
import { InvoiceWrapperProps } from "../types";

const InvoiceWrapper: React.FC<InvoiceWrapperProps> = ({ children }) => {
  return <div className={classes.invoiceWrapper}>{children}</div>;
};

export default InvoiceWrapper;
