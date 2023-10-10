import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import Root from "./pages/Root";
import Home from "./pages/Home";
import ErrorPage from "./pages/Error";
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
          path: "invoiceDetails",
          element: <InvoiceDetails />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
