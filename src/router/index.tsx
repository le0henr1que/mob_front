import React from "react";
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Home } from "../Pages/home";
import { NotFound } from "../Pages/NotFound";

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route  path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
    </BrowserRouter>
  );
};

export default Router;