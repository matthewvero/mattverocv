/** @format */

import './App.css'
import React, { useEffect, useRef, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components/macro'
import { theme } from './theme'
import { useDebounce, usePageChangeListener, useVisiblePageObserver } from './ui-custom-hooks'
import { useDispatch } from 'react-redux'
import { setActivePage } from './redux'
import Header from './components/header/header.component'
import Homepage from './pages/homepage/homepage'
import AboutMePage from './pages/aboutme/about-me-page.component'
import EducationPage from './pages/education/education-page.component'
import ProjectsPage from './pages/projects/projects-page.component'

function App() {
      const appRef = useRef()
	const visiblePages = useVisiblePageObserver(appRef, '.page')

      return (
            <div className="App" ref={appRef}>
                  <ThemeProvider theme={theme}>
                        <Header $appRef={appRef} />

                        <Homepage $visiblePages={visiblePages}  />

                        <ProjectsPage  $visiblePages={visiblePages} />

                        <AboutMePage  $visiblePages={visiblePages} />

                        <EducationPage  $visiblePages={visiblePages} />
                  </ThemeProvider>
            </div>
      )
}

export default withRouter(App)
