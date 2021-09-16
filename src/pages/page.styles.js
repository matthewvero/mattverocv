/** @format */

import styled from 'styled-components/macro'


export const Page = styled.div`
      height: auto;
      min-height: 500px;
      width: 100%;
      display: grid;
      padding: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: start;
      box-sizing: border-box;
      will-change: transform opacity;

`

export const PageGrid = styled.section`
      height: auto;
      width: 70%;
      display: grid;
      box-sizing: border-box;
      gap: 1rem;
      margin-bottom: 20px;
      @media (max-width: 1200px) {
            width: 100%;
      }
     
`
export const PageShifter = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 100px;
      transition: transform 100ms;
      transform: translateY(${(props) => (props.$shift ? '100px' : '0')});
`
