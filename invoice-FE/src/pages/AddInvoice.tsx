import MainWrapper from "../components/MainWrapper";
import InvoiceWrapper from "../components/InvoiceWrapper";
import GoBack from "../components/base/GoBack";

const AddInvoice = () => {
  return (
    <MainWrapper>
      <InvoiceWrapper>
        <GoBack />

        <h1>New Invoice</h1>
      </InvoiceWrapper>
    </MainWrapper>
  );
};

export default AddInvoice;
