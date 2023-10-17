import classes from "./InvoiceWrapper.module.css";

type InvoiceWrapperProps = {
  children: React.ReactNode;
};
const InvoiceWrapper: React.FC<InvoiceWrapperProps> = ({ children }) => {
  return <div className={classes.invoiceWrapper}>{children}</div>;
};

export default InvoiceWrapper;
