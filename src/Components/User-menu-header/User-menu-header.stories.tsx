// Button.stories.ts|tsx

import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import UserMenu from "./index";
import { MenuItem } from "@material-ui/core";

export default {
  title: "User Menu Header",
  component: UserMenu,
} as ComponentMeta<typeof UserMenu>;

export const MenuUserHeader: ComponentStory<typeof UserMenu> = () => (
  <UserMenu userName="Leonardo Henrique">
    <MenuItem onClick={() => alert("Sucesso")}>Profile</MenuItem>
    <MenuItem onClick={() => alert("Sucesso")}>My account</MenuItem>
    <MenuItem onClick={() => alert("Sucesso")}>Logout</MenuItem>
  </UserMenu>
);
