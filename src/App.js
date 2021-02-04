import './App.css';
import Header from './components/header/header.component';
import {
  Switch,
  Route,
  withRouter,
} from "react-router-dom";
import Homepage from './pages/homepage/homepage';
import MainMenu from './components/main-menu/main-menu.component';
import { ThemeProvider } from 'styled-components';
import {themeLight} from './theme'
import AboutMePage from './pages/aboutme/about-me-page.component';
import { usePageChangeListener } from './ui-custom-hooks';
import { useDispatch } from 'react-redux';
import { setMainMenuVisible } from './redux';
function App({history}) {
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
