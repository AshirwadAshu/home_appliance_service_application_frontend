import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import TechnicianDashboard from "../Pages/Dashboards/TechnicianDashboard/TechnicianDashboard";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import PricingPage from "../Pages/PricingPage/PricingPage";
import AboutUs from "../Pages/AboutPage/AboutUs";
import CustLogin from "../Pages/Login/Customer/CustLogin";
import CustRegister from "../Pages/Login/Customer/CustRegister";
import ServicePage from "../Pages/ServicesPage/ServicesPage";
import UserSelection from "../Pages/Login/UserSelection/UserSelection";
import TechnicianLogin from "../Pages/Login/Technician/TechnicianLogin";
import CustomerDashboard from "../Pages/Dashboards/CustomerDashboard/CustomerDashboard";
import HomePage from "../Pages/HomePage/HomePage";
import TechnicianRegistration from "../Pages/Login/Technician/TechnicianRegistration";
import AdminLogin from "../Pages/Login/Admin/AdminLogin";

export default function MainRouter() {
  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route
              path="techregistration"
              element={<TechnicianRegistration />}
            />
            <Route path="custdashboard" element={<CustomerDashboard />} />
            <Route path="services" element={<ServicePage />} />
            <Route path="plans" element={<PricingPage />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="login" element={<CustLogin />} />
            <Route path="custregister" element={<CustRegister />} />
            <Route path="userselection" element={<UserSelection />} />
            <Route path="custlogin" element={<CustLogin />} />
            <Route path="techlogin" element={<TechnicianLogin />} />
            <Route path="*" element={<PageNotFound />} />
            <Route path="techdashboard" element={<TechnicianDashboard />} />
            <Route path="adminlogin" element={<AdminLogin />} />
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}
