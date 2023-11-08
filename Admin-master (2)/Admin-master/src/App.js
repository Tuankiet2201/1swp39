import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Login from "./pages/Login";
import Resetpassword from "./pages/Resetpassword";
import Forgotpassword from "./pages/Forgotpassword";
import MainLayout from "./components/MainLayout";
import Enquiries from "./pages/Enquiries";
import StaffList from "./pages/StaffList";
import Blogcatlist from "./pages/Blogcatlist";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Colorlist from "./pages/Colotlist";
import Categorylist from "./pages/Categorylist";
import Brandlist from "./pages/Brandlist";
import Productlist from "./pages/Productlist";
import Addblog from "./pages/Addblog";
import Addblogcat from "./pages/Addblogcat";
import Addcolor from "./pages/Addcolor";
import Addcat from "./pages/Addcat";
import Addbrand from "./pages/Addbrand";
import Addproduct from "./pages/Addproduct";
import Couponlist from "./pages/Couponlist";
import AddCoupon from "./pages/AddCoupon";
import ViewEnq from "./pages/ViewEnq";
import ViewOrder from "./pages/ViewOrder";
import AppRoutes from "./routes/appRoutes";
import Updateproduct from "./pages/UpdateProduct";
import AddCategory from "./pages/AddCategory";
import UpdateCategory from "./pages/UpdateCategory";
import UpdateStore from "./pages/UpdateStore";
import AddStore from "./pages/AddStore";
import AddUser from "./pages/AddUser";
import CategoryDetail from "./pages/CategoryDetail";
import ProductDetail from "./pages/ProductDetail";
import StoreDetail from "./pages/StoreDetail";
import HomePage from "./user-page/HomePage";
import ContactPage from "./user-page/ContactPage";
import AboutPage from "./user-page/AboutPage";
import ServicePage from "./user-page/ServicePage";
import StorePage from "./user-page/StorePage";
import AddStaff from "./pages/AddStaff";
import UpdateUser from "./pages/UpdateUser";
import Cookies from "js-cookie";
import UserDetail from "./pages/UserDetail";
import StaffDetail from "./pages/StaffDetail";
import UpdateStaff from "./pages/UpdateStaff";
import ProductPage from "./user-page/ProductPage";
import Checkout from "./user-page/Checkout";
import Logout from "./components/Logout";
import Register from "./user-page/Register";
import UserLayout from "./components/UserLayout";
import UpdateOrder from "./pages/UpdateOrder";
import OrderDetail from "./pages/OrderDetail";
import QRCode from "./components/QRCode";


// Get a cookie
const id = Cookies.get("id");
const role = Cookies.get("role");
console.log(id);
console.log(role);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
        <Route path="/register" element={<Register />} />
        <Route path="/qr-code" element={<QRCode />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/*" element={<Login />} />
        {role === "User" ? (
          <Route >
            <Route path="/home" element={<HomePage />}/>
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/store" element={<StorePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/*" element={<HomePage />} />
          </Route>
        ) : null}
        {role === "Admin" ? (
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="enquiries" element={<Enquiries />} />
            <Route path="enquiries/:id" element={<ViewEnq />} />
            <Route path="list-staff" element={<StaffList />} />
            <Route path="add-staff" element={<AddStaff />} />
            <Route path="coupon-list" element={<Couponlist />} />
            <Route path="coupon" element={<AddCoupon />} />
            <Route path="coupon/:id" element={<AddCoupon />} />
            <Route path="blog-category-list" element={<Blogcatlist />} />
            <Route path="blog-category" element={<Addblogcat />} />
            <Route path="blog-category/:id" element={<Addblogcat />} />
            <Route path="orders" element={<Orders />} />
            <Route path="order/:id" element={<ViewOrder />} />
            <Route path="customers" element={<Customers />} />
            <Route path="list-color" element={<Colorlist />} />
            <Route path="color" element={<Addcolor />} />
            <Route path="color/:id" element={<Addcolor />} />
            <Route path="list-category" element={<Categorylist />} />
            <Route path="category" element={<Addcat />} />
            <Route path="category/:id" element={<Addcat />} />
            <Route path="list-brand" element={<Brandlist />} />
            <Route path="brand" element={<Addbrand />} />
            <Route path="brand/:id" element={<Addbrand />} />
            <Route path="list-product" element={<Productlist />} />
            <Route path="add-product" element={<Addproduct />} />
            <Route path="add-store" element={<AddStore />} />
            <Route path="update-product/:id" element={<Updateproduct />} />
            <Route path="add-category" element={<AddCategory />} />
            <Route path="update-store/:id" element={<UpdateStore />} />
            <Route path="update-category/:id" element={<UpdateCategory />} />
            <Route path="add-user" element={<AddUser />} />
            <Route path="update-user/:id" element={<UpdateUser />} />
            <Route path="category-detail/:id" element={<CategoryDetail />} />
            <Route path="product-detail/:id" element={<ProductDetail />} />
            <Route path="store-detail/:id" element={<StoreDetail />} />
            <Route path="user-detail/:id" element={<UserDetail />} />
            <Route path="staff-detail/:id" element={<StaffDetail />} />
            <Route path="update-staff/:id" element={<UpdateStaff />} />
            <Route path="update-order/:id" element={<UpdateOrder />} />
            <Route path="order-detail/:id" element={<OrderDetail />} />
            <Route path="/admin/*" element={<MainLayout />} />
          </Route>
        ) : null}

        {role === "Staff" ? (
          <Route path="/admin" element={<MainLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="orders" element={<Orders />} />
            <Route path="/admin/*" element={<Dashboard />} />
          </Route>
        ) : null}
      </Routes>
    </Router>
  );
}

export default App;