import * as React from "react";
import Button from "@mui/material/Button";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import Popper from "@mui/material/Popper";
import MenuItem from "@mui/material/MenuItem";
import MenuList from "@mui/material/MenuList";
import Stack from "@mui/material/Stack";
import "./styles.css";
import { LockOutlined } from "@material-ui/icons";
import ButtonStyle from "../Button";
import { useAuth } from "../../context/AuthContext";
import { Text } from "../Text";
import { MenuItemsHeader } from "../../@types";
import { getInitials } from "../../utils/GetInitials/index";
import { Load } from "../Load";
import { CircleLoad } from "../circleLoad";

export default function UserMenu(userInformation: any) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { authState, logout } = useAuth();
  const [loadImage, setLoadImage] = React.useState(false);

  const [isMenuList, setIsMenuList] = React.useState<MenuItemsHeader[]>([
    { label: "Achar local", href: "/pesquisar-local" },
    { label: "Minhas avaliações", href: "/minhas-avaliacoes" },
    { label: "Sobre o Mob!", href: "/about" },
    { label: "Fazer avaliação", href: "/pesquisar-local" },
  ]);
  const { name, picture } = userInformation.userInformation;

  console.log(picture);

  const handleLogout = async () => {
    setLoadImage(true);
    await logout();
    setLoadImage(false);
  };

  document.addEventListener("click", function () {
    setOpen(false);
  });

  if (loadImage) {
    return <CircleLoad />;
  }

  return (
    <>
      <div className="container-user-avatar">
        {picture && !loadImage ? (
          <div
            className="container-avatar-image-main"
            onMouseOver={() => setOpen(true)}
            style={{
              backgroundImage: `url(${picture.replace("=s96-c", "")})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "100%",
              backgroundPosition: "center",
              backgroundColor: "#fff",
            }}
          ></div>
        ) : loadImage ? (
          <Load variant="rectangular" width={35} height={35} />
        ) : (
          <div
            className="container-avatar-image-main"
            onMouseOver={() => setOpen(true)}
            style={{
              background: "#119bf7",
            }}
          >
            {getInitials(name)}
          </div>
        )}
      </div>

      <div
        className="container-element option-user fade-out"
        style={{ display: open ? "block" : "none" }}
      >
        <div className="container-banner-option">
          <div
            className="container-avatar-image-banner"
            style={
              picture && {
                backgroundImage: `url(${picture.replace("=s96-c", "")})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "100%",
                backgroundPosition: "center",
              }
            }
          >
            {!picture && getInitials(name)}
          </div>

          <div className="text-banner">{name}</div>
        </div>
        <div className="option-first">
          <LockOutlined />

          <div className="content-text">
            <strong>Minha senha</strong>
            <div>Alterar a senha de acesso</div>
          </div>

          <div>
            <svg
              className="MuiSvgIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
              role="presentation"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path>
            </svg>
          </div>
        </div>

        <div className="option-second">
          {/* <LockOutlined/>

          <div className="content-text">
            <strong>Minha senha</strong>
            <div>Alterar a senha de acesso</div>
          </div> */}
          {isMenuList.map((item: any) => (
            <a href={item.href} className="link">
              <Text variant="muted font-regular subheadline">{item.label}</Text>
            </a>
          ))}

          {/* <div><svg className="MuiSvgIcon-root" focusable="false" viewBox="0 0 24 24" aria-hidden="true" role="presentation"><path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"></path></svg></div> */}
        </div>

        <div className="option-button-logout">
          <ButtonStyle variant="small-button " onClick={() => handleLogout()}>
            Sair
          </ButtonStyle>
        </div>
      </div>
    </>
  );
}
