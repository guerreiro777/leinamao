import classNames from 'classnames';
import { toPlainObject } from 'lodash';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { SectionProps } from '../../utils/SectionProps';
import data from '../../assets/tipos.json'


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

  // const [data, setData] = useState([]);

  // const getData = () => {
  //   fetch('./tipos.json', {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json'
  //     }
  //   }
  //   )
  //     .then(function (response) {
  //       console.log(response)
  //       return response.json();
  //     })
  //     .then(function (myJson) {
  //       console.log(myJson);
  //       setData(myJson)
  //     });
  // }
  // useEffect(() => {
  //   getData()
  // }, [])

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
                    <div>
                    {
                      data && data.length > 0 && data.map((item) =>
                      // <p>{item.sigla}</p>
                        <Form.Group as={Col} controlId="formGridZip">
                          <Form.Check type="checkbox" label={item.sigla + ' - ' + item.nome} />
                        </Form.Group>

                      )
                    }
                    </div>
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
                    <br />

                    {/* <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                  </Form.Group> */}

                    <Button variant="primary" type="submit">
                      Submit
                    </Button>
                    &nbsp;
                    &nbsp;
                    <Button >
                      <a href='/' style={{ color: "#FFF" }}>Voltar</a>
                    </Button>
                  </Form>
                </div>
                <div className='cta-position' data-reveal-container=".split-item">
                  <h2>Heading</h2>
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                    Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id. Anim dolor eu non cillum eiusmod eu mollit amet. Duis sunt do adipisicing id laborum elit occaecat fugiat.
                  </p>
                  <a href='' style={{ color: "blue" }}>ver mais</a>
                  <h2>Heading</h2>
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                    Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id. Anim dolor eu non cillum eiusmod eu mollit amet. Duis sunt do adipisicing id laborum elit occaecat fugiat.
                  </p>
                  <a href='' style={{ color: "blue" }}>ver mais</a>
                  <h2>Heading</h2>
                  <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                    Lorem ipsum quis aute sit excepteur amet mollit. Minim veniam irure exercitation nulla mollit qui ex duis sit nulla velit eiusmod id. Anim dolor eu non cillum eiusmod eu mollit amet. Duis sunt do adipisicing id laborum elit occaecat fugiat.
                  </p>
                  <a href='' style={{ color: "blue" }}>ver mais</a>
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