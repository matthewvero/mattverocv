import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickOutsideListener } from '../../ui-custom-hooks'
import { MainMenuContainer } from './main-menu.styles'
import { setMainMenuVisible } from '../../redux.js';
const MainMenu = () => {
      const dispatch = useDispatch();
      const menuRef = useRef();
      const visible = useSelector(state => state.visible);
      useClickOutsideListener(() => dispatch(setMainMenuVisible(false)), menuRef)

      return (
            <MainMenuContainer ref={menuRef}>
            </MainMenuContainer>
      )
}

export default MainMenu
