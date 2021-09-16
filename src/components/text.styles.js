/** @format */

import styled from 'styled-components/macro'

export const Title = styled.h1`
      font-size: 1.7rem;
      color: ${(props) => props.theme.text};
      margin: 0;
      font-weight: 400;
`

export const SubTitle = styled.h2`
      font-size: 1.5rem;
      color: ${(props) =>
            props.$location ? props.theme.main : props.theme.subText};
      font-weight: 400;
      margin: 0;
`

export const Text = styled.p`
      font-size: 1.3rem;
      color: ${(props) =>
            props.$hovering || props.$active
                  ? props.theme.main
                  : props.theme.subText};
      font-weight: 400;
      margin: 0;
      @media (max-width: 500px) {
            font-size: 1rem;
      }
`
