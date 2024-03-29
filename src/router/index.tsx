import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../Pages/home";
import { NotFound } from "../Pages/NotFound";
import { Login } from "../Pages/Login";
import { SucessPage } from "../Pages/SucessPage";
import { Rating } from "../Pages/Rating";
import { Evaluete } from "../Pages/Evaluate";
import { LocalRegister } from "../Pages/LocalRegister";
import { Register } from "../Pages/User-Register/index";
import { MyRating } from "../Pages/MyRatings";
import { SearchLocal } from "../Pages/SearchLocal";
import { ForgotPassword } from "../Pages/Forgot-Password";
import { Chellenge } from "../Pages/Challenge";
import { UpdatePassword } from "../Pages/Update-Password";
import { ConfirmEmail } from "../Pages/ConfirmEmail";
import { Terms } from "../Pages/Terms";
import { useAuth } from "../context/AuthContext";
import PrivateRoute from "./privateRoute";
import { ModalProvider } from "../context/ModalContext";

const Router = () => {
  const { authState } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/local/avaliar" element={<Evaluete />} />

        {/* <PrivateRoute
          exact
          path="/local/cadastrar"
          component={LocalRegister}
          authenticated={authState.isAuthenticated}
        /> */}

        {/* <Route path="/local/cadastrar" element={<LocalRegister />} /> */}

        <Route path="/" element={<Home />} />
        <Route
          path="/local/cadastro-local"
          element={<PrivateRoute Component={LocalRegister} />}
        />

        <Route path="/login" element={<Login />} />

        <Route path="/confirmar-email" element={<ConfirmEmail />} />

        <Route path="/local/cadastro-local/success" element={<SucessPage />} />
        <Route path="/local/avaliacoes/:id" element={<Rating />} />
        <Route path="/cadastrar" element={<Register />} />
        <Route path="/minhas-avaliacoes" element={<MyRating />} />
        <Route path="/pesquisar-local" element={<SearchLocal />} />
        <Route path="/checkpoint/chellenge-reset" element={<Chellenge />} />
        <Route path="/termos" element={<Terms />} />
        <Route
          path="/checkpoint/update-password"
          element={<UpdatePassword />}
        />

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
