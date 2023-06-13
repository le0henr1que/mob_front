import React from "react";
import Router from "./router/index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext";
import { ModalProvider } from "./context/ModalContext";
function App() {
  const apiKey =
    process.env.REACT_APP_ID_CLIENT_GOOGLE_LOGIN ||
    "not-exist client id google login";

  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={apiKey}>
        <ModalProvider>
          <Router />
        </ModalProvider>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
