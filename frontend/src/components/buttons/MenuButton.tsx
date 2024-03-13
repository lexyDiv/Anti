import { Button, ListItemIcon, Typography } from "@mui/material";
import React, { MutableRefObject } from "react";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import Test from "../Test";
import useGoToReg from "./hooks/useGoToReg";
import { BasicMenuButtonDataI } from "../../structure/basicMenu/types/BasicMenuButtonDataType";
import { useAppDispatch } from "../../store/store";
import { menuGoDeep } from "../header/menuDrawer/slices/menuDrawerSlice";


const buttonIcons = [DirectionsWalkIcon];

const buttonsCallBacks: (() => () => void)[] = [useGoToReg];


function MenuButton({
  iconNum,
  callBackNum,
  text,
  buttons,
  holdClick,
}: {
  iconNum: number;
  callBackNum: number;
  text: string;
  buttons: BasicMenuButtonDataI[];
  holdClick: MutableRefObject<boolean>
}): JSX.Element {
  const callBack: () => void = buttonsCallBacks[callBackNum]();
  const Icon = buttonIcons[iconNum];
  const dispatch = useAppDispatch();

  const basickMenuButtonClick = () => {
    if(!holdClick.current) {
        holdClick.current = true;
        !buttons.length ? callBack() : dispatch(menuGoDeep(buttons));
        setTimeout(() => holdClick.current = false, 700);
    }
  }

  return (
    <Button
      color="info"
      sx={{
        width: "100%",
        backgroundColor: "#292129",
        marginTop: '10px'
      }}
      onClick={basickMenuButtonClick}
    >
      <ListItemIcon>
        <Icon color="secondary" />
      </ListItemIcon>

      <Typography
        variant="body2"
        sx={{
          color: "white",
        }}
      >
        {text}
      </Typography>
    </Button>
  );
}

export default MenuButton;
