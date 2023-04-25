// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Chart } from "./index";

export default {
  title: "Chart",
  component: Chart,
} as ComponentMeta<typeof Chart>;

const data = [4, 7, 9, 5, 10];

export const Charts: ComponentStory<typeof Chart> = () => <Chart data={data} />;
