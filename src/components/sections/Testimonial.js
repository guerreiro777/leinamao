import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Slider from 'react-slick';
import ReactCardCarousel from 'react-card-carousel';

const dots = {
  value: true
}
const infinite = {
  value: true
}
const slidesToShow = [1]
const slidesToScroll = [1]


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Testimonial = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  pushLeft,
  ...props
}) => {

  const outerClasses = classNames(
    'testimonial section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'testimonial-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  const sectionHeader = {
    title: 'Veja aqui as principais notícias',
  };

  const CARD_STYLE_first = {
    height: '200px',
    width: '200px',
    paddingTop: '80px',
    textAlign: 'center',
    background: '#FFE11F',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',
  }

  const CARD_STYLE_second = {
    height: '200px',
    width: '200px',
    paddingTop: '80px',
    textAlign: 'center',
    background: '#1651B8',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px',
  }

  const CARD_STYLE_third = {
    height: '200px',
    width: '200px',
    paddingTop: '80px',
    textAlign: 'center',
    background: '#16B83E',
    color: '#FFF',
    fontSize: '12px',
    textTransform: 'uppercase',
    borderRadius: '10px'
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        {/* 
        [<Slider
          dots={dots}
          infinite={infinite}
          slidesToShow={slidesToShow}
          slidesToScroll={slidesToScroll}
        />] */}

        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right shadow" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CARD_STYLE_first}>
                      First Card
                    </div>
                    <div style={CARD_STYLE_first}>
                      Second Card
                    </div>
                    <div style={CARD_STYLE_first}>
                      Third Card
                    </div>
                  </ReactCardCarousel>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Principais notícias</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Deputados</a>
                  </span>
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="tiles-item reveal-from-bottom shadow">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CARD_STYLE_second}>
                      First Card
                    </div>
                    <div style={CARD_STYLE_second}>
                      Second Card
                    </div>
                    <div style={CARD_STYLE_second}>
                      Third Card
                    </div>
                  </ReactCardCarousel>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Principais notícias</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Senadores</a>
                  </span>
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="tiles-item reveal-from-left shadow" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content">
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CARD_STYLE_third}>
                      First Card
                    </div>
                    <div style={CARD_STYLE_third}>
                      Second Card
                    </div>
                    <div style={CARD_STYLE_third}>
                      Third Card
                    </div>
                  </ReactCardCarousel>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Principais notícias</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Presidência</a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

Testimonial.propTypes = propTypes;
Testimonial.defaultProps = defaultProps;

export default Testimonial;