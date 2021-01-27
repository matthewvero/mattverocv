import styled from 'styled-components';

export const HeaderContainer = styled.header`
      z-index: 10;
      position: fixed;
      width: 100vw;
      height: 100px;
      padding: 20px 15%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-sizing: border-box;
      background-color: white;
      @media (max-width: 1000px) {
            padding: 20px 15px;
      }
`;

export const HeaderMenuButton = styled.div`
      height: 50px;
      width: 50px;
      border-radius: 10px;
      background-color: #7510f7;
      box-sizing: border-box;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transform: scale(${props => props.$active ? '0.95' : '1'});
      transition: transform 100ms ease;
`


