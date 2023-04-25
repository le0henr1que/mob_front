import React from "react";
import Router from "./router/index";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const apiKey =
    process.env.REACT_APP_ID_CLIENT_GOOGLE_LOGIN ||
    "not-exist client id google login";

  return (
    <GoogleOAuthProvider clientId={apiKey}>
      <Router />
    </GoogleOAuthProvider>
  );
}

export default App;
