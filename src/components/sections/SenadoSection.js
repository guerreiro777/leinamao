import React, { useState } from 'react';
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
import { useLazyAxios } from 'use-axios-client';
import dataJson from '../../assets/tiposSenado.json';



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

  //Formulário 
  const [assunto, setAssunto] = React.useState('');
  const [numero, setNumero] = React.useState('');
  const [ano, setAno] = React.useState('');
  const [nome, setNome] = React.useState('');
  const [relator, setRelator] = React.useState('');
  const [siglas, setSiglas] = React.useState('');
  const [tramitacao, setTramitacao] = React.useState('');
  const [dataInicio, setDataInicio] = React.useState('');
  const [dataFim, setDataFim] = React.useState('');

  const handleAssunto = (event) => {
    setAssunto(event.target.value);
  };
  const handleNumero = (event) => {
    setNumero(event.target.value);
  };
  const handleAno = (event) => {
    setAno(event.target.value);
  };
  const handleNome = (event) => {
    setNome(event.target.value)
  };
  const handleRelator = (event) => {
    setRelator(event.target.value)
  };
  const handleSiglas = (event) => {
    setSiglas(event.target.value)
  };
  const handleTramitacao = (event) => {
    setTramitacao(event.target.value)
  };
  const handleDataInicio = (event) => {
    setDataInicio(event.target.value)
  };
  const handleDataFim = (event) => {
    setDataFim(event.target.value)
  };

  //Pesquisa na API
  const config = {
    method: 'get',
    baseURL: "http://localhost:8080",
    headers: {
      'Content-Type': 'application/json'
    },
    params: {
      palavraChave: assunto,
      numero: numero,
      ano: ano,
      tipoAutor: nome,
      nomeRelator: relator,
      siglasTipo: siglas,
      situacaoTramitacao: tramitacao,
      dataApresentacaoInicial: dataInicio,
      dataApresentacaoFinal: dataFim
    }
  };

  const [getData, { data, error, loading }] = useLazyAxios(
    "/api/s/senado", config);
  //https://legis.senado.leg.br/dadosabertos/materia/pesquisa/lista


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
      className={outerClasses}
    >
      <div className="container">
        <div className={tilesClasses}>

          <div
            className={innerClasses}
          >
            <div className={splitClasses}>
              <div className="d-flex align-items-stretch split-item">
                <div className="split-item-content center-content-mobile reveal-from-left" data-reveal-container=".split-item ">
                  {/* <Form style={{ paddingBottom: '200px' }}> */}
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        label="Assunto">
                        <Form.Control type="text"
                          placeholder="Assunto"
                          value={assunto}
                          onChange={handleAssunto} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  {/* <Form.Group as={Col} controlId="formGridZip">
                    <Form.Check type="checkbox" label="Projeto de Lei Ordinária (PL, PLS, PLC)" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Check type="checkbox" label="Projeto de Resolução (PRS)" />
                  </Form.Group> <br /> */}
                  {
                    dataJson && dataJson.length > 0 && dataJson.map((item) =>
                      <Form.Group as={Col} controlId="formGridZip">
                        <Form.Check type='checkbox' label={item.nome + " - " + item.descricao} />
                      </Form.Group>
                    )
                  }

                  {/* <h5>Identificação de Matéria</h5> */}
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Número"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="text"
                          value={numero}
                          onChange={handleNumero} />
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Ano"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Password"
                          value={ano}
                          onChange={handleAno} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3">

                  </Row>

                  {/* ALTERAR TIPO AUTOR */}
                  {/* <Row className=''>
                    <Form.Group as={Col} className="" id="formGridCheckbox">
                      <Form.Check type="radio" label="Senadores" />
                      <Form.Check as={Col} type="radio" label="Presidência da República" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                      <Form.Select className="mb-3 form-control-sm">
                        <Form.Control type="text" />
                        <option>Parlamentar</option>
                        <option value='1'>Senador 1</option>
                        <option value='2'>Senador 2</option>
                        <option value='3'>Senador 3</option>
                        <option value='4'>Senador 4</option>
                      </Form.Select>
                    </Form.Group>
                  </Row> */}
                  <Row>
                    {/* <Form.Group as={Col}>
                      <Form.Check as={Col} type="radio" label="Outro" />
                    </Form.Group> */}
                    <Form.Group as={Col}>
                      <FloatingLabel
                        label='Nome'>
                        <Form.Control
                          type="text"
                          placeholder="Nome"
                          value={nome}
                          onChange={handleNome} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row> <br />

                  {/* RELATORIA */}
                  <Form.Group>
                    <FloatingLabel
                      label='Relator'>
                      <Form.Control
                        type='text'
                        placeholder='Nome do Relator'
                        value={relator}
                        onChange={handleRelator} />
                    </FloatingLabel>
                  </Form.Group> <br />
                  {/* <h5>Data de apresentação</h5> */}
                  {/* <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Número"
                        className="mb-3"
                      >
                        <Form.Control type="email" placeholder='' />
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
                      <Form.Select className="mb-3 form-control-sm" id="formGridCheckbox">
                        <Form.Control type="text" className="mb-3" id="formGridCheckbox" />
                        <option>Períodos</option>
                        <option value='1'>Hoje</option>
                        <option value='2'>Ontem</option>
                        <option value='3'>Semana passada</option>
                        <option value='4'>Últimos 30 dias</option>
                      </Form.Select>
                    </Form.Group>
                  </Row> */}

                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Siglas"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Siglas"
                          value={siglas}
                          onChange={handleSiglas} />
                      </FloatingLabel>
                    </Form.Group>

                    <Form.Group as={Col} controlId="">
                      <FloatingLabel
                        controlId="floatingTextarea"
                        label="Tramitação"
                        className="mb-3"
                      >
                        <Form.Control
                          type="text"
                          placeholder="Tramitação"
                          value={tramitacao}
                          onChange={handleTramitacao} />
                      </FloatingLabel>
                    </Form.Group>
                  </Row>
                  <Row className="mb-3">
                    <Form.Group as={Col}
                      controlId=""
                      label="Data apresentação inicial">
                      <Form.Control
                        type="date"
                        placeholder="Data apresentacao inicial"
                        value={dataInicio}
                        onChange={handleDataInicio} />
                    </Form.Group>
                    <Form.Group as={Col}
                      controlId="formGridPassword">
                      <Form.Control
                        type="date"
                        placeholder="Data apresentacao final"
                        value={dataFim}
                        onChange={handleDataFim} />
                    </Form.Group>
                  </Row>

                  {/* <Row>
                    <h5>Norma Gerada</h5>
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                      <Form.Select className="mb-3 form-control-sm" id="formGridCheckbox">
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
                  </Row> */}
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
                <div className='p-2 cta-position' data-reveal-container=".split-item">
                  {loading &&
                    <span>Carregando...</span>
                  }
                  {error &&
                    <span>{error.message}</span>
                  }
                  {data &&
                    data.PesquisaBasicaMateria.Materias.Materia["Codigo"]["IdentificacaoProcesso"]
                    ["DescricaoIdentificacao"]["Sigla"]["Numero"]["Ano"]["Ementa"]["Autor"]
                    ["Data"]["UrlDetalheMateria"].map((senadoEntity) => 
                    <span>
                      <h4>Ano:{senadoEntity.ano} / Número: {senadoEntity.numero} </h4>
                      <p className='m-0 mb-32 reveal-from-bottom' data-reveal-delay="200">
                        {senadoEntity.Ementa}
                      </p>
                      <a href={"https://www25.senado.leg.br/web/atividade/materias?p_p_id=" + 
                      senadoEntity.numero} target="_blank" style={{color: "blue"}} >ver mais</a>
                    </span>
                  )                
                  }
                  {/* <h2>Heading</h2>
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
                  <a href='' style={{ color: "blue" }}>ver mais</a> */}
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