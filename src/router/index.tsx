import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from "../Pages/home";
import { NotFound } from "../Pages/NotFound";
import { Login } from "../Pages/Login";
import { Local } from "../Pages/Local";
import { Rating } from "../Pages/Rating";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route  path="/login" element={<Login/>} />
          <Route  path="/local" element={<Local/>} />
          <Route  path="/local/rating" element={<Rating/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;