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
`;

export const HeaderContainer = styled.header`
      z-index: 10;
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

export const HeaderMenuButton = styled.div`
      height: 50px;
      width: 50px;
      border-radius: ${props => props.theme.borderRadius};
      background-color: white;
      box-sizing: border-box;
      justify-content: center;
      align-items: center;
      border: 3px solid ${props => props.theme.main};
      cursor: pointer;
      transform: scale(${props => props.$active ? '0.98' : '1'});
      transition: transform 100ms ease-in;
      user-select: none;
      display: none;
      @media (max-width: 1000px) {
            display: flex;
      }
`

export const HeaderLink = styled.div`
      height: 100%;
      width: 30%;
      display: flex;
      align-items: center;
      justify-content: center;
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