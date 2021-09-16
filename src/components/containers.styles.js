/** @format */

import styled from 'styled-components/macro'
import { InlineIcon } from '@iconify/react'
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
      border-radius: ${(props) => props.theme.borderRadius};
      padding: 10px;
`

export const InfoCard = styled.section`
      ${cardStyles}
      border-radius: ${(props) => props.theme.borderRadius};
      width: 100%;
      height: 100%;
      padding: 10px 30px;
      grid-column: 1/3;
      display: grid;
      align-items: start;
      justify-items: center;
      background-color: ${(props) => props.theme.surface};
      gap: 0.5rem;
      align-content: start;
      position: relative;
	box-shadow: inset 0 0 5px 1px #151515;
      @media (min-width: 1000px) {
            grid-column: auto;
      }
`

export const SkillCardIcon = styled(InlineIcon)`
      margin: 0 10px;
      color: ${(props) => props.theme.subText};
      transition: all 100ms ease;
`

export const SkillCard = styled.div`
	position: relative;
      width: 100%;
      height: 50px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: ${(props) => props.theme.borderRadius};
	transition: transform 200ms ease-out;
	&:before {
		content: '';
		width: 100%;
		height: 100%;
		position: absolute;
		top: 0;
		left: 0;
		background-color: ${(props) => props.theme.main};
		transform: skew(-10deg);
		border-radius: ${(props) => props.theme.borderRadius};
		box-shadow: 0 0 5px 1px #151515;
		z-index: -1;
	}
      &:hover ${SkillCardIcon} {
            font-size: 2rem;
            
      }

      @media(min-width: 650px) {
            width: 90%;
	margin: 0 5%;
      }

      
     

`

export const SkillCardsContainer = styled.div`
      width: 100%;
      height: auto;
      margin-bottom: 20px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      justify-content: space-between;
      gap: 1rem;

      @media (max-width: 650px) {
            grid-template-columns: 1fr 1fr;
            & ${SkillCard}:before {
		      transform: skew(0);
	      }
      }

	

      @media (min-width: 650px) {
            & ${SkillCard}:nth-of-type(even):before {
		      transform: skew(10deg);
	      }

            & ${SkillCard}:nth-of-type(even):hover ~ ${SkillCard}:nth-of-type(even) {
                  transform: translateY(80px);  
            }
      
            & ${SkillCard}:nth-of-type(odd):hover ~ ${SkillCard}:nth-of-type(odd) {
                  transform: translateY(80px);
            }
      }


`
