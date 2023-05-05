import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { NotFound } from "../Pages/NotFound";
import { Login } from "../Pages/Login";
import { Local } from "../Pages/Local";
import { Rating } from "../Pages/Rating";
import { Evaluete } from "../Pages/Evaluate";
import { LocalRegister } from "../Pages/LocalRegister";
import { Register } from "../Pages/User-Register/index";
import { MyRating } from "../Pages/MyRatings";
import { SearchLocal } from "../Pages/SearchLocal";
import { ForgotPassword } from "../Pages/Forgot-Password";
import { Chellenge } from "../Pages/Challenge";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/local" element={<Local />} />
        <Route path="/local/avaliacoes" element={<Rating />} />
        <Route path="/local/avaliar" element={<Evaluete />} />
        <Route path="/local/cadastrar" element={<LocalRegister />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/minhas-avaliacoes" element={<MyRating />} />
        <Route path="/pesquisar-local" element={<SearchLocal />} />
        <Route path="/checkpoint/chellenge-reset" element={<Chellenge />} />

        <Route
          path="/checkpoint/forgot-password"
          element={<ForgotPassword />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
