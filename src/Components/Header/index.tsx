import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  Popover,
  Button,
  MenuItem,
} from "@material-ui/core";
import { Menu, Close, ExitToApp, BorderColor } from "@material-ui/icons";
import { useEffect, useState } from "react";
import { MenuItemsHeader, UserInterface } from "../../@types";

//@ts-ignore
import LogMob from "../../Assests/Frame142.svg";
import ButtonStyle from "../Button";
import { Input } from "../Input/index";
import { Text } from "../Text";
import "./styles.css";
import { StylesList, MakeStyleDrawer, useStyles } from "./stylesMaterialUI";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import UserMenu from "../User-menu-header";
import Divider from "@mui/material/Divider";
import api from "../../utils/api";
import authService from "../../service/AuthService";

export function Header() {
  const [dataUserMe, setDataUserMe] = useState<UserInterface | any>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userImage, setUserImage] = useState();
  const [isMenuList, setIsMenuList] = useState<MenuItemsHeader[]>([]);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const { authState, logout } = useAuth();

  const classes = useStyles();
  const navigate = useNavigate();

  // const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // api.get("/users/me", )

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;

  var listMenu: MenuItemsHeader[] = [
    { label: "Achar local", href: "/pesquisar-local" },
    { label: "Minhas avaliações", href: "/minhas-avaliacoes" },
    { label: "Sobre o Mob!", href: "/about" },
    { label: "Fazer avaliação", href: "/pesquisar-local" },
  ];

  const handleLogout = async () => {
    await logout();
  };

  // alert(userImage)

  useEffect(() => {
    setIsMenuList(listMenu);

    if (authService.getToken()) {
      api
        .get("/users/me", {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`,
          },
        })
        .then((content) => {
          setDataUserMe(content.data);
          setUserImage(content.data.userMe.picture);
          setIsImageLoaded(true);
        });
    }
  }, []);

  // alert(dataUserMe.userMe.picture)

  function getInitials(name: string): string {
    const spaceIndex = name.indexOf(" ");
    const firstName = name.substring(0, 1);
    const lastName =
      spaceIndex !== -1 ? name.substring(spaceIndex + 1, spaceIndex + 2) : "";
    return firstName.toUpperCase() + lastName.toUpperCase();
  }

  return (
    <div className="container-header">
      <div className="container-header-main">
        <div className="container-margin">
          <img src={LogMob} onClick={() => navigate("/")} />

          <div className="container-menu">
            {isMenuList.map((item) => (
              <a href={item.href} className="link">
                <Text variant="muted font-regular body">{item.label}</Text>
              </a>
            ))}
          </div>

          <div className="container-menu-burguer">
            <Menu
              onClick={toggleDrawer}
              color="inherit"
              style={{ cursor: "pointer" }}
            />
          </div>
          <div className="div-button">
            {authState.isAuthenticated === false ? (
              <>
                <ButtonStyle
                  variant="medium-button"
                  onClick={() => navigate("/login")}
                >
                  Fazer Login
                </ButtonStyle>
                <ButtonStyle
                  variant="medium-button outlined"
                  onClick={() => navigate("/cadastrar")}
                >
                  Cadastrar
                </ButtonStyle>
              </>
            ) : (
              <div className="container-avatar-login">
                <div
                  className="muthed-avatar-header"
                  style={{
                    borderColor: `${
                      dataUserMe && dataUserMe.userMe.picture && "white"
                    }`,
                  }}
                >
                  {dataUserMe && !dataUserMe.userMe.picture ? (
                    getInitials(dataUserMe && dataUserMe.userMe.name)
                  ) : isImageLoaded ? (
                    <img
                      src={dataUserMe.userMe.picture.replace("=s96-c", "")}
                      alt="User avatar"
                    />
                  ) : (
                    <p>Loading image...</p>
                  )}
                </div>

                <UserMenu userName={dataUserMe && dataUserMe.userMe.name}>
                  {/* <MenuItem onClick={() => alert("Sucesso")}>Profile</MenuItem>
                  <MenuItem onClick={() => alert("Sucesso")}>My account</MenuItem> */}
                  <MenuItem onClick={() => alert("Sucesso")}>
                    Configuração
                  </MenuItem>
                  <Divider sx={{ my: 0.2 }} />
                  <MenuItem onClick={() => handleLogout()} disableRipple>
                    <ExitToApp />
                    Sair
                  </MenuItem>
                </UserMenu>
              </div>
            )}
            <Drawer
              anchor="left"
              open={isDrawerOpen}
              onClose={toggleDrawer}
              classes={{ paper: classes.drawer }}
            >
              <List style={StylesList}>
                <div className="top-sidebar">
                  <img src={LogMob} onClick={() => navigate("/")} />
                  <Close onClick={toggleDrawer} style={{ cursor: "pointer" }} />
                </div>
                <div className="div-button-sidebar">
                  {authState.isAuthenticated === false ? (
                    <>
                      <ButtonStyle
                        variant="medium-button"
                        onClick={() => navigate("/login")}
                      >
                        Fazer Login
                      </ButtonStyle>
                      <ButtonStyle
                        variant="medium-button outlined"
                        onClick={() => navigate("/cadastrar")}
                      >
                        Cadastrar
                      </ButtonStyle>
                    </>
                  ) : (
                    <div className="container-avatar-login">
                      <div
                        className="muthed-avatar-header"
                        style={{
                          borderColor: `${
                            dataUserMe && dataUserMe.userMe.picture && "white"
                          }`,
                        }}
                      >
                        {dataUserMe && !dataUserMe.userMe.picture ? (
                          getInitials(dataUserMe && dataUserMe.userMe.name)
                        ) : isImageLoaded ? (
                          <img
                            src={dataUserMe.userMe.picture.replace(
                              "=s96-c",
                              ""
                            )}
                            alt="User avatar"
                          />
                        ) : (
                          <p>Loading image...</p>
                        )}
                      </div>

                      {/* <Text variant="muted font-regular body">
                       {dataUserMe && dataUserMe.userMe.email}
                      </Text> */}
                      <Text variant="muted font-regular body">
                        {dataUserMe && dataUserMe.userMe.name}
                      </Text>
                    </div>
                  )}
                </div>
                {isMenuList.map((item) => (
                  <a href={item.href} className="link">
                    <Text variant="muted font-regular subheadline">
                      {item.label}
                    </Text>
                  </a>
                ))}
              </List>
            </Drawer>
          </div>
        </div>
      </div>

      {/* <div className="container-menu-margin">
                <div className="container-menu">
                    {
                        isMenuList.map((item) => (
                            <a href={item.href} className="link">
                                <Text variant="muted font-regular subheadline">{item.label}</Text>
                            </a>
                        ))
                    }
                </div>
            </div> */}
    </div>
  );
}
