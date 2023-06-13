// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CircleLoad } from "./index";

export default {
  title: "Load",
  component: CircleLoad,
} as ComponentMeta<typeof CircleLoad>;

export const Skeleton_circular: ComponentStory<typeof CircleLoad> = () => (
  <CircleLoad />
);
