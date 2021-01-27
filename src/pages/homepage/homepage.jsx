
import React from 'react'
import { SkillCard, SkillCardIcon, SkillCardsContainer, TitleCard, InfoCard } from '../../components/containers.styles'
import { SubTitle, Text, Title } from '../../components/text.styles'
import { Page } from '../page.styles'
import reduxIcon from '@iconify-icons/simple-icons/redux';
import reactIcon from '@iconify-icons/simple-icons/react';
import javascriptIcon from '@iconify-icons/simple-icons/javascript';
import styledComponents from '@iconify-icons/simple-icons/styled-components';
import css3Icon from '@iconify-icons/simple-icons/css3';
import html5Icon from '@iconify-icons/simple-icons/html5';
import nodeDotJs from '@iconify-icons/simple-icons/node-dot-js';
import gitIcon from '@iconify-icons/simple-icons/git';
import firebaseIcon from '@iconify-icons/simple-icons/firebase';
import mongodbIcon from '@iconify-icons/simple-icons/mongodb';
import { HomepageGrid } from './homepage.styles';

const Homepage = () => {

      return (
            <Page>
                  <HomepageGrid>
                  
                        <TitleCard style={{gridColumn: '1/3', gridRow: '1/2', order: '1'}}>
                              <Title style={{marginBottom: '10px'}}>Junior Front End Developer</Title>
                              <hr style={{border: 'solid 1px white', width: '70%'}}/>
                              <SubTitle style={{marginTop: '0', width: '80%'}}>
                                    Front end developer with experience using the React ecosystem 
                                    to create responsive and easy to use SPAs
                              </SubTitle>
                        </TitleCard>
                        
                        <InfoCard style={{order: '2'}}>
                              <SubTitle style={{color: '#333333', margin: '5px 0'}}>About Me</SubTitle>
                              <hr style={{border: 'solid 1px #7510f7', width: '70%'}}/>
                        </InfoCard>
                        <InfoCard style={{order: '3'}}>
                              hi
                        </InfoCard>
                        <div style={{width: '100%', gridColumn: '1/3', order: '4'}}>
                              <Title style={{color: '#7510f7', marginBottom: '0'}}>
                                    Skills
                              </Title>
                              <hr style={{border: 'solid 1px #7510f7', width: '70%', marginBottom: '20px'}}/>
                        </div>
                        <SkillCardsContainer style={{gridColumn: '1/3', order: '5'}}>
                        
                              <SkillCard  >
                                    <Text>React</Text>
                                    <SkillCardIcon icon={reactIcon}/>
                              </SkillCard>
                              <SkillCard>
                                    <Text>Redux</Text>
                                    <SkillCardIcon icon={reduxIcon}/>
                              </SkillCard>
                              <SkillCard>
                                    <Text>JavaScript</Text>
                                    <SkillCardIcon icon={javascriptIcon} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>Styled-Components</Text>
                                    <SkillCardIcon icon={styledComponents} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>CSS</Text>
                                    <SkillCardIcon icon={css3Icon} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>HTML</Text>
                                    <SkillCardIcon icon={html5Icon} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>NodeJS</Text>
                                    <SkillCardIcon icon={nodeDotJs} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>Git / Version Control</Text>
                                    <SkillCardIcon icon={gitIcon} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>Firebase</Text>
                                    <SkillCardIcon icon={firebaseIcon} />
                              </SkillCard>
                              <SkillCard>
                                    <Text>MongoDB</Text>
                                    <SkillCardIcon icon={mongodbIcon} />
                              </SkillCard>
                        </SkillCardsContainer>
                  </HomepageGrid>
            </Page>
      )
}

export default Homepage


