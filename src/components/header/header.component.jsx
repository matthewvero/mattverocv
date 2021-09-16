/** @format */

import React, { useEffect, useState } from 'react'
import {
      HeaderContainer,
      HeaderLink,
      HeaderNav,
      MobileContactButton,
} from './header.styles'

import { withRouter } from 'react-router-dom'
import { Text } from '../text.styles'
import withTouchAnimator from '../../HOCs/with-touch-animator'
import MainMenu from '../main-menu/main-menu.component'
import { useDebounce, usePageChangeListener, usePageChanger } from '../../ui-custom-hooks.js'
import ContactDetails from '../contact/contact-details.component'
import { useDispatch, useSelector } from 'react-redux'
import { toggleContactDetails } from '../../redux'
import { CSSTransition } from 'react-transition-group'
const Header = ({ history, $appRef }) => {
      const [popped, setPopped] = useState(false)
      const [transition, setTransition] = useState(false)
      const activePage = useSelector(
            (state) => state.activePage.activePage
      )
      const contactDetailsVisible = useSelector(
            (state) => state.contactDetails.visible
      )
      const dispatch = useDispatch()

      const handleScroll = (e) => {
            if (e.target.scrollTop > 0 && popped === false) {
                  setTransition(true)
                  setTimeout(() => setTransition(false), 200)
                  setPopped(true)
            } else if (e.target.scrollTop === 0) {
                  setPopped(false)
            }
      }
      const debounceHandleScroll = useDebounce(handleScroll, 400, true)

      useEffect(() => {
            const appRef = $appRef.current

            appRef.addEventListener('scroll', debounceHandleScroll)
            return () => {
                  appRef.removeEventListener('scroll', debounceHandleScroll)
            }
      }, [$appRef, debounceHandleScroll, popped])

      const HeaderLinkTouch = withTouchAnimator(HeaderLink)
      
      const MobileContactButtonTouch = withTouchAnimator(MobileContactButton)
      const [goToPage] = usePageChanger()
      return (
            <HeaderContainer
                  $popped={popped}
                  $transition={transition}
                  $contactVisible={contactDetailsVisible}
            >
                        <HeaderLinkTouch
                              fn={() => goToPage('/')}
                              $open={activePage === '/'}
                        >
                              Matt Vero
                        </HeaderLinkTouch>
                        <HeaderLinkTouch
                              fn={() => goToPage('/projects')}
                              $open={activePage === '/projects'}
                        >
                              Projects
                        </HeaderLinkTouch>
                        <HeaderLinkTouch
                              fn={() => goToPage('/about')}
                              $open={activePage === '/about'}
                        >
                              About Me
                        </HeaderLinkTouch>
                 
                       

                        <HeaderLinkTouch
                              fn={() => goToPage('/education')}
                              $open={activePage === '/education'}
                        >
                              Education
                        </HeaderLinkTouch>
                        <HeaderLinkTouch
                              fn={() => dispatch(toggleContactDetails())}
                              $open={contactDetailsVisible}
                        >
                              Contact
                        </HeaderLinkTouch>
                 

                  <div
                        style={{
                              height: '100%',
                              width: '150px',
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'space-between',
                        }}
                  >
                        <MobileContactButtonTouch
                              fn={() => dispatch(toggleContactDetails())}
                        >
                              <Text>Contact</Text>
                        </MobileContactButtonTouch>

                        <MainMenu />
                  </div>

                  <CSSTransition
                        in={contactDetailsVisible}
                        timeout={200}
                        unmountOnExit
                        classNames="contactDetails"
                  >
                        <ContactDetails />
                  </CSSTransition>
            </HeaderContainer>
      )
}

export default withRouter(Header)
