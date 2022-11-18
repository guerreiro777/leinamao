import React, { useState } from 'react';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import ButtonGroup from '../elements/ButtonGroup';
import Button from '../elements/Button';
import Image from '../elements/Image';
import Modal from '../elements/Modal';

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
              As <span className="text-color-primary">Leis</span> em um só lugar
            </h1>
            <div className="container-xs">
              <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="400">
                Ache aqui os projetos que poderão ser lei e os que já são lei.
              </p>
              <div className="reveal-from-bottom" data-reveal-delay="600">

                <ButtonGroup>
                  <div>
                    <div className="tiles-item reveal-from-right colorHero" data-reveal-delay="200">
                      <div className="tiles-item-inner">
                        {/* <div className="testimonial-item-content"> */}
                          <p className="text-sm mb-0">
                            Câmara Legislativa
                          </p>
                        {/* </div> */}
                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                          <span className="testimonial-item-name text-color-high">Clique </span>
                          <span className="testimonial-item-link">
                            <a href="#0"> aqui</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  &nbsp;
                  <div >
                    <div className="tiles-item reveal-from-right colorHero" data-reveal-delay="200">
                      <div className="tiles-item-inner">
                        {/* <div className="testimonial-item-content"> */}
                          <p className="text-sm mb-0">
                            Senado Federal
                          </p>
                        {/* </div> */}
                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                          <span className="testimonial-item-name text-color-high">Clique</span>
                          <span className="testimonial-item-link">
                            <a href="#0"> aqui</a>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                    &nbsp;
                  <div>
                    <div className="tiles-item reveal-from-right colorHero" data-reveal-delay="200">
                      <div className="tiles-item-inner">
                        {/* <div className="testimonial-item-content"> */}
                          <p className="text-sm mb-0">
                            Presidência
                          </p>
                        {/* </div> */}
                        <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                          <span className="testimonial-item-name text-color-high">Clique</span>
                          <span className="testimonial-item-link">
                            <a href="#0"> aqui</a>
                          </span>
                        </div>
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