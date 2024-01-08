import imgEventos from '../images/home_link_eventos.webp';
import imgHorario from '../images/home_link_horario.webp';
import imgTalleres from '../images/home_link_talleres.webp';

export default function MainPageLinks() {
  return (
    <>
      <article className="pb-14 grid grid-cols-1 lg:grid-cols-2 place-items-center gap-20">
        <section>
          <h3 className="text-4xl text-center font-bold pb-4">HORARIO</h3>
          <img
            className="max-w-[370px] max-h-[300px] lg:max-w-[500px] lg:max-h-[400px] rounded"
            src={imgHorario}
            alt="Foto del horario"
          />
        </section>
        <section>
          <h3 className="text-4xl text-center font-bold pb-4">EVENTOS</h3>
          <img
            className="max-w-[370px] max-h-[300px] lg:max-w-[500px] lg:max-h-[400px] rounded"
            src={imgEventos}
            alt="Foto del evento"
          />
        </section>
        <section className="lg:col-span-2">
          <h3 className="text-4xl text-center font-bold pb-4">TALLERES</h3>
          <img
            className="max-w-[370px] max-h-[300px] lg:max-w-[500px] lg:max-h-[400px] rounded"
            src={imgTalleres}
            alt="Foto del taller"
          />
        </section>
      </article>
    </>
  );
}
