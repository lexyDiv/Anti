import { createSlice } from "@reduxjs/toolkit";
import { BasicMenuDataType } from "../../../../structure/basicMenu/types/BasicMenuDataType";

const initialState: BasicMenuDataType = {
  structure: [
    {
      callBackNum: 0,
      iconNum: 0,
      text: "area-1 button-1 a",
      buttons: [
        {
          callBackNum: 0,
          iconNum: 0,
          text: "area-2 button-1 a",
          buttons: [],
        },
        {
          callBackNum: 0,
          iconNum: 0,
          text: "area-2 button-2 a",
          buttons: [],
        },
      ],
    },
    {
      callBackNum: 0,
      iconNum: 0,
      text: "area-1 button-2 b",
      buttons: [
        {
          callBackNum: 0,
          iconNum: 0,
          text: "area-2 button-1 b",
          buttons: [],
        },
        {
          callBackNum: 0,
          iconNum: 0,
          text: "area-2 button-2 b",
          buttons: [],
        },
      ],
    },
  ],
  areas: [],
};

const menuDrawerSlice = createSlice({
  name: "menu-drawer",
  initialState,
  reducers: {
    initialBasicMenu: (state) => {
      state.areas.push(state.structure);
    },
    menuGoBack: (state) => {
      state.areas.pop();
    },
    menuGoDeep: (state, action) => {
      state.areas.push(action.payload);
    },
    clearBasicMenu: (state) => {
      state.areas = [];
    },
  },
});

export const { initialBasicMenu, menuGoBack, menuGoDeep, clearBasicMenu } =
  menuDrawerSlice.actions;

export default menuDrawerSlice.reducer;
