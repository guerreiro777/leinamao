import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import Button from '../elements/Button';

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const Cta = ({
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
  pushLeft,
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

  const tilesClasses = classNames(
    'tiles-wrap',
    pushLeft && 'push-left'
  );

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">

        <div
          className={innerClasses}
        >
          <div className={tilesClasses}>

            <div>
              <div>
                <Button id="ano" label="Ano" labelHidden={true} size="sm" className='cta-width'>Ano</Button>
              </div>
              &nbsp;
              <div>
                <Button id="key" label="Key" labelHidden={true} size="sm" className='cta-width'>Palavra-Chefe</Button>
              </div>
              &nbsp;
              <div>
                <Button id="deputados" label="Deputados" labelHidden={true} size="sm" className='cta-width'>Deputados</Button>
              </div>
              &nbsp;
              <div>
                <Button id="email" label="E-mail" labelHidden={true} size="sm" className='cta-width'>Status</Button>
              </div>
            </div>
            <div>
              <div className='split-item-image' data-reveal-container=".split-item">
                <h2>Heading</h2>
                <p>
                  
                </p>

              </div>
            </div>

            {/* <div className="cta-slogan">
            <h3 className="m-0">
              For previewing layouts and visual?
              </h3>
          </div>
          <div className="cta-action">
            <Input id="newsletter" type="email" label="Subscribe" labelHidden hasIcon="right" placeholder="Your best email">
              <svg width="16" height="12" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 5H1c-.6 0-1 .4-1 1s.4 1 1 1h8v5l7-6-7-6v5z" fill="#376DF9" />
              </svg>
            </Input>
          </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;