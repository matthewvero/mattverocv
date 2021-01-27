import React, { useState } from 'react'
import { HeaderContainer, HeaderMenuButton } from './header.styles'
import {ReactComponent as MAVLOGO} from '../../MAVLOGO.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toggleMainMenu } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';


const Header = () => {
      const [active, setActive] = useState(false)
      const mainMenuVisible = useSelector(state => state.visible)
      const dispatch = useDispatch()

      const handlePointerUp = () => {
            setActive(false);
            dispatch(toggleMainMenu())
      };

      return (
            <HeaderContainer
                  
            >
                  <MAVLOGO viewBox='69 76 20 30' style={{height: '100%', width: '100px'}}/>
                  <HeaderMenuButton 
                        $active={active} 
                        onPointerDown={() => setActive(true)} 
                        onPointerUp={handlePointerUp}
                  >
                  {
                        mainMenuVisible ? 
                        <FontAwesomeIcon style={{fontSize: '1.7rem', color: 'white'}} icon={ faTimes }/>
                        :
                        <FontAwesomeIcon style={{fontSize: '1.5rem', color: 'white'}} icon={ faBars }/>
                  }
                  </HeaderMenuButton>
            </HeaderContainer>
      )
}

export default Header
