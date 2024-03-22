import { useState } from "react";
import MainWrapper from "../components/MainWrapper";
import GoBack from "../components/base/GoBack";
import TextInput from "../components/base/TextInput";
import classes from "./AddInvoice.module.css";
import { generateUniqueId } from "../utils";

const AddInvoice = () => {
  const [invoiceData, setInvoiceData] = useState({
    id: generateUniqueId(),
    dueDate: "",
    company: "",
    amount: "",
    status: "",
    type: "",
    street: "",
    city: "",
    country: "",
    postalCode: "",
    email: "",
    billTo: "",
    invoiceDate: "",
    payTerms: "",
    items: [
      { itemName: "", qty: 0, price: 0 },
      { itemName: "", qty: 0, price: 0 },
    ],
  });

  const handleInputChange = (field: string, value: string | number) => {
    setInvoiceData({ ...invoiceData, [field]: value });
  };

  const postInvoice = () => {
    console.log("Added");
  };

  return (
    <MainWrapper>
      <div className={classes.addWrapper}>
        <GoBack />

        <h1 className={classes.topHeader}>New Invoice</h1>

        <h3 className={classes.boxHeader}>Bill From</h3>
        <form action="">
          <TextInput
            label="Street Address"
            id={"StreetAddress"}
            placeholder="Add your Street"
            value={invoiceData.street}
            onChange={(e) => handleInputChange("street", e.target.value)}
          />
          <div className={classes.inputs_wrapper}>
            <TextInput
              label="City"
              id={"City"}
              placeholder="Add your city"
              value={invoiceData.city}
              onChange={(e) => handleInputChange("city", e.target.value)}
            />
            <TextInput
              label="Postal Code"
              id={"PostalCode"}
              placeholder="Add your Postal code"
              value={invoiceData.postalCode}
              onChange={(e) => handleInputChange("postalCode", e.target.value)}
            />
            <TextInput
              label="Country"
              id={"Country"}
              placeholder="Add your country"
              value={invoiceData.country}
              onChange={(e) => handleInputChange("country", e.target.value)}
            />
          </div>
          <div>
            <h3 className={classes.boxHeader}>Bill To</h3>
            <TextInput
              label="Client’s Name"
              id="clientName"
              placeholder="Add Client’s Name"
              value={invoiceData.company}
              onChange={(e) => handleInputChange("company", e.target.value)}
            />
            <TextInput
              label="Client’s Email"
              id="clientEmail"
              placeholder="Add client's email"
              value={invoiceData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
            />
            <TextInput
              label="Street Address"
              id="StreetAdressTo"
              placeholder="Add client's street"
              value={invoiceData.street}
              onChange={(e) => handleInputChange("street", e.target.value)}
            />
            <div className={classes.inputs_wrapper}>
              <TextInput
                label="City"
                id={"CityTo"}
                placeholder="Add client's city"
                value={invoiceData.city}
                onChange={(e) => handleInputChange("city", e.target.value)}
              />
              <TextInput
                label="Postal Code"
                id={"PostalCodeTo"}
                placeholder="Add client's Postal code"
                value={invoiceData.postalCode}
                onChange={(e) =>
                  handleInputChange("postalCode", e.target.value)
                }
              />
              <TextInput
                label="Country"
                id={"CountryTo"}
                placeholder="Add client's country"
                value={invoiceData.country}
                onChange={(e) => handleInputChange("country", e.target.value)}
              />
            </div>
            <div className={classes.inputs_wrapper}>
              <TextInput
                label="Invoice Date"
                id="InvoiceDate"
                placeholder="Add Invoice Date"
                value={invoiceData.dueDate}
                onChange={(e) => handleInputChange("dueData", e.target.value)}
              />
              <TextInput
                label="Payment Terms"
                id="PaymentTerms"
                placeholder="Add Payment Terms"
                value={invoiceData.payTerms}
                onChange={(e) => handleInputChange("payTerms", e.target.value)}
              />
            </div>
            <TextInput
              label="Project Description"
              id="ProjectDescription"
              placeholder="Add your Project Description"
              value={invoiceData.type}
              onChange={(e) => handleInputChange("type", e.target.value)}
            />
          </div>
          <button onSubmit={postInvoice}>Add</button>
        </form>
      </div>
    </MainWrapper>
  );
};

export default AddInvoice;
