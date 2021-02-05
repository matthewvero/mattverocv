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
      border-radius: ${props => props.theme.borderRadius};
      padding: 20px;
`

export const InfoCard = styled.section`
      ${cardStyles}
      border-radius: ${props => props.theme.borderRadius};
      width: 100%;
      height: 100%;
      padding: 10px 20px;
      grid-column: 1/3;
      display: grid;
      grid-template-rows: 30px;
      grid-auto-rows: auto;
      align-items: start;
      justify-items: center;
      background-color: ${props => props.theme.surface};
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
      display: flex; 
      flex-direction: row; 
      align-items: center; 
      justify-content: center; 
      border-radius: ${props => props.theme.borderRadius};
      background-color: ${props => props.theme.surface};
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

