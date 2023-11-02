import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
import AddInvoice from "./pages/AddInvoice";
import InvoiceDetails from "./pages/InvoiceDetails";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "invoiceDetails/:invoiceId",
          element: <InvoiceDetails />,
        },
        {
          path: "addInvoice",
          element: <AddInvoice />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
