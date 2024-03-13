import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";
import AntiLogo from "./logo/AntiLogo";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import { initialBasicMenu } from "./menuDrawer/slices/menuDrawerSlice";
// import { setOpened } from "./menuDrawer/slices/menuDrawerSlice";

function NavBar(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <AntiLogo />
          <Typography variant="h6">
            Anti
            <hr />
          </Typography>
          <IconButton
            size="large"
            edge="start"
            color="info"
            aria-label="menu"
            sx={{ ml: 2 }}
            onClick={(e) => {
               dispatch(initialBasicMenu());
              e.stopPropagation();
            }}
          >
            <MenuIcon
              sx={{
                width: "30px",
                height: "30px",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Outlet />
    </>
  );
}

export default NavBar;
