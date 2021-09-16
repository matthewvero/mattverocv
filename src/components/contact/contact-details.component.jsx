/** @format */

import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import React, { useRef, useState } from 'react'
import withTouchAnimator from '../../HOCs/with-touch-animator'
import {
      ContactButton,
      ContactDetailsContainer,
      ContactDetailsFader,
      CopiedIndicator,
} from './contact-details.styles'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { CSSTransition } from 'react-transition-group'
import { Text } from '../text.styles'
const ContactDetails = ({ $visible }) => {
      const ContactButtonTouch = withTouchAnimator(ContactButton)
      const clipBoardRef = useRef()
      const [copied, setCopied] = useState(false)
      const copyEmail = () => {
            // clipBoardRef.current.select();
            // clipBoardRef.current.selectRange(0, 9999);
            // document.execCommand("copy");
            setCopied(true)
            setTimeout(() => setCopied(false), 1000)
      }
      return (
            <ContactDetailsContainer ref={clipBoardRef}>
                  <ContactDetailsFader>
                        <ContactButtonTouch
                              fn={() =>
                                    window.open(
                                          'http://linkedin.com/in/matthewavero'
                                    )
                              }
                              icon={faLinkedin}
                        />
                        <ContactButtonTouch
                              fn={() =>
                                    window.open(
                                          'https://github.com/matthewvero'
                                    )
                              }
                              icon={faGithub}
                        />
                        <CopyToClipboard
                              text={'mattavero97@gmail.com'}
                              onCopy={copyEmail}
                        >
                              <div style={{ position: 'relative' }}>
                                    <ContactButtonTouch icon={faEnvelope} />
                                    <CSSTransition
                                          in={copied}
                                          classNames="copied"
                                          timeout={300}
                                          unmountOnExit
                                    >
                                          <CopiedIndicator>
                                                <Text>Copied!</Text>
                                          </CopiedIndicator>
                                    </CSSTransition>
                              </div>
                        </CopyToClipboard>
                  </ContactDetailsFader>
            </ContactDetailsContainer>
      )
}

export default ContactDetails
