import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { keyframes } from 'styled-components';

export const ContactDetailsContainer = styled.div`
      height: 100px;
      width: 100%;
      background-color: ${props => props.theme.surface};
      border-radius: ${props => props.theme.borderRadius};
      position: absolute;
      bottom: -91%;
      left: 0;
      transform-origin: top;
      display: flex;
      justify-content: center;
      &.contactDetails-enter {
		transform: scaleY(0);
	}
	&.contactDetails-enter-active {
            transition: all 100ms ease-out;
		transform: scaleY(1);
	}
	&.contactDetails-exit {
            transform: scaleY(1);
	}
	&.contactDetails-exit-active {
            transition: all 100ms ease-out;
		transform: scaleY(0);
      }
`;    

const fadein = keyframes`
      0% {opacity: 0%;}
      100% {opacity: 100%;}
`

export const ContactDetailsFader = styled.div`
      width: 70%;
      height: 100%;
      opacity: 0;
      animation: ${fadein} 100ms 150ms forwards 1;
      display: flex;
      align-items: center;
      justify-content: center;
`

export const ContactButton = styled(FontAwesomeIcon)`
margin: 0 10px;
      font-size: 3rem;
      color: ${props => props.theme.main};
      cursor: pointer;
      transform: scale(${props => {
            if(props.$active) {
                  return '0.9'
            } else if (props.$hovering) {
                  return '0.95'
            } else {
                  return '1'
            }
      }})
`