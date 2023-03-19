import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from "../Pages/home";
import { NotFound } from "../Pages/NotFound";
import { Login } from "../Pages/Login";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;