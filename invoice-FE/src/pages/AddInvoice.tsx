import MainWrapper from "../components/MainWrapper";
import GoBack from "../components/base/GoBack";
import TextInput from "../components/base/TextInput";
import classes from "./AddInvoice.module.css";

const AddInvoice = () => {
  return (
    <MainWrapper>
      <div className={classes.addWrapper}>
        <GoBack />

        <h1 className={classes.topHeader}>New Invoice</h1>
        <div>
          <h3 className={classes.boxHeader}>Bill From</h3>
          <TextInput
            label="Street Address"
            id={"StreetAddress"}
            placeholder="Add your Street"
          />
          <div className={classes.inputs_wrapper}>
            <TextInput label="City" id={"City"} placeholder="Add your city" />
            <TextInput
              label="Postal Code"
              id={"PostalCode"}
              placeholder="Add your Postal code"
            />
            <TextInput
              label="Country"
              id={"Country"}
              placeholder="Add your country"
            />
          </div>
        </div>
        <div>
          <h3 className={classes.boxHeader}>Bill To</h3>
          <TextInput
            label="Client’s Name"
            id="clientName"
            placeholder="Add Client’s Name"
          />
          <TextInput
            label="Client’s Email"
            id="clientEmail"
            placeholder="Add client's email"
          />
          <TextInput
            label="Street Address"
            id="StreetAdressTo"
            placeholder="Add client's street"
          />
          <div className={classes.inputs_wrapper}>
            <TextInput
              label="City"
              id={"CityTo"}
              placeholder="Add client's city"
            />
            <TextInput
              label="Postal Code"
              id={"PostalCodeTo"}
              placeholder="Add client's Postal code"
            />
            <TextInput
              label="Country"
              id={"CountryTo"}
              placeholder="Add client's country"
            />
          </div>
          <div className={classes.inputs_wrapper}>
            <TextInput
              label="Invoice Date"
              id="InvoiceDate"
              placeholder="Add Invoice Date"
            />
            <TextInput
              label="Payment Terms"
              id="PaymentTerms"
              placeholder="Add Payment Terms"
            />
          </div>
          <TextInput
            label="Project Description"
            id="ProjectDescription"
            placeholder="Add your Project Description"
          />
        </div>
      </div>
    </MainWrapper>
  );
};

export default AddInvoice;
