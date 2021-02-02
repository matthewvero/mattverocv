import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100%;
  width: 100%;
  display: grid; 
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  box-sizing: border-box;
  overflow: scroll;
`;

export const PageGrid = styled.div`
      height: auto;
      width: 100%;
      display: grid;
      box-sizing: border-box;
      gap: 1rem;
      @media (min-width: 1000px) {
            width: 70%;
      }
`;
