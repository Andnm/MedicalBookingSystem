import React, { useContext } from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom";
import Layout from "~/components/layout/Layout";
import ForgotPassword from "~/pages/Auth/ForgotPassword/ForgotPassword";
import Login from "~/pages/Auth/Login/Login";
import Register from "~/pages/Auth/Register/Register";
import BlogDetail from "~/pages/blog/blogDetail/BlogDetail";
import Blogs from "~/pages/blog/blogList/Blogs";
import Booking from "~/pages/booking/Booking";
import Customer from "~/pages/customer/CustomerLayout";
import DoctorDetail from "~/pages/doctor/doctorDetail/DoctorDetail";
import DoctorList from "~/pages/doctor/doctorList/DoctorList";
import Doctor from "~/pages/doctor/DoctorProfile/Doctor";
import Home from "~/pages/home/Home";
import Specialist from "~/pages/specialist/Specialist";
import AuthContextProvider, { AuthContext } from "../context/authContext";

import "react-toastify/dist/ReactToastify.css";
import CustomerLayout from "~/pages/customer/CustomerLayout";
import UserInfo from "~/components/userInfo/UserInfo";
import AppointmentSchedule from "~/pages/customer/appointmentSchedule/AppointmentSchedule";
import MedicalHistory from "~/pages/customer/medicalHistory/MedicalHistory";
import BlogsSaved from "~/pages/customer/blogsSaved/BlogsSaved";
import Introduction from "~/pages/introduction/Introduction";

export default function UserRouter() {
  const { currentUser } = useContext(AuthContext);
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          {currentUser?.role === "customer" && (
            <Route path="/customer" element={<CustomerLayout />}>
              <Route path="profile" element={<UserInfo />} />
              <Route
                path="upcoming-booking"
                element={<AppointmentSchedule />}
              />
              <Route path="history" element={<MedicalHistory />} />
              <Route path="saved-blog" element={<BlogsSaved />} />
            </Route>
          )}
          {/* doctor */}
          {currentUser?.role === "doctor" && (
            <Route path="/doctor" element={<Doctor />} />
          )}
          <Route path="/intro" element={<Introduction />} />
          <Route path="/doctors" element={<DoctorList />} />
          <Route path="/doctors/:id" element={<DoctorDetail />} />
          <Route path="/specialists/:speId" element={<Specialist />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
        </Route>
        {!currentUser && <Route path="/login" element={<Login />} />}
        {!currentUser && <Route path="/register" element={<Register />} />}
        {!currentUser && (
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        )}
        <Route
          path="*"
          element={
            <>
              <h1>404 Page not found</h1>
              <Link to="/">Trang ch???</Link>
            </>
          }
        />
      </Routes>
    </>
  );
}
