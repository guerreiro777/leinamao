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

const PRta = ({
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
                  <Form style={{ paddingBottom: '580px' }}>
                    <h5>Legislação Federal Brasileira</h5>
                    <Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <p>Tipo:</p>
                        <Form.Select>
                          <option>Pesquisa o tipo do ato</option>
                          <option value='1'>Teste1</option>
                        </Form.Select>
                      </Form.Group>
                    </Row><br />

                    <Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <p>Situação</p>
                        <Form.Select>
                          <option>Pesquisa a Situação do ato</option>
                          <option value='1'>Teste1</option>
                        </Form.Select>
                      </Form.Group>
                    </Row><br />

                    <Row>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Control type='text' placeholder='De:' />
                      </Form.Group>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Control type='text' placeholder='Até:' />
                      </Form.Group>
                    </Row>
                    <br />

                    <Row className="mb-3">
                      <p>Presidente em exercício:</p>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Responsável pela assinatura" />
                      </Form.Group>

                    </Row>

                    <Row className="mb-3">
                      <p>Referenda Ministerial:</p>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="text" placeholder="Nome ou parte do nome da Referenda Ministerial" />
                      </Form.Group>
                    </Row><br />
                    <p>Origem:</p>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="DEFENSORIA PÚBLICA DA UNIÃO" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="EXECUTIVO" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label=" INICIATIVA POPULAR " />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="JUDICIÁRIO" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="LEGISLATIVO" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label=" MIN. PÚBLICO DA UNIÃO " />
                    </Form.Group>
                    <br />

                    <p>Fonte de publicação:</p>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="D.O.U" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="D.O.U Extra" />
                    </Form.Group><hr />

                    {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                  </Form>
                </div>
                <div className='PRta-position' data-reveal-container=".split-item" style={{height:'90rem'}}>
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

PRta.propTypes = propTypes;
PRta.defaultProps = defaultProps;

export default PRta;