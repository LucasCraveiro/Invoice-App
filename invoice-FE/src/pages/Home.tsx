import { useState } from "react";
import classes from "./home.module.css";

const generateUniqueId = () => {
  return self.crypto.randomUUID().slice(0, 5).toString();
};

const data = [
  {
    id: generateUniqueId(),
    date: "March 14, 2021",
    company: "GitHub",
    amount: "$500",
    status: "paid",
  },
  {
    id: generateUniqueId(),
    date: "February 28, 2021",
    company: "Amazon",
    amount: "$75",
    status: "pending",
  },
  {
    id: generateUniqueId(),
    date: "April 5, 2021",
    company: "Google",
    amount: "$10000",
    status: "paid",
  },
  {
    id: generateUniqueId(),
    date: "May 20, 2021",
    company: "Microsoft",
    amount: "$807",
    status: "pending",
  },
  {
    id: generateUniqueId(),
    date: "June 10, 2021",
    company: "Apple",
    amount: "$11120",
    status: "paid",
  },
  {
    id: generateUniqueId(),
    date: "July 15, 2021",
    company: "Netflix",
    amount: "$70",
    status: "pending",
  },
  {
    id: generateUniqueId(),
    date: "August 25, 2021",
    company: "Facebook",
    amount: "$90",
    status: "paid",
  },
  {
    id: generateUniqueId(),
    date: "September 3, 2021",
    company: "Twitter",
    amount: "$60",
    status: "pending",
  },
  {
    id: generateUniqueId(),
    date: "October 12, 2021",
    company: "LinkedIn",
    amount: "$110",
    status: "paid",
  },
  {
    id: generateUniqueId(),
    date: "November 8, 2021",
    company: "Instagram",
    amount: "$45",
    status: "pending",
  },
];

function Home() {
  const [selectedFilter, setSelectedFilter] = useState("filter_by_date");
  return (
    <div className={classes.main_card}>
      {/* TOP element including Heading and Buttons*/}
      <div className={classes.top_card}>
        <div className={classes.title_card}>
          <h2>Invoices</h2>
          <p>There are 7 total invoices</p>
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
            <p className={classes.box_date}>{item.date}</p>
            <p className={classes.box_company}>{item.company}</p>
            <p className={classes.box_price}>{item.amount}</p>
            <p
              className={
                item.status === "paid"
                  ? classes.box_status_paid
                  : classes.box_status_pending
              }
            >
              <div
                className={
                  item.status === "paid" ? classes.paid : classes.pending
                }
              ></div>
              {item.status}
            </p>
          </div>
        ))}
      </div>

      {/* END LIST element */}
    </div>
  );
}

export default Home;
