import React from 'react';
import classNames from 'classnames';
import { SectionSplitProps, } from '../../utils/SectionProps';
import SectionHeader from './partials/SectionHeader';
import Image from '../elements/Image';
import ReactWordcloud from 'react-wordcloud';
import Input from '../elements/Input';
import { Link } from 'react-router-dom';

const callbacks = {
  getWordColor: word => word.value > 50 ? "green" : "blue",
  onWordClick: console.log,
  onWordMouseOver: console.log,
  getWordTooltip: word => `${word.text} (${word.value}) [${word.value > 50 ? "good" : "bad"}]`,
}
const options = {
  rotations: 2,
  rotationAngles: [-90, 0],
};
const size = [6, 8];
const words = [{ text: 'homicídio', value: 34, }, { text: '2021', value: 81, }, { text: '2022', value: 46, },
{ text: 'orçamento secreto', value: 34, }, { text: 'educação', value: 74, }, { text: 'saúde', value: 64, },
{ text: 'homicídio', value: 64, }, { text: 'Aposentadoria', value: 33, }, { text: 'Câmara Legislativa', value: 29, },
{ text: 'Senado Federal', value: 1, }, { text: 'Presidência', value: 7, }, { text: 'Presidente', value: 99, },
{ text: 'STF', value: 50, }, { text: 'Ministro', value: 50, }, { text: 'TSE', value: 50, }, { text: 'Eleições', value: 50, }];

const propTypes = {
  ...SectionSplitProps.types
}

const defaultProps = {
  ...SectionSplitProps.defaults
}

const FeaturesSplit = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  invertMobile,
  invertDesktop,
  alignTop,
  imageFill,
  ...props
}) => {

  const outerClasses = classNames(
    'features-split section',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'features-split-inner section-inner',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider'
  );

  const splitClasses = classNames(
    'split-wrap ',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );

  const sectionHeader = {
    // title: 'Principais pesquisas por temas',
    // paragraph: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum — semper quis lectus nulla at volutpat diam ut venenatis.'
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container fundo">
        <div className={innerClasses}>
          <SectionHeader data={sectionHeader} className="center-content" />
          <div className={splitClasses}>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item ">
                <p className="m-0 mb-32" data-reveal-delay="200">
                  Principais pesquisas
                </p>
                <div style={{ backgroundColor: "#fff", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", }}>
                  <ReactWordcloud
                    callbacks={callbacks}
                    options={options}
                    size={size}
                    words={words}
                  />
                </div>
              </div>
              <div className='split-item-image' data-reveal-container=".split-item">
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                  Cadetre-se e receba as nossas notícias
                </p>
                <div style={{ backgroundColor: "#fff", height: "300px", boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)", padding: "10px" }}>
                  <div>
                    <Input id="nome" type="text" label="Nome" labelHidden={true} hasIcon="left"
                      placeholder="Nome" size="sm">
                      <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" fill="#16B83E">
                        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm4.5 0a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm5 2.755C12.146 12.825 10.623 12 8 12s-4.146.826-5 1.755V14a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-.245z" />
                      </svg>
                    </Input>
                    <br />
                    <Input id="celular" type="tel" label="Celular" labelHidden={true} hasIcon="left"
                      placeholder="Celular" size="sm">
                      <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg" fill="#16B83E">
                        <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0zM1.807 4.734a.5.5 0 1 0-.884-.468A7.967 7.967 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A6.967 6.967 0 0 1 1 8c0-1.18.292-2.292.807-3.266zm13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A7.967 7.967 0 0 0 16 8a7.967 7.967 0 0 0-.923-3.734zM3.34 6.182a.5.5 0 1 0-.93-.364A5.986 5.986 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A4.986 4.986 0 0 1 3 8c0-.642.12-1.255.34-1.818zm10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818 0 .642-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8c0-.769-.145-1.505-.41-2.182z" />
                      </svg>
                    </Input>
                    <br />
                    <Input id="email" type="email" label="E-mail" labelHidden={true} hasIcon="left"
                      placeholder="E-mail" size="sm">
                      <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="#16B83E">
                        <path d="M9 8.5h2.793l.853.854A.5.5 0 0 0 13 9.5h1a.5.5 0 0 0 .5-.5V8a.5.5 0 0 0-.5-.5H9v1z" />
                        <path d="M12 3H4a4 4 0 0 0-4 4v6a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a4 4 0 0 0-4-4zM8 7a3.99 3.99 0 0 0-1.354-3H12a3 3 0 0 1 3 3v6H8V7zm-3.415.157C4.42 7.087 4.218 7 4 7c-.218 0-.42.086-.585.157C3.164 7.264 3 7.334 3 7a1 1 0 0 1 2 0c0 .334-.164.264-.415.157z" />
                      </svg>
                    </Input>
                  </div>
                  <div style={{
                    width: "100%",
                  }}>
                    <Link
                      style={{
                        width: "100%",
                        marginRight: "2%",
                        textAlign: "right",
                        marginTop: "25px",
                        backgroundColor: "#16B83E"
                      }} to="#0" className="float-right button button-secondary button-wide-mobile button-sm">Cadastrar</Link>
                  </div>
                </div>

              </div>
            </div>

            {/* <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-right" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='images/features-split-image-02.png'
                  alt="Features split 02"
                  width={528}
                  height={396} />
              </div>
            </div>

            <div className="split-item">
              <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item">
                <div className="text-xxs text-color-primary fw-600 tt-u mb-8">
                  Lightning fast workflow
                  </div>
                <h3 className="mt-0 mb-12">
                  Data-driven insights
                  </h3>
                <p className="m-0">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua — Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
              </div>
              <div className={
                classNames(
                  'split-item-image center-content-mobile reveal-from-bottom',
                  imageFill && 'split-item-image-fill'
                )}
                data-reveal-container=".split-item">
                <Image
                  src='images/features-split-image-03.png'
                  alt="Features split 03"
                  width={528}
                  height={396} />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

FeaturesSplit.propTypes = propTypes;
FeaturesSplit.defaultProps = defaultProps;

export default FeaturesSplit;