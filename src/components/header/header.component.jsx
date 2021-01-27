import React, { useContext, useState } from 'react'
import { HeaderContainer, HeaderMenuButton } from './header.styles'
import {ReactComponent as MAVLOGO} from '../../MAVLOGO.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toggleMainMenu } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';


const Header = () => {
      const [active, setActive] = useState(false)
      const mainMenuVisible = useSelector(state => state.visible)
      const dispatch = useDispatch()
      const theme = useContext(ThemeContext);

      const handlePointerUp = () => {
            setActive(false);
            dispatch(toggleMainMenu())
      };

      return (
            <HeaderContainer>
                  <MAVLOGO viewBox='0 -5 150 90' style={{height: '100%', width: '100px'}}/>
                  <HeaderMenuButton 
                        $active={active} 
                        onPointerDown={() => setActive(true)} 
                        onPointerUp={handlePointerUp}
                  >
                  {
                        mainMenuVisible ? 
                        <FontAwesomeIcon style={{fontSize: '1.7rem', color: theme.main}} icon={ faTimes }/>
                        :
                        <FontAwesomeIcon style={{fontSize: '1.5rem', color: theme.main}} icon={ faBars }/>
                  }
                  </HeaderMenuButton>
            </HeaderContainer>
      )
}

export default Header
