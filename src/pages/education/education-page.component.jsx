/** @format */

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { InfoCard, TitleCard } from '../../components/containers.styles';
import { HR, WebLink } from '../../components/misc.styles';
import { SubTitle, Text, Title } from '../../components/text.styles';
import { Page } from '../page.styles';
import { EducationPageGrid } from './education-page.styles';
import withTouchAnimator from '../../HOCs/with-touch-animator';
import { Button } from '../../components/button.styles';
import { withRouter } from 'react-router-dom';
import { usePageChanger } from '../../ui-custom-hooks';
const EducationPage = () => {
      const theme = useContext(ThemeContext);
      const ButtonTouch = withTouchAnimator(Button);
      const [goToPage] = usePageChanger();
      return (
            <Page id="education" className="page" data-page-url="/education">
                  <EducationPageGrid>
                        <TitleCard style={{ gridColumn: '1/3' }}>
                              <Title>Education</Title>
                        </TitleCard>

                        <InfoCard>
                              <SubTitle
                                    style={{
                                          color: theme.main,
                                          margin: '5px 0',
                                    }}
                              >
                                    Front End Development
                              </SubTitle>
                              <HR $header />
                              <Text>
                                    I have learnt front end development using a
                                    range of resources, including:
                              </Text>
                              <ul
                                    style={{
                                          listStyleType: 'none',
                                          padding: '0',
                                          margin: '10px auto',
                                          width: '70%',
                                    }}
                              >
                                    <li>
                                          <Text>Udemy Courses</Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>YouTube</Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>Code Academy</Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>
                                                Reading repositories e.g.{' '}
                                                <WebLink
                                                      href="https://github.com/withspectrum/spectrum"
                                                      target="_blank"
                                                      rel="noopener noreferrer"
                                                >
                                                      Spectrum
                                                </WebLink>{' '}
                                                repository.
                                          </Text>
                                    </li>
                              </ul>
                        </InfoCard>

                        <InfoCard>
                              <SubTitle
                                    style={{
                                          color: theme.main,
                                          margin: '5px 0',
                                    }}
                              >
                                    Courses I've taken:
                              </SubTitle>
                              <HR $header />
                              <ul
                                    style={{
                                          listStyleType: 'none',
                                          padding: '0',
                                          margin: '0',
                                    }}
                              >
                                    <li>
                                          <Text>
                                                The Complete Developer Bootcamp
                                          </Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>
                                                The Advanced Developer Bootcamp
                                          </Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>
                                                The Complete React Developer
                                          </Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>
                                                The Complete Javascript Course
                                          </Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                              </ul>
                              <Text>
                                    Following tutorials is no substitute for
                                    practise, so I have created multiple
                                    projects to hone my skills
                              </Text>
                              <ButtonTouch
                                    style={{ margin: '5px' }}
                                    fn={() => goToPage('/projects')}
                              >
                                    <Text>See my projects</Text>
                              </ButtonTouch>
                        </InfoCard>

                        <InfoCard>
                              <SubTitle
                                    style={{
                                          color: theme.main,
                                          margin: '5px 0',
                                    }}
                              >
                                    What I love about React
                              </SubTitle>
                              <HR $header />
                              <ul
                                    style={{
                                          listStyleType: 'none',
                                          padding: '0',
                                          margin: '0',
                                    }}
                              >
                                    <li>
                                          <Text>Uni-directional data flow</Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>
                                                Component based architecture
                                          </Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>
                                                State management with Redux
                                          </Text>
                                    </li>
                                    <HR style={{ margin: '10px auto' }} />
                                    <li>
                                          <Text>Hooks!</Text>
                                    </li>
                              </ul>
                        </InfoCard>
                        <InfoCard>
                              <SubTitle
                                    style={{
                                          color: theme.main,
                                          margin: '5px 0',
                                    }}
                              >
                                    What I want to learn going forward
                              </SubTitle>
                              <HR $header />
                              <Text>
                                    I love the ReactJS ecosystem and plan to
                                    learn React Native going forward so that I
                                    can develop with it across multiple
                                    platforms.
                              </Text>
                              <Text>
                                    I am able to put together a useable,
                                    responsive UX/UI and create a page to the
                                    spec provided by a designer, but am keen to
                                    improve my knowledge of the UX/UI design
                                    process.
                              </Text>
                        </InfoCard>
                  </EducationPageGrid>
            </Page>
      );
};

export default withRouter(EducationPage);
