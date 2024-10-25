import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import CountryDetailPage from "./pages/CountryDetailPage";
import Navbar from "./components/Navbar";
import MainLayout from "./layouts/MainLayout";
import PageNotFound from "./pages/PageNotFound";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<MainLayout />}>
//       <Route index element={<HomePage />} />

//       <Route path="/detail-page/:name" element={<CountryDetailPage />} />
//       <Route path="*" element={<PageNotFound />} />
//     </Route>
//   )
// );

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/detail-page/:name",
        element: <CountryDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <PageNotFound />, // No Navbar for the PageNotFound route
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
