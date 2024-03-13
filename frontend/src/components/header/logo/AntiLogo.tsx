import React from "react";
import logo from "../../../images/anti.png";
import { Avatar } from "@mui/material";

function AntiLogo(): JSX.Element {
  return (
    <Avatar
      alt="Remy Sharp"
      src={logo}
      sx={{
        width: "48px",
        height: "auto",
      }}
     
    />
  );
}

export default AntiLogo;
