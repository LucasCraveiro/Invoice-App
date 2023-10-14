import MainWrapper from "../components/MainWrapper";
import { useParams } from "react-router-dom";

const InvoiceDetails = () => {
  const { invoiceId } = useParams();

  return (
    <MainWrapper>
      <h1>{`Invoice Details Page ${invoiceId}`}</h1>
    </MainWrapper>
  );
};

export default InvoiceDetails;
