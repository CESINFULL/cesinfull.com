import imgEventos from '../images/home_link_eventos.webp';
import imgHorario from '../images/home_link_horario.webp';
import imgTalleres from '../images/home_link_talleres.webp';

export default function MainPageLinks() {
  return (
    <>
      <div className='pb-14 lg:flex lg:place-content-evenly items-center'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-5xl'>HORARIO</h2>
          <img 
            className='lg:w-10/12 mt-2 mb-10'
            src={imgHorario}
            alt='Foto del horario' 
            width='200'
          />
        </div>

        <div className='flex flex-col items-center text-center'>
          <h2 className='text-5xl'>EVENTOS</h2>
          <img 
            className='lg:w-10/12 mt-2 mb-10'
            src={imgEventos}
            alt='Foto del evento' 
            width='200'
          />
        </div>

        <div className='flex flex-col items-center text-center'>
          <h2 className='text-5xl'>TALLERES</h2>
          <img 
            className='lg:w-10/12 mt-2 mb-10'
            src={imgTalleres}
            alt='Foto del taller' 
            width='200'
          />
        </div>
      </div>
    </>
  );
}
