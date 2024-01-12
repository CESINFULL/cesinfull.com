import imgEventos from '../images/home_link_eventos.webp';
import imgHorario from '../images/home_link_horario.webp';
import imgTalleres from '../images/home_link_talleres.webp';

export default function MainPageLinks() {
  return (
    <>
      <article className="pb-14 flex flex-col items-center place-content-evenly lg:flex-row gap-6">
        <a
          href="/talleres-eventos"
          className="hover:underline text-4xl text-center font-bold"
        >
          HORARIO
          <img
            className="mt-4 max-h-64 my-5 rounded"
            src={imgHorario}
            alt="Foto del horario"
          />
        </a>
        <a
          href="/talleres-eventos"
          className="hover:underline text-4xl text-center font-bold"
        >
          EVENTOS
          <img
            className="mt-4 max-h-64 my-5 rounded"
            src={imgEventos}
            alt="Foto del evento"
          />
        </a>
        <a
          href="/talleres-eventos"
          className="hover:underline text-4xl text-center font-bold"
        >
          TALLERES
          <img
            className="mt-4 max-h-64 my-5 rounded"
            src={imgTalleres}
            alt="Foto del taller"
          />
        </a>
      </article>
    </>
  );
}
