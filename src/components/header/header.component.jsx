import React, { useContext, useState } from 'react'
import { HeaderContainer, HeaderLink, HeaderMenuButton, HeaderNav } from './header.styles'
import { MAVLOGO } from './header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { toggleMainMenu } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { withRouter } from 'react-router-dom';


const Header = ({history}) => {
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
                  <HeaderNav >
                        <HeaderLink>
                              About Me
                        </HeaderLink>
                        <HeaderLink>
                              Education
                        </HeaderLink>
                  </HeaderNav>

                  <MAVLOGO 
                        viewBox='0 -5 150 90' 
                        onPointerDown={() => history.push('/')}

                  />

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

export default withRouter(Header)
