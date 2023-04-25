// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Load } from "./index";

export default {
  title: "Load",
  component: Load,
} as ComponentMeta<typeof Load>;

export const Skeleton_circular: ComponentStory<typeof Load> = () => (
  <Load variant="circular" width={210} height={210} />
);

export const Skeleton_rectangular: ComponentStory<typeof Load> = () => (
  <Load variant="rectangular" width={210} height={60} />
);
