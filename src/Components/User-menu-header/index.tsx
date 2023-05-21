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
import { ArrowDropDown } from "@material-ui/icons";
import ButtonStyle from "../Button";
import { useAuth } from "../../context/AuthContext";

export default function UserMenu({ children, userName }: any) {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const { authState, logout } = useAuth();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    } else if (event.key === "Escape") {
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const handleLogout = async () => {
    await logout();
  };

  return (
    <>
      <div className="container-user-avatar">
        <div className="container-avatar-image-main">L</div>
      </div>
      <div
        className="container-element option-user"
        style={{ display: "block" }}
      >
        <div className="container-banner-option">
          <div className="container-avatar-image-banner">L</div>
          <div className="text-banner">Leonardo Henrique dos Santos </div>
        </div>
        <div className="option-first"></div>
        <div className="option-button-logout">
          <ButtonStyle variant="small-button " onClick={() => handleLogout()}>
            Sair
          </ButtonStyle>
        </div>
      </div>
    </>
    // <Stack direction="row" spacing={2}>
    //   <div>
    //     <Button
    //       ref={anchorRef}
    //       id="composition-button"
    //       aria-controls={open ? "composition-menu" : undefined}
    //       aria-expanded={open ? "true" : undefined}
    //       aria-haspopup="true"
    //       onClick={handleToggle}
    //       endIcon={<ArrowDropDown />}
    //     >
    //       <div className="text-overflow">{userName}</div>
    //     </Button>
    //     <Popper
    //       open={open}
    //       anchorEl={anchorRef.current}
    //       role={undefined}
    //       placement="bottom-start"
    //       transition
    //       disablePortal
    //     >
    //       {({ TransitionProps, placement }) => (
    //         <Grow
    //           {...TransitionProps}
    //           style={{
    //             transformOrigin:
    //               placement === "bottom-start" ? "left top" : "left bottom",
    //           }}
    //         >
    //           <Paper>
    //             <ClickAwayListener onClickAway={handleClose}>
    //               <MenuList
    //                 autoFocusItem={open}
    //                 id="composition-menu"
    //                 aria-labelledby="composition-button"
    //                 onKeyDown={handleListKeyDown}
    //               >
    //                 {children}
    //               </MenuList>
    //             </ClickAwayListener>
    //           </Paper>
    //         </Grow>
    //       )}
    //     </Popper>
    //   </div>
    // </Stack>
  );
}
