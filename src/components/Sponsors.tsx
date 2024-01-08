import lean_mind from '../images/lean-mind_sponsor.webp';
import ecovium from '../images/ecovium_sponsor.webp';

export default function Sponsors() {
  return (
    <>
      <h1 className="text-5xl text-center pb-2 font-bold">PATROCINADORES</h1>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 place-items-center pt-12 pb-32">
        <img
          className="max-w-[400px] max-h-[400px] rounded"
          src={ecovium}
          alt="Foto del evento"
        />
        <img
          className="max-w-[400px] max-h-[300px]"
          src={lean_mind}
          alt="Foto del evento"
        />
      </section>
    </>
  );
}
