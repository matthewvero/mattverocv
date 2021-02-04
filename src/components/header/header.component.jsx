import React, { useContext, useState } from 'react'
import { HeaderContainer, HeaderLink, HeaderNav } from './header.styles'
import { MAVLOGO } from './header.styles';

import { toggleMainMenu } from '../../redux';
import { useDispatch, useSelector } from 'react-redux';
import { ThemeContext } from 'styled-components';
import { withRouter } from 'react-router-dom';
import { Text } from '../text.styles';
import withTouchAnimator from '../../HOCs/with-touch-animator';
import MainMenu from '../main-menu/main-menu.component';


const Header = ({history}) => {
      
      const HeaderLinkTouch = withTouchAnimator(HeaderLink);
      const MAVLOGOTouch = withTouchAnimator(MAVLOGO);
      return (
            <HeaderContainer>
                  <HeaderNav >
                        <HeaderLinkTouch 
                              fn={() => history.push('/about')}
                              
                        >
                              <Text>About Me</Text>
                        </HeaderLinkTouch>
                        <HeaderLinkTouch
                              fn={() => history.push('/education')}
                        >
                              <Text>Education</Text>
                        </HeaderLinkTouch>
                  </HeaderNav>

                  <MAVLOGOTouch 
                        viewBox='0 -5 150 90' 
                        fn={() => history.push('/')}
                  />

                  <HeaderNav >
                        <HeaderLinkTouch 
                        fn={() => history.push('/')}
                        >
                              <Text>Something</Text>
                        </HeaderLinkTouch>
                        <HeaderLinkTouch 
                        fn={() => history.push('/contact')}
                        >
                              <Text>Contact</Text>
                        </HeaderLinkTouch>
                  </HeaderNav>


                  <MainMenu/>
            </HeaderContainer>
      )
}

export default withRouter(Header)
