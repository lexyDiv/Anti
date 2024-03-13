import { Drawer, List } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { useAppDispatch } from "../../../store/store";
import MenuButton from "../../buttons/MenuButton";
import { menuGoBack } from "./slices/menuDrawerSlice";
import { BasicMenuButtonDataI } from "../../../structure/basicMenu/types/BasicMenuButtonDataType";

function MenuDrawer({
  buttonsArrey,
}: {
  buttonsArrey: BasicMenuButtonDataI[];
}): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  const holdClick = useRef(false);
  const isClosed = useRef(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setOpen(true);
  }, []);

  const onCloseFunc = () => {
    if (!isClosed.current) {
      isClosed.current = true;
      setOpen(false);
      setTimeout(() => dispatch(menuGoBack()), 700);
    }
  };

  return (
    <Drawer
      PaperProps={{
        sx: {
          backgroundColor: "#212121",
          width: "250px",
          padding: "10px",
        },
      }}
      open={open}
      anchor="left"
      transitionDuration={700}
      sx={{}}
      onClose={onCloseFunc}
    >
      <List>
        {buttonsArrey.map((buttonData) => (
          <MenuButton
            key={buttonData.text}
            {...buttonData}
            holdClick={holdClick}
          />
        ))}
      </List>
    </Drawer>
  );
}

export default MenuDrawer;
