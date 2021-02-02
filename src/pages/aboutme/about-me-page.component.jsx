import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { InfoCard, TitleCard } from '../../components/containers.styles'
import { SubTitle, Text, Title } from '../../components/text.styles'
import { Page } from '../page.styles'
import { AboutMePageGrid } from './about-me-page.styles'

const AboutMePage = () => {
      const theme = useContext(ThemeContext);

      return (
            <Page>
                  <AboutMePageGrid>
                        <TitleCard style={{gridColumn: '1/3', order: '1'}}>
                              <Title>About Me</Title>
                        </TitleCard>
                        <InfoCard style={{order: 2}}>
                              <SubTitle style={{color: theme.main}}>
                                    Introduction
                              </SubTitle>
                              <hr style={{border: 'solid 1px #7510f7', width: '70%'}}/>

                              <Text style={{marginBottom: '10px'}}>
                                    I'm Matt Vero, a self taught front end developer motivated by a passion for learning,
                                    fast-paced work and asking lots of questions.   

                              </Text>
                              <Text style={{marginBottom: '10px'}}>
                                    I really enjoy working amongst a team and love solving problems in fast paced environments, 
                                    especially when surrounded by supportive, like-minded team members.  
                              </Text>
                        </InfoCard>
                        <InfoCard style={{order: '3'}}>
                              <SubTitle style={{color: theme.main}}>
                                    Goals
                              </SubTitle>
                              <hr style={{border: 'solid 1px #7510f7', width: '70%', color: theme.main}}/>
                              
                              <Text>Become a crucial and valued member of a team.</Text>
                              <hr style={{border: 'solid 1px #dddddd', width: '30%', color: theme.main}}/>
                              
                              <Text>Be known as an expert in my field.</Text>
                              <hr style={{border: 'solid 1px #dddddd', width: '30%', color: theme.main}}/>

                              <Text>Learn from the best.</Text>
                              <hr style={{border: 'solid 1px #dddddd', width: '30%', color: theme.main}}/>

                              <Text>Create work my team and I can be proud of.</Text>
                              <hr style={{border: 'solid 1px #dddddd', width: '30%', color: theme.main}}/>

                              <Text>Make it look easy.</Text>
                              <hr style={{border: 'solid 1px #dddddd', width: '30%', color: theme.main}}/>
                        </InfoCard>
                        <InfoCard style={{order: '4', gridColumn: '1/3'}}>
                              <SubTitle style={{color: theme.main}}>
                                    Personal Time
                              </SubTitle>
                              <hr style={{border: 'solid 1px #7510f7', width: '70%', color: theme.main}}/>
                              
                              <Text style={{marginBottom: '10px'}}>
                                    When I'm not working on becoming the *best front end developer ever* 
                                    <br/>
                                    I'm usually engrossed in one of my hobbies! 
                              </Text>
                              <Text style={{marginBottom: '10px'}}>
                                    3D printing, gaming (tabletop / video), trying to grow plants etc. 
                                    <br/>
                                    Usually whichever takes my fancy on that week. 
                              </Text>
                        </InfoCard>
                  </AboutMePageGrid>
            </Page>
      )
}

export default AboutMePage
