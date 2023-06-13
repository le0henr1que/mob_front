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
  Snackbar,
  CircularProgress,
} from "@material-ui/core";
import { Menu, Close, ExitToApp } from "@material-ui/icons";
import { useEffect, useState, useContext } from "react";
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
import { Load } from "../../Components/Load";
import CookieIcon from "@mui/icons-material/Cookie";
import { SnackbarProvider, useSnackbar } from "notistack";
import { useCookies, withCookies } from "react-cookie";
import { CircleLoad } from "../circleLoad";

export function Header() {
  const [dataUserMe, setDataUserMe] = useState<UserInterface | any>(null);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [load, setLoad] = useState(true);
  const [loadConfirmarEmail, setLoadConfirmarEmail] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [userImage, setUserImage] = useState();
  const [isMenuList, setIsMenuList] = useState<MenuItemsHeader[]>([]);
  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const { authState, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [openEmailConfirm, setOpenEmailConfirm] = useState(false);
  const [cookies, setCookie] = useCookies(["confirmationEmailSent"]);

  const classes = useStyles();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  var listMenu: MenuItemsHeader[] = [
    { label: "Achar local", href: "/pesquisar-local" },
    { label: "Minhas avaliações", href: "/minhas-avaliacoes" },
    { label: "Sobre o Mob!", href: "/about" },
    { label: "Fazer avaliação", href: "/pesquisar-local" },
  ];

  const handleLogout = async () => {
    setLoad(false);
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
          console.log(content);
          if (!content.data.userMe) {
            logout();
          }
          setDataUserMe(content.data.userMe);
          setUserImage(content.data.userMe.picture);

          !content.data.userMe.cookieConsent &&
            authState.isAuthenticated &&
            setOpen(true);
          if (
            !content.data.userMe.confirmed_email &&
            authState.isAuthenticated &&
            content.data.userMe.confirmEmailRequest.length === 0
          ) {
            setOpenEmailConfirm(true);
          }

          setIsImageLoaded(true);
          setLoad(false);
        })
        .catch((error) => {
          if (error.response.status === 403) {
            handleLogout();
            navigate("/");
            setLoad(false);
          }
        });
    }
    // console.log(dataUserMe)
  }, []);

  const handleAcceptCookies = () => {
    setLoad(true);
    api
      .put(
        "/user",
        {
          cookieConsent: true,
        },
        {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`,
          },
        }
      )
      .then((content) => {
        setOpen(false);
        setLoad(false);
      })
      .catch((error) => {
        setOpen(false);
        console.log(error);
      });
  };

  const handleSendEmailConfirmation = async () => {
    setLoadConfirmarEmail(true);
    await api
      .post(
        "/confirm-email",
        {},
        {
          headers: {
            Authorization: `Bearer ${authService.getToken()}`,
          },
        }
      )
      .then((content) => {
        console.log(content);
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 5);
        setCookie("confirmationEmailSent", true, { expires: expiryDate });

        setOpenEmailConfirm(false);
        setLoadConfirmarEmail(false);
        console.log(cookies.confirmationEmailSent);
        console.log(cookies);
      })
      .catch((error) => {
        setOpenEmailConfirm(false);
        console.log(error);
      });
  };

  function getInitials(name: string): string {
    const spaceIndex = name.indexOf(" ");
    const firstName = name.substring(0, 1);
    const lastName =
      spaceIndex !== -1 ? name.substring(spaceIndex + 1, spaceIndex + 2) : "";
    return firstName.toUpperCase() + lastName.toUpperCase();
  }

  useEffect(() => {}, []);
  if (load) {
    return <CircleLoad />;
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
                {dataUserMe && <UserMenu userInformation={dataUserMe} />}
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
                      {dataUserMe && <UserMenu userInformation={dataUserMe} />}
                    </div>
                  )}
                </div>
              </List>
            </Drawer>
          </div>
        </div>
      </div>

      <SnackbarProvider maxSnack={3}>
        <Snackbar
          open={open}
          message={
            <>
              Este site utiliza cookies. Clique em 'Aceitar' para confirmar o
              uso de cookies.
            </>
          }
          action={
            <Button color="primary" size="large" onClick={handleAcceptCookies}>
              {load ? <CircularProgress color="secondary" /> : "Aceitar"}
            </Button>
          }
          anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        />

        <Snackbar
          open={openEmailConfirm}
          message={
            <>
              Você ainda não confirmou seu email, mas é necessário fazer isso
              para ter acesso a todas as funcionalidades do site. Para confirmar
              seu email, basta clicar em ‘Confirmar’ e seguir o link que
              enviamos para sua caixa de entrada.
            </>
          }
          action={
            <Button
              color="primary"
              size="large"
              onClick={handleSendEmailConfirmation}
            >
              {loadConfirmarEmail ? (
                <CircularProgress color="secondary" />
              ) : (
                "Confirmar Email"
              )}
            </Button>
          }
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        />
      </SnackbarProvider>
    </div>
  );
}
