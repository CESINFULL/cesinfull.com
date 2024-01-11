import lean_mind from '../images/lean-mind_sponsor.webp';
import ecovium from '../images/ecovium_sponsor.webp';

export default function Sponsors() {
  return (
    <>
      <h3 className="text-[7vw] sm:text-5xl text-center pb-8 font-bold">
        PATROCINADORES
      </h3>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-20 place-items-center pb-24">
        <a href="https://ecovium.com/en/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] max-h-[300px] rounded"
            src={ecovium}
            alt="Foto del evento"
          />
        </a>
        <a href="https://leanmind.es/es/">
          <img
            className="p-2 sm:p-0 sm:max-w-[400px] sm:max-h-[300px]"
            src={lean_mind}
            alt="Foto del evento"
          />
        </a>
      </section>
    </>
  );
}
