import React, { useEffect } from "react";
import NavBar from "../header/NavBar";
import MenuDrawer from "../header/menuDrawer/MenuDrawer";
import { useSelector } from "react-redux";
import { RootState, useAppDispatch } from "../../store/store";
import { clearBasicMenu } from "../header/menuDrawer/slices/menuDrawerSlice";

function Main(): JSX.Element {
  const { areas } = useSelector((state: RootState) => state.menuDrawerSlice);
  const dispatch = useAppDispatch();

useEffect(() => {
  dispatch(clearBasicMenu())
}, [])


  return (
    <>
      <NavBar />
      {/* <MenuDrawer /> */}
      {areas.map((arr, i) => (
        <MenuDrawer key={i} buttonsArrey={arr}/>
      ))}
    </>
  );
}

export default Main;
