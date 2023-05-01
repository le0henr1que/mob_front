// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import GoogleSignIn from "./index";

export default {
  title: "Button Login wWith Googlee",
  component: GoogleSignIn,
} as ComponentMeta<typeof GoogleSignIn>;

function handleSuccess(tokenResponse: string) {
  console.log(tokenResponse);
}

export const ButtonLogin: ComponentStory<typeof GoogleSignIn> = () => (
  <GoogleSignIn handleLogin={handleSuccess} />
);
