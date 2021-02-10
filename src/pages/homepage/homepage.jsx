
import React, { useContext } from 'react'
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
import { ThemeContext } from 'styled-components/macro';
import {Button} from '../../components/button.styles.js';
import { withRouter } from 'react-router-dom';
import {HR} from '../../components/misc.styles.js'
import withTouchAnimator from '../../HOCs/with-touch-animator';
const Homepage = ({history}) => {
      const theme = useContext(ThemeContext);
      const ButtonTouch = withTouchAnimator(Button)
      return (
            <Page>
                        <HomepageGrid>
                        
                              <TitleCard style={{gridColumn: '1/3', gridRow: '1/2', order: '1'}}>
                                    <Title style={{marginBottom: '10px'}}>Junior Front End Developer</Title>
                                    <HR header />
                                    <SubTitle style={{marginTop: '10px'}}>
                                          Front end developer with experience using the React ecosystem 
                                          to create responsive and easy to use SPAs
                                    </SubTitle>
                              </TitleCard>
                              
                              <InfoCard style={{order: '2', paddingBottom: '90px'}}>
                                    <SubTitle style={{color: theme.main, margin: '5px 0'}}>About Me</SubTitle>
                                    <HR header />
                                    <Text style={{marginBottom: '10px'}}>
                                          I'm Matt Vero, a self taught front end developer motivated by a passion for learning,
                                          fast-paced work and asking lots of questions.   
                                    </Text>
                                    <Text>
                                          I have many long term goals but No.1 on my list is to become a crucial, 
                                          valued member of a team doing work I genuinely believe in. 
                                    </Text>
                                    <ButtonTouch style={{margin: '10px 0', position: 'absolute', bottom: '10px'}} fn={() => history.push('/about')}>
                                          <Text style={{color: theme.main}}>See More...</Text>
                                    </ButtonTouch>
                              </InfoCard>
                              <InfoCard style={{order: '3', paddingBottom: '90px'}}>
                                    <SubTitle style={{color: theme.main, margin: '5px 0'}}>Education</SubTitle>
                                    <HR header />
                                    <Text style={{marginBottom: '10px'}}>
                                          I have learned everything front end using the extensive resources on the internet, 
                                          including multiple Udemy Courses, YouTube, MDN etc. and fell in love with developing in the process. 

                                    </Text>
                                    <Text>
                                          Originally I went to college to do engineering but found the pace to be too slow for me, 
                                          so once I passed I started working part time and began learning to code. 

                                    </Text>
                                    <ButtonTouch style={{margin: '10px 0', position: 'absolute', bottom: '10px'}} fn={() => history.push('/education')}>
                                          <Text style={{color: theme.main}}>See More...</Text>
                                    </ButtonTouch>
                              </InfoCard>
                              <div style={{width: '100%', gridColumn: '1/3', order: '4', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                                    <Title style={{color: theme.text, marginBottom: '0'}}>
                                          Skills
                                    </Title>
                                    <HR header/>
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

export default withRouter(Homepage);


