import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: `/detail-page/:name`,
    element: <CountryDetailPage />,
  },
]);

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
