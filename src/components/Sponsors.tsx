import unknown from '../images/unkwown_sponsor.webp';

export default function Sponsors() {
  return (
    <>
      <h1 className='text-5xl text-center pb-2 font-bold'>PATROCINADORES</h1>
      <div className='mx-40 lg:flex lg:place-content-evenly items-center pb-32'>
        <div className='flex flex-col items-center text-center'>
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>
        <div className='flex flex-col items-center text-center'>
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
          <img 
            className='mt-12'
            src={unknown}
            alt='Foto del evento' 
            width='200'
          />
        </div>
      </div>
    </>
  );
}