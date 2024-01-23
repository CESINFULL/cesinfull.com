import lean_mind from '../images/lean-mind_sponsor.webp';
import ecovium from '../images/ecovium_sponsor.webp';
import catedraCaja from '../images/catedra-bob.webp';
import catedraSeguridad from '../images/catedra-ciberseguridad-ull.webp';
import catedraEdosoft from '../images/catedra-edosoft-ull.webp';
import gdgTenerife from '../images/gdg-tenerife.webp';
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
        <a href="https://ecovium.com/en/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] max-h-[300px] rounded"
            src={ecovium}
            alt="Foto del evento"
          />
        </a>
        <a href="https://leanmind.es/es/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={lean_mind}
            alt="Foto del evento"
          />
        </a>
        <a href="https://www.ull.es/catedras/catedrabob/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={catedraCaja}
            alt="Catedra Caja BOB"
          />
        </a>
        <a href="https://www.ull.es/catedras/catedra-ciberseguridad-binter/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={catedraSeguridad}
            alt=""
          />
        </a>
        <a href="https://www.ull.es/catedras/catedra-edosoft-computacion-nube/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={catedraEdosoft}
            alt=""
          />
        </a>
        <a href="https://gdg.community.dev/gdg-tenerife/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px] bg-white rounded"
            src={gdgTenerife}
            alt=""
          />
        </a>
        <a href="https://www.ull.es/centros/escuela-politecnica-superior-de-ingenieria/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px] bg-white rounded"
            src={politecnica}
            alt=""
          />
        </a>
        <a href="https://pythoncanarias.es/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={pythonCanarias}
            alt=""
          />
        </a>
        <a href="https://saosl.com/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] w-[350px] sm:max-h-[300px]"
            src={sao}
            alt=""
          />
        </a>
      </section>
    </>
  );
}
