import { useState } from "react";

import MainWrapper from "../components/MainWrapper";
import { dataInvoice } from "../utils";
import InvoiceListHeader from "../components/InvoiceListHeader";
import InvoiceList from "../components/InvoiceList";

const Home = () => {
  const [selectedFilter, setSelectedFilter] = useState("filter_by_date");
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [data, setData] = useState(dataInvoice);

  return (
    <MainWrapper>
      <InvoiceListHeader
        data={data}
        selectedFilter={selectedFilter}
        setSelectedFilter={setSelectedFilter}
      />
      <InvoiceList data={data} />
    </MainWrapper>
  );
};

export default Home;
