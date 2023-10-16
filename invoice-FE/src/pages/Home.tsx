import { useState } from "react";
import { Link } from "react-router-dom";

import MainWrapper from "../components/MainWrapper";
import classes from "./home.module.css";
import Arrow from "../assets/arrow.svg";
import { dataInvoice } from "../utils";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("filter_by_date");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(dataInvoice);

  return (
    <MainWrapper>
      {/* TOP element including Heading and Buttons*/}
      <div className={classes.top_card}>
        <div className={classes.title_card}>
          <h2>Invoices</h2>
          <p>{`There are ${data.length} total invoices`}</p>
        </div>
        <div className={classes.buttons_card}>
          <select
            className={classes.filter}
            autoFocus={false}
            disabled={false}
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
          >
            <option value="filter_by_date">Filter by Date</option>
            <option value="filter_by_status">Filter by Status</option>
            <option value="filter_by_amount">Filter by Amount</option>
            <option value="filter_by_company">Filter by Company</option>
          </select>
          <button className={classes.new_invoice_btn_wrapper}>
            <span className={classes.circle_plus}>+</span>
            <span className={classes.invoice_btn}>New Invoice</span>
          </button>
        </div>
      </div>
      {/* END TOP eleme*/}
      {/* LIST element */}
      <div className={classes.list_parent}>
        {data.map((item) => (
          <div key={item.id} className={classes.list_single}>
            <p className={classes.box_id}>{item.id}</p>
            <p className={classes.box_date}>{item.dueDate}</p>
            <p className={classes.box_company}>{item.company}</p>
            <p className={classes.box_price}>{item.amount}</p>
            <p
              className={
                item.status === "paid"
                  ? classes.box_status_paid
                  : classes.box_status_pending
              }
            >
              <span
                className={
                  item.status === "paid" ? classes.paid : classes.pending
                }
              ></span>
              {item.status}
            </p>
            <Link
              to={`invoiceDetails/${item.id}`}
              className={classes.arrow_link}
            >
              <img src={Arrow} alt="logo" className={classes.arrow} />
            </Link>
          </div>
        ))}
      </div>

      {/* END LIST element */}
    </MainWrapper>
  );
};

export default Home;
