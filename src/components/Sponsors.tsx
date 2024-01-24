import lean_mind from '../images/lean-mind_sponsor.webp';
import ecovium from '../images/ecovium_sponsor.webp';
import catedraCaja from '../images/catedra-bob.webp';
import catedraSeguridad from '../images/catedra-ciberseguridad-ull.webp';
import catedraEdosoft from '../images/catedra-edosoft-ull.webp';
import gdgTenerife from '../images/gdg-tenerife.webp';
import inetel from '../images/inetel.webp';
import politecnica from '../images/politecnica-ull.webp';
import pythonCanarias from '../images/python-canarias.webp';
import sao from '../images/sao.webp';

export default function Sponsors() {
  return (
    <>
      <h3 className="text-[7vw] sm:text-5xl text-center pb-8 font-bold">
        PATROCINADORES
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 place-items-center pb-24">
        <a href="https://www.ull.es/catedras/catedrabob/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={catedraCaja}
            alt="Cátedra Cajasiete Big Data, Open Data y Blockchain"
          />
        </a>
        <a href="https://www.ull.es/catedras/catedra-edosoft-computacion-nube/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={catedraEdosoft}
            alt="Cátedra Edosoft de Computación en la Nube e Inteligencia Artificial"
          />
        </a>
        <a href="https://www.ull.es/catedras/catedra-ciberseguridad-binter/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={catedraSeguridad}
            alt="Cátedra en Ciberseguridad Binter"
          />
        </a>
        <a href="https://ecovium.com/en/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] max-h-[300px] rounded"
            src={ecovium}
            alt="Ecovium"
          />
        </a>
        <a href="https://www.ull.es/centros/escuela-politecnica-superior-de-ingenieria/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px] bg-white rounded"
            src={politecnica}
            alt="Escuela Politécnica Superior de Ingeniería"
          />
        </a>
        <a href="https://gdg.community.dev/gdg-tenerife/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px] bg-white rounded"
            src={gdgTenerife}
            alt="GDG Tenerife"
          />
        </a>
        <a href="https://www.grupoinetel.com/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px] bg-white rounded"
            src={inetel}
            alt="Inetel"
          />
        </a>
        <a href="https://leanmind.es/es/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={lean_mind}
            alt="Lean Mind"
          />
        </a>
        <a href="https://pythoncanarias.es/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={pythonCanarias}
            alt="Python Canarias"
          />
        </a>
        <a href="https://saosl.com/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={sao}
            alt="SAO"
          />
        </a>
      </section>
    </>
  );
}
