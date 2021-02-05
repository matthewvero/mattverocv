import React, { useEffect, useState } from 'react'
import { HeaderContainer, HeaderLink, HeaderNav } from './header.styles'
import { MAVLOGO } from './header.styles';
import { withRouter } from 'react-router-dom';
import { Text } from '../text.styles';
import withTouchAnimator from '../../HOCs/with-touch-animator';
import MainMenu from '../main-menu/main-menu.component';
import {useDebounce} from '../../ui-custom-hooks.js'

const Header = ({history}) => {
      const [popped, setPopped] = useState(false);
      const [transition, setTransition] = useState(false);
      const handleScroll = () => {
            setTransition(true);
            setTimeout(() => setTransition(false), 200);
            if (window.scrollY > 0 && popped !== true) {
                  setPopped(true);
                  
            } else if (window.scrollY === 0 && popped !== false){
                  setPopped(false);
            }
      }
      const debounceHandleScroll = useDebounce(handleScroll, 200)
      useEffect(() => {
            
            
            window.addEventListener('scroll', debounceHandleScroll);
            return () => {
                  window.removeEventListener('scroll', debounceHandleScroll);
            }
            
      }, [debounceHandleScroll, popped])
      const HeaderLinkTouch = withTouchAnimator(HeaderLink);
      const MAVLOGOTouch = withTouchAnimator(MAVLOGO);
      return (
            <HeaderContainer $popped={popped} $transition={transition}> 
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
                        fn={() => history.push('/projects')}
                        >
                              <Text>Projects</Text>
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
