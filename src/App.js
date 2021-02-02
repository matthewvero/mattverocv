import './App.css';
import Header from './components/header/header.component';
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import MainMenu from './components/main-menu/main-menu.component';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {themeLight} from './theme'
import { useEffect, useRef } from 'react';
import AboutMePage from './pages/aboutme/about-me-page.component';
import { usePageChangeListener } from './ui-custom-hooks';
function App({history, location}) {
  const mainMenuVisible = useSelector(state => state.visible);
  const mainMenuRef = useRef()

  // Check if page changes and reset scroll.
  usePageChangeListener(history, () => window.scrollTo(0, 0))
  useEffect(() => {
    console.log(location )
    
  }, [location])
  return (
    <div className="App">
    <ThemeProvider theme={themeLight}>
        <Header/>
        <CSSTransition
          in={mainMenuVisible}
          classNames='mainmenu'
          timeout={200}
          unmountOnExit
          nodeRef={mainMenuRef}
        > 
          <div ref={mainMenuRef}>
            <MainMenu/>
          </div>
        </CSSTransition>
        <div style={{paddingTop: '100px'}}>
          
            <Switch>
              <Route exact path='/'>
                <Homepage/>
              </Route>
              <Route path='/about'>
                <AboutMePage/>
              </Route>
            </Switch>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(App);
