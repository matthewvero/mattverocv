import './App.css';
import Header from './components/header/header.component';
import {
  Route,
  withRouter,
} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import { ThemeProvider } from 'styled-components';
import {themeLight} from './theme'
import AboutMePage from './pages/aboutme/about-me-page.component';
import { usePageChangeListener } from './ui-custom-hooks';
import { useDispatch } from 'react-redux';
import { setMainMenuVisible } from './redux';
import { CSSTransition } from 'react-transition-group';
function App({history, match}) {
  const dispatch = useDispatch()
  const handlePageChange = () => {
    window.scrollTo(0, 0);
    dispatch(setMainMenuVisible(false));
  }
  // Check if page changes and reset scroll.
  usePageChangeListener(history, handlePageChange)

  return (
    <div className="App">
    <ThemeProvider theme={themeLight}>
        <Header/>

        
          
          
        <div style={{paddingTop: '100px', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          
          <Route exact path='/'>

            {({ match }) => (
          
            <CSSTransition
              in={match != null}
              timeout={2000}
              classNames="page"
              unmountOnExit
            >
              <Homepage/>
            </CSSTransition>
            )}
          </Route>

          <Route path='/contact'>

            {({ match }) => (
          
            <CSSTransition
              in={match != null}
              timeout={2000}
              classNames="page"
              unmountOnExit
            >
              <Homepage/>
            </CSSTransition>
            )}
          </Route>

          <Route exact path='/about'>

            {({ match }) => (
          
            <CSSTransition
              in={match != null}
              timeout={2000}
              classNames="page"
              unmountOnExit
            >
              <AboutMePage/>
            </CSSTransition>
            )}
          </Route>
            
        </div>
      </ThemeProvider>
    </div>
  );
}

export default withRouter(App);
