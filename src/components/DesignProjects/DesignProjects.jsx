import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import DesignImg from '../Image/DesignImg';

const GradientOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  border-radius: 8px;
  /* background-color: rgba(0, 0, 0, 0.2); */
  background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0) 20%);
`;

const DesignProjects = () => {
  const { designProjects } = useContext(PortfolioContext);

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

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Design" />
          <Row>
            {designProjects.map((project) => {
              const { title, url, img, id } = project;

              return (
                <Col lg={4} sm={4} key={id} style={{ margin: '20px 0 ' }}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <a
                        href={url || '#!'}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
                        {/* <Tilt
                          options={{
                            reverse: false,
                            max: 8,
                            perspective: 1000,
                            scale: 1,
                            speed: 300,
                            transition: true,
                            axis: null,
                            reset: true,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                          }}
                        > */}
                        <div data-tilt className="thumbnail rounded">
                          <GradientOverlay />
                          <DesignImg alt={title} filename={img} />
                        </div>
                        {/* </Tilt> */}
                      </a>
                    </div>
                  </Fade>
                </Col>
              );
            })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default DesignProjects;
