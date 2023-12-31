import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Auth } from "./pages/auth/auth";
import { Main } from "./pages/main/main";
import { Reg } from "./pages/reg/reg";
import { Profile } from "./pages/profile/profile";
import { ProfileSeller } from "./pages/profileSeller/profileSeller";
import { Product } from "./pages/product/product";

export const AppRoutes = () => {
  
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={<Main />} />
        <Route path="/reg" element={<Reg />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/profileSeller" element={<ProfileSeller />} />
        <Route path="/product" element={<Product />} />

      </Routes>
    </BrowserRouter>
  );
};