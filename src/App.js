import './App.css';
import Header from './components/header/header.component';
import {
  Route,
  withRouter,
} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import { ThemeProvider } from 'styled-components/macro';
import {themeLight} from './theme'
import AboutMePage from './pages/aboutme/about-me-page.component';
import { usePageChangeListener } from './ui-custom-hooks';
import { useDispatch, useSelector } from 'react-redux';
import { setMainMenuVisible } from './redux';
import { CSSTransition } from 'react-transition-group';
import EducationPage from './pages/education/education-page.component';
import { PageShifter } from './pages/page.styles';
function App({history, match}) {
  const dispatch = useDispatch()
  const handlePageChange = () => {
    window.scrollTo(0, 0);
    dispatch(setMainMenuVisible(false));
  }
  // Check if page changes and reset scroll.
  usePageChangeListener(history, handlePageChange)
  const contactVisible = useSelector(state => state.contactDetails.visible);
  return (
    <div className="App">
    <ThemeProvider theme={themeLight}>
        <Header/>
        
          
          
        <PageShifter $shift={contactVisible}>
          
          <Route exact path='/'>

            {({ match }) => (
          
            <CSSTransition
              in={match != null}
              timeout={600}
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
              timeout={450}
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
              timeout={450}
              classNames="page"
              unmountOnExit
            >
              <AboutMePage/>
            </CSSTransition>
            )}
          </Route>

          <Route exact path='/education'>
            {({ match }) => (
        
              <CSSTransition
                in={match != null}
                timeout={450}
                classNames="page"
                unmountOnExit
              >
                <EducationPage/>
              </CSSTransition>
            )}
          </Route>

          </PageShifter>
        </ThemeProvider>
    </div>
  );
}

export default withRouter(App);
