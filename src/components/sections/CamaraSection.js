import classNames from 'classnames';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import { useLazyAxios } from "use-axios-client";
import dataJson from '../../assets/tipos.json';
import { SectionProps } from '../../utils/SectionProps';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
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

  // Formulario
  const [assunto, setAssunto] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [anoInicio, setAnoInicio] = React.useState('');
  const [anoFim, setAnoFim] = React.useState('');
  const [autor, setAutor] = React.useState('');
  const [senado, setSenado] = React.useState('');
  const [siglaPartidoAutor, setSiglaPartidoAutor] = React.useState('');
  const [siglaUfAutor, setSiglaUfAutor] = React.useState('');

  const handleAssunto = (event) => {
    setAssunto(event.target.value);
  };
  const handleNumero = (event) => {
    setNumero(event.target.value);
  };
  const handleAnoInicio = (event) => {
    setAnoInicio(event.target.value);
  };
  const handleAnoFim = (event) => {
    setAnoFim(event.target.value);
  };
  const handleAutor = (event) => {
    setAutor(event.target.value);
  };
  const handleSenado = (event) => {
    setSenado(event.target.value);
  };
  const handleSiglaPartidoAutor = (event) => {
    setSiglaPartidoAutor(event.target.value);
  };
  const handleSiglaUfAutor = (event) => {
    setSiglaUfAutor(event.target.value);
  };

  console.log(
    assunto,
    numero,
    anoInicio,
    anoFim,
    autor,
    senado,
    siglaPartidoAutor,
    siglaUfAutor
  );

  // Pesquisa na API
  const config = {
    method: 'get',
    baseURL: "http://localhost:8080",
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      keywords: !!assunto ? assunto : "",
      // dataInicio: Date("2022-01-01"),
      // dataFim: Date("2022-12-31")
    }
  };

  const [getData, { data, error, loading }] = useLazyAxios(
    "/api/s/camara", config);
  //https://dadosabertos.camara.leg.br/api/v2/proposicoes/2342982


  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => {
    console.log("fechou")
    setShow(false);
  };
  const handleShow = () => setShow(true);

  // Classes CSS
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
      className={outerClasses}>
      <div className="container">
        <div className={tilesClasses}>
          <div
            className={innerClasses}>
            <div className={splitClasses}>
              <div className="d-flex align-items-stretch split-item">
                <div className="p-2 split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item ">
                  {/* <Form style={{ paddingBottom: '580px' }}> */}
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId=""
                        label="Assunto">
                        <Form.Control
                          type="text"
                          placeholder="Assunto"
                          value={assunto}
                          onChange={handleAssunto}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId=""
                        label="Autor"
                        className="mb-3">
                        <Form.Control
                          placeholder="Autor"
                          value={autor}
                          onChange={handleAutor} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Button variant="primary" onClick={handleShow}>
                      Seleciones os Tipos de Proposição
                    </Button>
                    <Modal
                      show={show}
                      onHide={handleClose}
                      size="lg"
                      scrollable={true}
                      style={{
                        zIndex: 9999
                      }}>
                      <Modal.Header closeButton>
                        <Modal.Title>Seleciones os tipos de proposta</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        {
                          dataJson && dataJson.length > 0 && dataJson.map((item) =>
                            <Form.Group as={Col} controlId="formGridZip">
                              <Form.Check type="checkbox" label={item.sigla + ' - ' + item.nome} />
                            </Form.Group>

                          )
                        }
                      </Modal.Body>
                      <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                          Cancelar
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                          Salvar
                        </Button>
                      </Modal.Footer>
                    </Modal>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId=""
                        label="Sigla do Partido"
                        className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Sigla do Partido"
                          value={siglaPartidoAutor}
                          onChange={handleSiglaPartidoAutor}
                        />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId=""
                        label="UF Autor"
                        className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="UF Autor"
                          value={siglaUfAutor}
                          onChange={handleSiglaUfAutor} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId=""
                        label="Número"
                        className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Número da proposição"
                          value={numero}
                          onChange={handleNumero} />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel
                        controlId=""
                        label="Ano Início"
                        className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ano Início"
                          value={anoInicio}
                          onChange={handleAnoInicio} />
                      </FloatingLabel>
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel
                        controlId=""
                        label="Ano Fim"
                        className="mb-3">
                        <Form.Control
                          type="text"
                          placeholder="Ano Fim"
                          value={anoFim}
                          onChange={handleAnoFim} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3"> &nbsp;&nbsp; Foi para o Senado
                    <Form.Group as={Col} controlId="formGridCity">
                      <Form.Check
                        type="checkbox"
                        label="Sim"
                        value={true}
                        onChange={handleSenado} />
                    </Form.Group>
                  </Row>
                  <br />
                  <Button variant="primary" type="button" onClick={() => getData()}>
                    Pesquisar
                  </Button>
                  &nbsp;
                  &nbsp;
                  <Button >
                    <a href='/' style={{ color: "#FFF" }}>Voltar</a>
                  </Button>
                  {/* </Form> */}
                </div>
                <div className='p-2 cta-position' data-reveal-container=".split-item" >
                  {loading &&
                    <span>Carregando...</span>}
                  {error &&
                    <span>{error.message}</span>}
                  {data &&
                    data.dados.map(camaraEntity =>
                      <span>
                        <h4>Ano: {camaraEntity.ano} / Número: {camaraEntity.numero}</h4>
                        <p className="m-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
                          {camaraEntity.ementa}
                        </p>
                        <a href={"http://www.camara.gov.br/proposicoesWeb/prop_mostrarintegra?codteor=" + camaraEntity.numero} target="_blank" style={{ color: "blue" }}>ver mais</a>
                      </span>
                    )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

CamaraSection.propTypes = propTypes;
CamaraSection.defaultProps = defaultProps;

export default CamaraSection;