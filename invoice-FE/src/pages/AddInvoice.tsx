import MainWrapper from "../components/MainWrapper";
import InvoiceWrapper from "../components/InvoiceWrapper";
import GoBack from "../components/base/GoBack";
import TextInput from "../components/base/TextInput";

const AddInvoice = () => {
  return (
    <MainWrapper>
      <InvoiceWrapper>
        <GoBack />

        <h1>New Invoice</h1>
        <TextInput label="Ok" placeholder="Add your name" />
      </InvoiceWrapper>
    </MainWrapper>
  );
};

export default AddInvoice;
