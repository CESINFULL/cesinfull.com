import logoCatedraBOB from '../images/catedra-cajasiete-bob.svg';
import logoCatedraCNIA from '../images/catedra-edosoft-cnia.svg';
import logoCatedraCiberSeg from '../images/catedra-binter-ciberseguridad.svg';
import logoEcovium from '../images/ecovium_sponsor.webp';
import logoESIT from '../images/esit.svg';
import logoGdgTenerife from '../images/gdg-tenerife.webp';
import logoInetel from '../images/inetel.webp';
import logoLeanMind from '../images/leanmind.svg';
import logoPythonCanarias from '../images/python-canarias.webp';
import logoSao from '../images/sao.webp';

export default function Sponsors() {
  return (
    <>
      <h3 className="text-[7vw] sm:text-5xl text-center pb-8 font-bold">
        PATROCINADORES
      </h3>
      <div className="flex flex-wrap justify-center">
        <h4 className="font-bold text-blue-500 text-center text-3xl w-full">Platino</h4>
        <div className="w-full p-2 md:w-1/2 xl:w-1/3">
          <a className="bg-white border-b-8 border-blue-500 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoEcovium}
              alt="Ecovium"
            />
          </a>
        </div>
        <div className="w-full p-2 md:w-1/2 xl:w-1/3">
          <a className=" bg-white border-b-8 border-blue-500 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoGdgTenerife}
              alt="GDG Tenerife"
            />
          </a>
        </div>
        <div className="w-full p-2 md:w-1/2 xl:w-1/3">
          <a className="bg-white border-b-8 border-blue-500 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoInetel}
              alt="Inetel"
            />
          </a>
        </div>
      </div>
      <div className="flex flex-wrap justify-center pt-6 pb-12">
        <h4 className="font-bold text-yellow-400 text-center text-3xl w-full">Oro</h4>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoCatedraBOB}
              alt="Cátedra Cajasiete Big Data, Open Data y Blockchain"
            />
          </a>
        </div>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className=" bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoCatedraCNIA}
              alt="Cátedra Edosoft de Computación en la Nube e Inteligencia Artificial"
            />
          </a>
        </div>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoCatedraCiberSeg}
              alt="Cátedra en Ciberseguridad Binter"
            />
          </a>
        </div>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoESIT}
              alt="Escuela Politécnica Superior de Ingeniería"
            />
          </a>
        </div>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoLeanMind}
              alt="Lean Mind"
            />
          </a>
        </div>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoPythonCanarias}
              alt="Python Canarias"
            />
          </a>
        </div>
        <div className="w-1/2 p-2 md:w-1/3 lg:w-1/4 xl:w-1/5">
          <a className="bg-white border-b-8 border-yellow-400 flex h-full items-center p-2 rounded w-full" href="#">
            <img
              className="block rounded w-full"
              src={logoSao}
              alt="SAO"
            />
          </a>
        </div>
      </div>
    </>
  );
}
