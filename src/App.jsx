import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import ProductDetails from "./pages/ProductDetails";
import Layout from "./components/Layout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AdminIncome from "./pages/adminpages/AdminIncome";
import AdminAllCars from "./pages/adminpages/AdminAllCars";
import AdminReview from "./pages/adminpages/AdminReview";
import AdminNavbar from "./components/AdminNavbar";
import AdminCarsSingle from "./pages/adminpages/AdminCarsSingle";
import PageNotFound from "./pages/PageNotFound";
import AdminCarDetails from "./pages/adminpages/adminnested/AdminCarDetails";
import AdminCarPricing from "./pages/adminpages/adminnested/AdminCarPricing";
import AdminCarPhotos from "./pages/adminpages/adminnested/AdminCarPhotos";
import AdminIncomeChart from "./pages/adminpages/adminnested/AdminIncomeChart";

function App() {
  return (
    <div>
      <Routes>
        
        //* Normal Section
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="cars" element={<Product />} />
          <Route path="cars/:id" element={<ProductDetails />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<PageNotFound />} />

          //* Admin Navbar Section
          <Route path="admin" element={<AdminNavbar />}>
            <Route index element={<AdminDashboard />} />
            <Route path="income" element={<AdminIncome />} />
            <Route path="income/:id" element={<AdminIncomeChart />} />
            <Route path="review" element={<AdminReview />} />
            <Route path="allcars" element={<AdminAllCars />} />

            //* Admin Single Cars Section
            <Route path="allcars/:id" element={<AdminCarsSingle />}>
              <Route index element={<AdminCarDetails />} />
              <Route path="pricing" element={<AdminCarPricing />} />
              <Route path="photos" element={<AdminCarPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
