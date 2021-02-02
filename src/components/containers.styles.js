import styled from 'styled-components';
import { InlineIcon } from '@iconify/react';
const cardStyles = `
      width: 100%;
      height: auto;
      padding: 10px;
      box-sizing: border-box;
      display: flex; 
      flex-direction: column;
      align-items: center;
`

export const TitleCard = styled.header`
      ${cardStyles}
      justify-content: center;
      background-color: #7510f7;
      border-radius: ${props => props.theme.borderRadius};
      box-shadow: ${props => props.theme.boxShadow};
`

export const InfoCard = styled.section`
      ${cardStyles}
      border-radius: ${props => props.theme.borderRadius};
      box-shadow: ${props => props.theme.boxShadow};
      background-color: white;
      width: 100%;
      height: auto;
      min-height: 300px;
      padding: 10px 20px;
      grid-column: 1/3;
      display: flex;
      justify-content: start;
      @media (min-width: 1200px) {
            grid-column: auto;
      }
`

export const SkillCardIcon = styled(InlineIcon)`
      margin: 0 10px;
      color: ${props => props.theme.main};
      transition: transform 100ms ease;
`

export const SkillCard = styled.div`
      width: 100%; 
      height: 50px; 
      margin-bottom: 10px;
      box-shadow: ${props => props.theme.boxShadow}; 
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      justify-content: center; 
      border-radius: ${props => props.theme.borderRadius};
      &:hover ${SkillCardIcon} {
            transform: scale(2);
      }
      @media (min-width: 800px) {
            width: 48%;
      }
      
`;

export const SkillCardsContainer = styled.div`
      width: 100%;
      height: auto;
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-between;
`

