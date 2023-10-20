type InvoiceItem = {
  itemName: string;
  qty: number;
  price: number;
};

export type InvoiceData = {
  id: string;
  dueDate: string;
  company: string;
  amount: string;
  status: string;
  type: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
  email: string;
  billTo: string;
  invoiceDate: string;
  items: InvoiceItem[];
}[];

export type InvoiceListProps = {
  data: InvoiceData;
};

export type ControllerProps = {
  status: string;
};

export type InvoiceBodyWrapperProps = {
  children: React.ReactNode;
};

export type InvoiceWrapperProps = {
  children: React.ReactNode;
};

export type MainWrapperProps = {
  children: React.ReactNode;
};

export type InvoiceBodyProps = {
  id: string;
  type: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  invoiceDate: string;
  dueDate: string;
  billTo: string;
  email: string;
};

export type InvoiceItemsProps = {
  items: InvoiceItem[];
  amount: string;
};

export type InvoiceListHeaderProps = {
  data: InvoiceData;
  selectedFilter: string;
  setSelectedFilter: (value: string) => void;
};
