const generateUniqueId = () => {
  return self.crypto.randomUUID().slice(0, 5).toString();
};

export const data = [
  {
    id: generateUniqueId(),
    dueDate: "March 14, 2021",
    company: "GitHub",
    amount: "$500",
    status: "paid",
    type: "Graphic Design",
    street: "19 Union Terrace",
    city: "London",
    country: "United Kingdom",
    postalCode: "W1D 2HT",
    email: "alexgrim@mail.com",
    billTo: "Alex Grim",
    invoiceDate: "March 14, 2021",
    items: [
      { itemName: "Banner Design", qty: 2, price: "150" },
      { itemName: "Email Design", qty: 1, price: "350" },
    ],
  },
  {
    id: generateUniqueId(),
    dueDate: "February 28, 2021",
    company: "Amazon",
    amount: "$75",
    status: "pending",
    type: "E-commerce",
    street: "123 Market Street",
    city: "Seattle",
    country: "USA",
    postalCode: "98101",
    email: "customer@email.com",
    billTo: "Customer Name",
    invoiceDate: "February 28, 2021",
    items: [
      { itemName: "Product A", qty: 1, price: "50" },
      { itemName: "Product B", qty: 2, price: "25" },
    ],
  },
  {
    id: generateUniqueId(),
    dueDate: "April 5, 2021",
    company: "Google",
    amount: "$10000",
    status: "paid",
    type: "Advertising Services",
    street: "123 Ad Avenue",
    city: "Mountain View",
    country: "USA",
    postalCode: "94043",
    email: "advertiser@email.com",
    billTo: "Ad Company",
    invoiceDate: "April 5, 2021",
    items: [{ itemName: "Ad Campaign", qty: 1, price: "10000" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "May 20, 2021",
    company: "Microsoft",
    amount: "$807",
    status: "pending",
    type: "Software Licensing",
    street: "456 Software Street",
    city: "Redmond",
    country: "USA",
    postalCode: "98052",
    email: "licensing@email.com",
    billTo: "Licensing Company",
    invoiceDate: "May 20, 2021",
    items: [{ itemName: "Windows License", qty: 1, price: "807" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "June 10, 2021",
    company: "Apple",
    amount: "$11120",
    status: "paid",
    type: "Hardware Sales",
    street: "789 Apple Road",
    city: "Cupertino",
    country: "USA",
    postalCode: "95014",
    email: "sales@email.com",
    billTo: "Customer Name",
    invoiceDate: "June 10, 2021",
    items: [
      { itemName: "iPhone", qty: 2, price: "5500" },
      { itemName: "MacBook", qty: 1, price: "5620" },
    ],
  },
  {
    id: generateUniqueId(),
    dueDate: "July 15, 2021",
    company: "Netflix",
    amount: "$70",
    status: "pending",
    type: "Subscription",
    street: "321 Stream Street",
    city: "Los Gatos",
    country: "USA",
    postalCode: "95032",
    email: "subscriber@email.com",
    billTo: "Subscriber Name",
    invoiceDate: "July 15, 2021",
    items: [{ itemName: "Monthly Subscription", qty: 1, price: "70" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "August 25, 2021",
    company: "Facebook",
    amount: "$90",
    status: "paid",
    type: "Advertising Services",
    street: "456 Social Media Avenue",
    city: "Menlo Park",
    country: "USA",
    postalCode: "94025",
    email: "advertiser@email.com",
    billTo: "Ad Company",
    invoiceDate: "August 25, 2021",
    items: [{ itemName: "Ad Campaign", qty: 1, price: "90" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "September 3, 2021",
    company: "Twitter",
    amount: "$60",
    status: "pending",
    type: "Promoted Tweets",
    street: "789 Tweet Avenue",
    city: "San Francisco",
    country: "USA",
    postalCode: "94103",
    email: "advertiser@email.com",
    billTo: "Ad Company",
    invoiceDate: "September 3, 2021",
    items: [{ itemName: "Promoted Tweets", qty: 1, price: "60" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "October 12, 2021",
    company: "LinkedIn",
    amount: "$110",
    status: "paid",
    type: "Professional Network Services",
    street: "123 Connection Street",
    city: "Sunnyvale",
    country: "USA",
    postalCode: "94089",
    email: "network@email.com",
    billTo: "Network Company",
    invoiceDate: "October 12, 2021",
    items: [{ itemName: "Professional Subscription", qty: 1, price: "110" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "November 8, 2021",
    company: "Instagram",
    amount: "$45",
    status: "pending",
    type: "Social Media Promotion",
    street: "456 Photo Street",
    city: "Menlo Park",
    country: "USA",
    postalCode: "94025",
    email: "advertiser@email.com",
    billTo: "Ad Company",
    invoiceDate: "November 8, 2021",
    items: [{ itemName: "Promotion Package", qty: 1, price: "45" }],
  },
  {
    id: generateUniqueId(),
    dueDate: "December 15, 2021",
    company: "Twitter",
    amount: "$80",
    status: "paid",
    type: "Social Media Management",
    street: "25 Park Avenue",
    city: "New York",
    country: "USA",
    postalCode: "10001",
    email: "johnsmith@mail.com",
    billTo: "John Smith",
    invoiceDate: "December 15, 2021",
    items: [
      { itemName: "Social Media Posts", qty: 5, price: "10" },
      { itemName: "Analytics Report", qty: 1, price: "30" },
    ],
  },
];
