import { configureStore, createSlice } from '@reduxjs/toolkit';

const mainMenu = createSlice({
      name: 'mainMenu',
      initialState: { visible: false },
      reducers: {
            toggleMainMenu: (state) => {
                  state.visible = !state.visible;
            },
            setMainMenuVisible: (state, action) => {
                  state.visible = action.payload;
            },
      },
});

const contactDetails = createSlice({
      name: 'contact',
      initialState: { visible: false },
      reducers: {
            toggleContactDetails: (state) => {
                  state.visible = !state.visible;
            },
            setContactDetailsVisible: (state, action) => {
                  state.visible = action.payload;
            },
      },
});

const activePage = createSlice({
      name: 'activePage',
      initialState: { activePage: '/' },
      reducers: {
            setActivePage: (state, action) => {
                  state.activePage = action.payload;
            },
      },
});

const store = configureStore({
      reducer: {
            mainMenu: mainMenu.reducer,
            contactDetails: contactDetails.reducer,
            activePage: activePage.reducer,
      },
});

export const { toggleMainMenu, setMainMenuVisible } = mainMenu.actions;
export const { toggleContactDetails, setContactDetailsVisible } =
      contactDetails.actions;
export const { setActivePage } = activePage.actions;

export default store;
