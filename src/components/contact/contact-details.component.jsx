import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import { ThemeContext } from 'styled-components'
import withTouchAnimator from '../../HOCs/with-touch-animator'
import { Text } from '../text.styles'
import { ContactButton, ContactDetailsContainer, ContactDetailsFader } from './contact-details.styles'

const ContactDetails = ({$visible}) => {
      const ContactButtonTouch = withTouchAnimator(ContactButton);
      const copyEmail = () => {
            navigator.clipboard.writeText('matthewverobusiness@gmail.com');
            alert('Copied mattverobusiness@gmail.com to clipboard!');
      }  
      return (
            <ContactDetailsContainer>
                        <ContactDetailsFader>
                              <ContactButtonTouch fn={() => window.open('http://linkedin.com/in/matthewavero')} icon={faLinkedin}/>
                              <ContactButtonTouch fn={() => window.open('https://github.com/matthewvero')} icon={faGithub}/>
                              <ContactButtonTouch fn={() => copyEmail()} icon={faEnvelope}/>
                        </ContactDetailsFader>
                        
            
            </ContactDetailsContainer>
            
      )
}

export default ContactDetails
