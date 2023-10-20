import React from "react";
import ReactDOM from "react-dom/client";
//import App from './Login.tsx'
import "./index.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./forms/Login.tsx";
import Client from "./forms/Client.tsx";
import Admin from "./forms/Admin.tsx";
import CallCentre from "./forms/CallCentre.tsx";
import Technician from "./forms/Technician.tsx";
import ErrorPage from "./forms/ErrorPage.tsx";
import Register from "./forms/Register.tsx";
import SendBirdCall from 'sendbird-calls';

SendBirdCall.init("70CEB67E-E54D-457B-877E-2E15B19784EA");
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/client" element={<Client />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/callcentre" element={<CallCentre />} />
        <Route path="/technician" element={<Technician />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
