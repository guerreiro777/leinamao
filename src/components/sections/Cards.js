import React from 'react';
import classNames from 'classnames';
import { SectionTilesProps } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Slider from 'react-slick';
import ReactCardCarousel from 'react-card-carousel';


const propTypes = {
  ...SectionTilesProps.types
}

const defaultProps = {
  ...SectionTilesProps.defaults
}

const Cards = ({
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
    paddingTop: '50px',
    textAlign: 'center',
    background: '#1e293b',
    // color: '#FFF',
    fontSize: '12px',
    // textTransform: 'uppercase',
    borderRadius: '10px',
  }

  const CARD_STYLE_second = {
    height: '200px',
    width: '200px',
    paddingTop: '50px',
    textAlign: 'center',
    background: '#1e293b',
    // color: '#FFF',
    fontSize: '12px',
    // textTransform: 'uppercase',
    borderRadius: '10px',
  }

  const CARD_STYLE_third = {
    height: '200px',
    width: '200px',
    paddingTop: '50px',
    textAlign: 'center',
    background: '#1e293b',
    // color: '#FFF',
    fontSize: '12px',
    // textTransform: 'uppercase',
    borderRadius: '10px'
  }

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={innerClasses}>
          {/* <SectionHeader data={sectionHeader} className="center-content" /> */}
          <div className={tilesClasses}>
            <div className="tiles-item reveal-from-right shadow" data-reveal-delay="200">
              <div className="tiles-item-inner" >
                <div className="testimonial-item-content textCard ">
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CARD_STYLE_first}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                    <div style={CARD_STYLE_first}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                    <div style={CARD_STYLE_first}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                  </ReactCardCarousel>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Principais notícias</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Câmara dos Dep</a>
                  </span>
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="tiles-item reveal-from-bottom shadow">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content textCard">
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CARD_STYLE_second}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                    <div style={CARD_STYLE_second}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                    <div style={CARD_STYLE_second}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                  </ReactCardCarousel>
                </div>
                <div className="testimonial-item-footer text-xs mt-32 mb-0 has-top-divider">
                  <span className="testimonial-item-name text-color-high">Principais notícias</span>
                  <span className="text-color-low"> / </span>
                  <span className="testimonial-item-link">
                    <a href="#0">Senado</a>
                  </span>
                </div>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="tiles-item reveal-from-left shadow" data-reveal-delay="200">
              <div className="tiles-item-inner">
                <div className="testimonial-item-content textCard">
                  <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
                    <div style={CARD_STYLE_third}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                    <div style={CARD_STYLE_third}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
                    </div>
                    <div style={CARD_STYLE_third}>
                      Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id.
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

Cards.propTypes = propTypes;
Cards.defaultProps = defaultProps;

export default Cards;