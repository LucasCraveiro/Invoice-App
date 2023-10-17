import MainWrapper from "../components/MainWrapper";
import { useParams } from "react-router-dom";
import { dataInvoice } from "../utils";
import ControllerInvoice from "../components/ControllerInvoice";
import InvoiceBody from "../components/InvoiceBody";
import InvoiceWrapper from "../components/InvoiceWrapper";
import InvoiceItems from "../components/InvoiceItems";
import InvoiceBodyWrapper from "../components/InvoiceBodyWrapper";

const InvoiceDetails = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { invoiceId } = useParams();

  return (
    <MainWrapper>
      <InvoiceWrapper>
        <ControllerInvoice status={dataInvoice[0].status} />
        <InvoiceBodyWrapper>
          <InvoiceBody
            id={dataInvoice[0].id}
            type={dataInvoice[0].type}
            street={dataInvoice[0].street}
            country={dataInvoice[0].country}
            city={dataInvoice[0].city}
            postalCode={dataInvoice[0].postalCode}
            email={dataInvoice[0].email}
            invoiceDate={dataInvoice[0].invoiceDate}
            dueDate={dataInvoice[0].dueDate}
            billTo={dataInvoice[0].billTo}
          />
          <InvoiceItems
            items={dataInvoice[0].items}
            amount={dataInvoice[0].amount}
          />
        </InvoiceBodyWrapper>
      </InvoiceWrapper>
    </MainWrapper>
  );
};

export default InvoiceDetails;
