import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import styled from 'styled-components';
import ReactPlayer from 'react-player/youtube';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';

const StyledTab = styled(Tab)`
  color: #333333;
  border: none;
  border-radius: 8px;
  padding: 8px 24px;
  margin: 8px;
  font-size: 14px;
  font-weight: 600;
  &:focus {
    outline: none;
  }
`;

const StyledTabList = styled(TabList)`
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
  margin-top: -20px;
`;

const WebProjects = () => {
  const { webProjects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const handleTabClick = (e) => {
    // console.log(e.currentTarget.tabIndex);
    console.log(e.currentTarget.tabIndex);
  };

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Web" />
          <Tabs>
            <StyledTabList>
              <StyledTab onClick={handleTabClick}>Cevnn</StyledTab>
              <StyledTab onClick={handleTabClick}>Cevnn Dashboard</StyledTab>
              <StyledTab onClick={handleTabClick}>MADD Checkout</StyledTab>
              <StyledTab onClick={handleTabClick}>Creation Crate</StyledTab>
              <StyledTab onClick={handleTabClick}>Reddit Clone</StyledTab>
            </StyledTabList>
            <TabPanels>
              {webProjects.map((project) => {
                const { title, info, info2, url, repo, id, video, tags, img } = project;
                return (
                  <TabPanel key={id}>
                    <Row style={{ alignItems: 'center', justifyContent: 'center' }}>
                      <Col lg={5} sm={12}>
                        <Fade
                          left={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={500}
                          distance="30px"
                        >
                          <div className="project-wrapper__text">
                            <h3 className="project-wrapper__text-title">
                              {title || 'Project Title'}
                            </h3>
                            <div className="project__tag-wrapper">
                              {tags.map((tag) => {
                                return (
                                  <>
                                    <span className="project__tag">#{tag}</span>
                                  </>
                                );
                              })}
                            </div>
                            <div>
                              <p>
                                {info ||
                                  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                              </p>
                              <p className="mb-4">{info2 || ''}</p>
                            </div>
                            {url && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn cta-btn--hero"
                                href={url || '#!'}
                              >
                                See Live
                              </a>
                            )}

                            {repo && (
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-btn text-color-main"
                                href={repo}
                              >
                                <i className="fa fa-github fa-lg" style={{ marginRight: '6px' }} />
                                Source Code
                              </a>
                            )}
                          </div>
                        </Fade>
                      </Col>
                      <Col lg={7} sm={12}>
                        <Fade
                          right={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={1000}
                          distance="30px"
                        >
                          <div className="project-wrapper__image-web">
                            <div data-tilt className="thumbnail rounded">
                              {img && (
                                <div className="border__gray">
                                  <ProjectImg
                                    alt={title}
                                    filename={img}
                                    style={{ borderRadius: '8px', border: 'solid 1px #EDEDEF' }}
                                  />
                                </div>
                              )}
                              {video && (
                                <ReactPlayer
                                  style={{ backgroundColor: 'white' }}
                                  className="react-player"
                                  url={video}
                                  playing
                                  loop
                                  muted
                                  controls={false}
                                  config={{
                                    youtube: {
                                      playerVars: { showinfo: 1 },
                                    },
                                  }}
                                />
                              )}
                            </div>
                          </div>
                        </Fade>
                      </Col>
                    </Row>
                  </TabPanel>
                );
              })}
            </TabPanels>
          </Tabs>
        </div>
      </Container>
    </section>
  );
};

export default WebProjects;
