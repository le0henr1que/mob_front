// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Header } from "./index";

export default {
  title: "Header",
  component: Header,
} as ComponentMeta<typeof Header>;

export const HeaderDetail: ComponentStory<typeof Header> = () => <Header />;
