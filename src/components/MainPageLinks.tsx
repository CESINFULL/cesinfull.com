import unknown from '../images/unkwown_sponsor.png';

export default function MainPageLinks() {
  return (
    <>
      <div className='pb-14 lg:flex lg:place-content-evenly items-center'>
        <div className='flex flex-col items-center text-center'>
          <h2 className='text-5xl'>HORARIO</h2>
          <img 
            className='lg:w-10/12 mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>

        <div className='flex flex-col items-center text-center'>
          <h2 className='text-5xl'>EVENTOS</h2>
          <img 
            className='lg:w-10/12 mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>

        <div className='flex flex-col items-center text-center'>
          <h2 className='text-5xl'>TALLERES</h2>
          <img 
            className='lg:w-10/12 mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>
      </div>
    </>
  );
}