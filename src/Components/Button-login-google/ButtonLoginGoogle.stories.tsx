// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import GoogleSignIn from "./index";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../../context/AuthContext";

export default {
  title: "Button Login wWith Googlee",
  component: GoogleSignIn,
} as ComponentMeta<typeof GoogleSignIn>;

function handleSuccess(tokenResponse: string) {
  console.log(tokenResponse);
}
const apiKey =
  process.env.REACT_APP_ID_CLIENT_GOOGLE_LOGIN ||
  "not-exist client id google login";

export const ButtonLogin: ComponentStory<typeof GoogleSignIn> = () => (
  <AuthProvider>
    <GoogleOAuthProvider clientId={apiKey}>
      <GoogleSignIn handleLogin={handleSuccess} />
    </GoogleOAuthProvider>
  </AuthProvider>
);
