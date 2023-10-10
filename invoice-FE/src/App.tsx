import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import ErrorPage from "./pages/Error";
import InvoiceDetails from "./pages/InvoiceDetails";
import Home from "./pages/Home";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
      // children: [
      //   {
      //     path: "invoiceDetails",
      //     element: <InvoiceDetails />,
      //   },
      // ],
    },
    {
      path: "/invoiceDetails",
      element: <InvoiceDetails />,
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
