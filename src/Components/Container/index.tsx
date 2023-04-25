import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
} from "@material-ui/core";
import { Menu, Close } from "@material-ui/icons";
import { useEffect, useState } from "react";
//@ts-ignore
import LogMob from "../../Assests/Frame142.svg";
import ButtonStyle from "../Button";
import { Input } from "../Input/index";
import { Text } from "../Text";
import "./styles.css";

export function Container(props: any) {
  return (
    <div className="container-main">
      <div className="container">{props.children}</div>
    </div>
  );
}
