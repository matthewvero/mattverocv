import styled from 'styled-components/macro';
import {ReactComponent as LOGO} from '../../MAVLOGO.svg';
export const MAVLOGO = styled(LOGO)`
      height: 100%; 
      width: 100px; 
      cursor: pointer;
      grid-column: 2/3;
      @media (max-width: 1000px) {
            width: 70px;
      }
      transform: scale(${props => {
            if(props.$active) {
                  return '0.9'
            } else if (props.$hovering) {
                  return '0.95'
            } else {
                  return '1'
            }
      }});
      transition: all 100ms ease-out;
      filter: drop-shadow(10px);
`;

export const HeaderContainer = styled.header`
      z-index: 11;
      position: fixed;
      width: 100vw;
      height: 100px;
      padding: 20px 15%;
      display: grid;
      grid-template-columns: 2fr 1fr 2fr;
      box-sizing: border-box;
      background-color: white;
      box-shadow: ${props => props.theme.boxShadow};
      justify-items: center;
      @media (max-width: 1000px) {
            padding: 30px 15px;
            display: flex;
            justify-content: space-between;

      }
`;

export const HeaderLink = styled.div`
      height: 100%;
      width: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;   
      transform: scale(${props => props.$active ? '0.95' : '1'});
      transition: transform 50ms ease-out;   
`
export const HeaderNav = styled.nav`
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: ${props => props.right ? 'flex-start' : 'flex-end'};
      @media (max-width: 1000px) {
            display: none;
      }
`