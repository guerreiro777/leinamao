import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

import { useLocation, Switch } from 'react-router-dom';


const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  }

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  }

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'hero-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container-sm">
        <div className={innerClasses}>
          <div className="hero-content">
            <h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
              As <span style={{ color: "#16B83E" }}>Leis</span> em um só lugar
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Ache aqui os projetos que poderão ser lei e os que já são lei.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">

                <ButtonGroup>
                  <div>
                    <div className="tiles-item reveal-from-right colorHero" data-reveal-delay="200">
                      <div className="tiles-item-inner" style={{ fontWeight: "bold", width: "100%", color: "white", backgroundColor: "#FFE11F", height: "80%" }}>
                        <p className="text-sm mb-0">
                          Câmara Legislativa
                        </p>
                      </div>
                      <div>
                        <span className="testimonial-item-name text-color-high"></span>
                        <span className="testimonial-item-link ">
                          <Switch>
                            <a  href="camara"
                              style={{
                                position: "relative",
                                top: "25px",
                                transition: ".3s ease",
                              }}
                              className='has-icon'> <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                              </svg>
                            </a>
                          </Switch>
                        </span>
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div>
                    <div className="tiles-item reveal-from-right colorHero" data-reveal-delay="200">
                      <div className="tiles-item-inner" style={{ fontWeight: "bold", width: "100%", color: "white", backgroundColor: "#1651B8", height: "80%" }}>
                        <p className="text-sm mb-0">
                          Senado Federal
                        </p>
                      </div>
                      <div>
                        <span className="testimonial-item-name text-color-high"></span>
                        <span className="testimonial-item-link ">
                          <a href="senado"
                            style={{
                              position: "relative",
                              top: "25px",
                              transition: ".3s ease",
                            }}
                            className='has-icon'> <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div>
                    <div className="tiles-item reveal-from-right colorHero" data-reveal-delay="200">
                      <div className="tiles-item-inner" style={{ fontWeight: "bold", width: "100%", color: "white", backgroundColor: "#16B83E", height: "80%" }}>
                        <p className="text-sm mb-0">
                          Presidência
                        </p>
                      </div>
                      <div>
                        <span className="testimonial-item-name text-color-high"></span>
                        <span className="testimonial-item-link ">
                          <a href="presidencia"
                            style={{
                              position: "relative",
                              top: "25px",
                              transition: ".3s ease",
                            }}
                            className='has-icon'> <svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" fill="currentColor" className="bi bi-arrow-down-circle-fill" viewBox="0 0 16 16">
                              <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v5.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V4.5z" />
                            </svg></a>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* <Button tag="a" color="primary" wideMobile href="https://cruip.com/">
                    Get started
                    </Button>
                  <Button tag="aLegislativa" color="dark" wideMobile href="https://github.com/cruip/open-react-template/">
                    View on Github
                    </Button> */}
                </ButtonGroup>
                {/* 
                
                */}

              </div>
            </div>
          </div>
          <div className="hero-figure reveal-from-bottom illustration-element-01" data-reveal-value="20px" data-reveal-delay="800">
            <a
              data-video="https://player.vimeo.com/video/174002812"
              href="#0"
              aria-controls="video-modal"
              onClick={openModal}
            >
              {/* <Image
                className="has-shadow"
                src='images/video-placeholder.jpg'
                alt="Hero"
                width={896}
                height={504} /> */}
            </a>
          </div>
          <Modal
            id="video-modal"
            show={videoModalActive}
            handleClose={closeModal}
            video="https://player.vimeo.com/video/174002812"
            videoTag="iframe" />
        </div>
      </div>
    </section>
  );
}

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;