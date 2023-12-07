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
            id={"Street Address"}
            placeholder="Add your name"
          />
          <div className={classes.inputs_wrapper}>
            <TextInput label="City" placeholder="Add your name" />
            <TextInput label="Postal Code" placeholder="Add your name" />
            <TextInput label="Country" placeholder="Add your name" />
          </div>
        </div>
        <div>
          <h3 className={classes.boxHeader}>Bill To</h3>
          <TextInput label="Street Address" placeholder="Add your name" />
          <TextInput label="Street Address" placeholder="Add your name" />
          <TextInput label="Street Address" placeholder="Add your name" />
          <div className={classes.inputs_wrapper}>
            <TextInput label="City" placeholder="Add your name" />
            <TextInput label="Postal Code" placeholder="Add your name" />
            <TextInput label="Country" placeholder="Add your name" />
          </div>
          <div className={classes.inputs_wrapper}>
            <TextInput label="City" placeholder="Add your name" />
            <TextInput label="Postal Code" placeholder="Add your name" />
          </div>
          <TextInput label="Street Address" placeholder="Add your name" />
        </div>
      </div>
    </MainWrapper>
  );
};

export default AddInvoice;
