import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Input from '../elements/Input';
import { Link } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FloatingLabel from 'react-bootstrap/FloatingLabel';


const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false
}

const CamaraSection = ({
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

  const splitClasses = classNames(
    'split-wrap ',
    invertMobile && 'invert-mobile',
    invertDesktop && 'invert-desktop',
    alignTop && 'align-top'
  );


  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div className="container">
        <div className={tilesClasses}>

          <div
            className={innerClasses}
          >
            <div className={splitClasses}>
              <div className="split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item ">
                  <Form style={{paddingBottom:'580px'}}>
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="Assunto"
                          className="mb-3"
                        >
                          <Form.Control type="email" placeholder="Enter email" />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="PEC" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="PL" />
                    </Form.Group>
                    <br />
                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="Número"
                          className="mb-3"
                        >
                          <Form.Control type="email" placeholder="Enter email" />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridPassword">
                        <FloatingLabel
                          controlId="floatingTextarea"
                          label="Ano"
                          className="mb-3"
                        >
                          <Form.Control type="password" placeholder="Password" />
                        </FloatingLabel>
                      </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Autor"
                        className="mb-3"
                      >
                        <Form.Control placeholder="Apartment, studio, or floor" />
                      </FloatingLabel>
                    </Form.Group>

                    <Row className="mb-3"> &nbsp;&nbsp; Em tramitação
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Check type="checkbox" label="Todas" />

                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Check type="checkbox" label="Sim" />

                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Check type="checkbox" label="Não" />
                      </Form.Group>
                    </Row>

                    {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
                <div className='cta-position' data-reveal-container=".split-item"> 
                  <h2>Heading</h2>
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                    Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id. Anim dolor eu non cillum eiusmod eu mollit amet. Duis sunt do adipisicing id laborum elit occaecat fugiat.
                  </p>
                  <h2>Heading</h2>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                  Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id. Anim dolor eu non cillum eiusmod eu mollit amet. Duis sunt do adipisicing id laborum elit occaecat fugiat.
                </p>
                <h2>Heading</h2>
                <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                  Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id. Anim dolor eu non cillum eiusmod eu mollit amet. Duis sunt do adipisicing id laborum elit occaecat fugiat.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
}

CamaraSection.propTypes = propTypes;
CamaraSection.defaultProps = defaultProps;

export default CamaraSection;