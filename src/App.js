import './App.css';
import Header from './components/header/header.component';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import MainMenu from './components/main-menu/main-menu.component';
import { CSSTransition } from 'react-transition-group';
import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import {themeLight} from './theme'
import { useRef } from 'react';
function App() {
  const mainMenuVisible = useSelector(state => state.visible);
  const mainMenuRef = useRef()
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
        <Router>
          <Switch>
            <Route path='/'>
              <Homepage/>
            </Route>
          </Switch>
        </Router>
      </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
