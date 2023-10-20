import classes from "./InvoiceBodyWrapper.module.css";
import { InvoiceBodyWrapperProps } from "../types";

const InvoiceBodyWrapper: React.FC<InvoiceBodyWrapperProps> = ({
  children,
}) => {
  return <div className={classes.invoiceBodyWrapper}>{children}</div>;
};

export default InvoiceBodyWrapper;
