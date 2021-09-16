/** @format */

import React, { useContext, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useClickOutsideListener } from '../../ui-custom-hooks'
import {
      MainMenuContainer,
      MainMenuSlide,
      MainMenuButton,
      MainMenuShell,
      MainMenuItem,
} from './main-menu.styles'
import { setMainMenuVisible, toggleMainMenu } from '../../redux.js'
import { CSSTransition } from 'react-transition-group'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { ThemeContext } from 'styled-components/macro'
import { SubTitle } from '../text.styles'
import { HR } from '../misc.styles'
import withTouchAnimator from '../../HOCs/with-touch-animator'
import { withRouter } from 'react-router-dom'
const MainMenu = ({ history, location }) => {
      const mainMenuRef = useRef(null)
      const slideRef = useRef()
      const shellRef = useRef()
      const dispatch = useDispatch()
      const visible = useSelector((state) => state.mainMenu.visible)
      const contactVisible = useSelector(
            (state) => state.contactDetails.visible
      )
      const [slideVisible, setSlideVisible] = useState(false)
      const [active, setActive] = useState(false)
      const theme = useContext(ThemeContext)
      const handlePointerUp = () => {
            setActive(false)
            dispatch(toggleMainMenu())
      }

      const handleClickOutside = () => {
            if (visible) {
                  dispatch(setMainMenuVisible(false))
            }
      }
      useClickOutsideListener(handleClickOutside, shellRef)

      const MainMenuItemTouch = withTouchAnimator(MainMenuItem)

      return (
            <MainMenuShell ref={shellRef}>
                  <MainMenuButton
                        $active={active}
                        onPointerDown={() => setActive(true)}
                        onPointerUp={handlePointerUp}
                  >
                        {visible ? (
                              <FontAwesomeIcon
                                    style={{
                                          fontSize: '1.7rem',
                                          color: theme.background,
                                    }}
                                    icon={faTimes}
                              />
                        ) : (
                              <FontAwesomeIcon
                                    style={{
                                          fontSize: '1.5rem',
                                          color: theme.background,
                                    }}
                                    icon={faBars}
                              />
                        )}
                  </MainMenuButton>
                  <CSSTransition
                        in={visible}
                        classNames="mainmenu"
                        timeout={200}
                        unmountOnExit
                        nodeRef={mainMenuRef}
                        onEntered={() => setSlideVisible(true)}
                        onExited={() => setSlideVisible(false)}
                  >
                        <MainMenuContainer
                              ref={mainMenuRef}
                              $contactsopen={contactVisible}
                        >
                              <CSSTransition
                                    in={slideVisible && visible}
                                    classNames="mainmenuslide"
                                    timeout={200}
                                    unmountOnExit
                                    nodeRef={slideRef}
                              >
                                    <MainMenuSlide ref={slideRef}>
                                          <MainMenuItemTouch
                                                fn={() => history.push('/')}
                                          >
                                                <SubTitle
                                                      $location={
                                                            location.pathname ===
                                                            '/'
                                                      }
                                                >
                                                      Home
                                                </SubTitle>
                                          </MainMenuItemTouch>
                                          <HR />
                                          <MainMenuItemTouch
                                                fn={() =>
                                                      history.push('/about')
                                                }
                                          >
                                                <SubTitle
                                                      $location={
                                                            location.pathname ===
                                                            '/about'
                                                      }
                                                >
                                                      About Me
                                                </SubTitle>
                                          </MainMenuItemTouch>

                                          <HR />

                                          <MainMenuItemTouch
                                                fn={() =>
                                                      history.push('/education')
                                                }
                                          >
                                                <SubTitle
                                                      $location={
                                                            location.pathname ===
                                                            '/education'
                                                      }
                                                >
                                                      Education
                                                </SubTitle>
                                          </MainMenuItemTouch>

                                          <HR />

                                          <MainMenuItemTouch
                                                fn={() =>
                                                      history.push('/projects')
                                                }
                                          >
                                                <SubTitle
                                                      $location={
                                                            location.pathname ===
                                                            '/projects'
                                                      }
                                                >
                                                      Projects
                                                </SubTitle>
                                          </MainMenuItemTouch>

                                          <HR />
                                    </MainMenuSlide>
                              </CSSTransition>
                        </MainMenuContainer>
                  </CSSTransition>
            </MainMenuShell>
      )
}

export default withRouter(MainMenu)
