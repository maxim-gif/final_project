import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Auth } from "./pages/auth/auth";
import { Main } from "./pages/main/main";
import { Reg } from "./pages/reg/reg";
import { Profile } from "./pages/profile/profile";

export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Main />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </BrowserRouter>
  );
};