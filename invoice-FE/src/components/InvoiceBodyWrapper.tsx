import classes from "./InvoiceBodyWrapper.module.css";

type InvoiceBodyWrapperProps = {
  children: React.ReactNode;
};
const InvoiceBodyWrapper: React.FC<InvoiceBodyWrapperProps> = ({
  children,
}) => {
  return <div className={classes.invoiceBodyWrapper}>{children}</div>;
};

export default InvoiceBodyWrapper;
