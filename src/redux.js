import { configureStore, createSlice } from "@reduxjs/toolkit"

const mainMenuSlice = createSlice({
      name: 'mainMenu',
      initialState: {visible: false},
      reducers: {
            toggleMainMenu: state => {state.visible = !state.visible},
            setMainMenuVisible: (state, action) => {state.visible = action.payload}
      }
}
)

const store = configureStore({
      reducer: mainMenuSlice.reducer
});

export const {toggleMainMenu, setMainMenuVisible} = mainMenuSlice.actions;

export default store;