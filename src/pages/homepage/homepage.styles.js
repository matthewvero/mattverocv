import styled from 'styled-components';

export const HomepageGrid = styled.div`
      height: 100%;
      width: 100%;
      display: grid;
      box-sizing: border-box;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;
      align-items: center;
      gap: 1rem;
      @media (min-width: 1000px) {
            width: 70%;
      }
`;