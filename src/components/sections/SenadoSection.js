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

const SenadoSection = ({
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
                  <Form style={{ paddingBottom: '200px' }}>
                    <Row className="mb-3"> &nbsp;&nbsp; <h4>Situação</h4>
                      <Form.Group as={Col} controlId="formGridCity">
                        <Form.Check type="checkbox" label="Todas" />

                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridState">
                        <Form.Check type="checkbox" label="Em tramitação" />

                      </Form.Group>

                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Check type="checkbox" label="Tramitação encerrada" />
                      </Form.Group><br /><hr />
                      <h5>Tipos de matéria Legislativa</h5>
                    </Row>

                    <Row className="mb-3">
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Control type="email" placeholder="Assunto" />
                      </Form.Group>
                    </Row>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label=" Projeto de Lei Ordinária (PL, PLS, PLC)" />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridZip">
                      <Form.Check type="checkbox" label="Projeto de Resolução (PRS)" />
                    </Form.Group><hr />

                    <h5>Identificação de Matéria</h5>
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
                          <Form.Control type="text" placeholder="Password" />
                        </FloatingLabel>
                      </Form.Group>
                      <hr />
                    </Row>

                    <h5>Autoria</h5>
                    <Row className='mb-3'>
                      <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <Form.Check type="radio" label="Senadores" />
                      </Form.Group>
                      <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <Form.Select>
                          <Form.Control type="text" />
                          <option>Parlamentar</option>
                          <option value='1'>Senador 1</option>
                          <option value='2'>Senador 2</option>
                          <option value='3'>Senador 3</option>
                          <option value='4'>Senador 4</option>
                        </Form.Select>
                      </Form.Group>
                    </Row>
                    <Form.Check type="radio" label="Presidência da República" /><br />
                    <Row>
                      <Form.Group as={Col}>
                        <Form.Check as={Col} type="radio" label="Outro" />
                      </Form.Group>
                      <Form.Group as={Col}>
                        <Form.Control type="text" placeholder="Nome" />
                      </Form.Group>
                    </Row>
                    <hr />
                    <h5>Relatoria</h5>
                    <Form.Group>
                      <Form.Control type='text' placeholder='Nome do Relator' />
                    </Form.Group>
                    <hr />
                    <h5>Data de apresentação</h5>
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
                          <Form.Control type="text" placeholder="Password" />
                        </FloatingLabel>
                      </Form.Group>

                      <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <Form.Select className="mb-3" id="formGridCheckbox">
                          <Form.Control type="text" className="mb-3" id="formGridCheckbox" />
                          <option>Períodos</option>
                          <option value='1'>Hoje</option>
                          <option value='2'>Ontem</option>
                          <option value='3'>Semana passada</option>
                          <option value='4'>Últimos 30 dias</option>
                        </Form.Select>
                      </Form.Group>
                      <hr />
                    </Row>

                    <Row>
                      <h5>Temas</h5>
                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Select className="mb-3" id="formGridCheckbox">
                          <Form.Control type="text" className="mb-3" id="formGridCheckbox" />
                          <option>Classificação temática</option>
                          <option value='1'>Administração pública</option>
                          <option value='2'>Economia e Desenvolvimento</option>
                          <option value='3'>Honorífico</option>
                          <option value='4'>Infraestrutura</option>
                        </Form.Select>
                      </Form.Group>

                      <Form.Group className="mb-3" id="formGridCheckbox">
                        <Form.Select className="mb-3" id="formGridCheckbox">
                          <Form.Control type="text" className="mb-3" id="formGridCheckbox" />
                          <option>Conteúdo</option>
                          <option value='1'>Acórdão</option>
                          <option value='2'>Adendo de Plenário</option>
                          <option value='3'>Adendo em Comissão</option>
                          <option value='4'>Adiamento de apreciação de matéria</option>
                        </Form.Select>
                      </Form.Group>
                      <hr />
                    </Row>

                    <Row>
                      <h5>Norma Gerada</h5>
                      <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <Form.Select className="mb-3" id="formGridCheckbox">
                          <Form.Control type="text" className="mb-3" id="formGridCheckbox" />
                          <option>Tipo</option>
                          <option value='1'>Decreto-Lei</option>
                          <option value='2'>Decreto Legislativo</option>
                          <option value='3'>Decreto Legislativo do Congresso Nacional</option>
                          <option value='4'>Adiamento de apreciação de matéria</option>
                        </Form.Select>
                      </Form.Group>
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
                          <Form.Control type="text" placeholder="Password" />
                        </FloatingLabel>
                      </Form.Group>
                      <hr />
                    </Row>

                    <Row>
                      <h5>Pesquisa Textual</h5>
                      <Form.Control type="text" placeholder="Digite o termo a ser pesquisado" />
                    </Row>
                    <br />
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
                <div className='cta-position' data-reveal-container=".split-item" style={{ height: '105rem' }}>
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

SenadoSection.propTypes = propTypes;
SenadoSection.defaultProps = defaultProps;

export default SenadoSection;