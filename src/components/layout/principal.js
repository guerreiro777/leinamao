import React from 'react';
import BackgroundImage from '../../images/background.png';
import NarcosLogo from '../../images/leis-ux.png';

const Principal = () => {
  return (
    <div id="principal" className="principal">
      <div className="content">
        <h2>As leis em um só lugar</h2>
        <p>
          Ache aqui os projetos que poderão ser lei e os que já são lei.
        </p>
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/3 lg:w-1/3 mb-4 px-2">
            <div className="mb-8 text-white">
              <div className="flex justify-between">
                <p className="font-bold">Cãmara Legislativa</p>
              </div>
              {/* <h2>São as leis aprovadas XPTO</h2> */}
              <p> teste teste teste </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 mb-4">
            <div className="mb-8 text-white">
             <div className="flex justify-between">
                <p className="font-bold">Senado Federal</p>
              </div>
              {/* <h2>São as leis aprovadas XPTO</h2> */}
              <p> teste teste teste </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 lg:w-1/3 mb-4 px-2">
            <div className="mb-8 text-white">
              <div className="flex justify-between">
                <p className="font-bold">Presidência</p>
              </div>
              {/* <h2>São as leis aprovadas XPTO</h2> */}
              <p> teste teste teste </p>
            </div>
          </div>
        </div>
        {/* <div className="button-wrapper">
          <a href="#" className="button-el">Câmara</a>
          <a href="#" className="button-el">Senado</a>&nbsp;&nbsp;&nbsp;&nbsp;
          <a href="#" className="button-el">Presidência</a>
        </div> */}
      </div>
      <div className="overlay" style={{ background: `url(${BackgroundImage})` }} />
    </div>
  )
}

export default Principal
