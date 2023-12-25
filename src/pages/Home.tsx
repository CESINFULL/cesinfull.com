import NavBar from '../components/NavBar';
import event1 from '../images/event1.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';
import unknown from '../images/unkwown_sponsor.png';
import astronaut from '../images/astronaut.svg';

const Home = () => {
  return (
    <>
      <NavBar/>
      <div className='bg-slate-800 text-white font-serif'>
        <div className='flex place-content-center items-center'>
        <img className='py-8' src={astronaut} alt='Foto del evento' width='200' />
          <div className='text-center py-8 '>
            <h1 className="text-5xl font-bold pb-4">CESINF IX</h1>
            <h2 className="text-2xl text-gray-400 pb-4"> 25 y 26 DE ENERO </h2>
            <h3 className="text-2xl text-gray-400"> AULA MAGNA DE FÍSICA Y MATEMÁTICAS </h3>
          </div>
        </div>
        <div className='mx-40 text-center'>
          <h1 className='font-bold text-5xl pb-8'>¿QUIÉNES SOMOS?</h1>
          <p className='text-lg'>
            El Congreso de Estudiantes de Ingeniería Informática es un evento que 
            se celebra anualmente en la Escuela Superior de Ingeniería y Tecnología 
            de la Universidad de La Laguna, organizado por estudiantes del grado de 
            Ingeniería Informática. Nuestro objetivo es dar a conocer nuevas tecnologías, 
            aportar conocimiento e intercambiar ideas de la mano de profesionales de la 
            informática así como del propio alumnado, a través de conferencias, 
            presentaciones de proyectos, talleres y ¡mucho más!
          </p>
        </div>
        <div className='lg:flex place-content-evenly items-center py-12'>
          <img 
            className='lg:w-1/4'
            src={event1}
            alt='Foto del evento'
            width='200'
          />
          <img 
            className='lg:w-1/4'
            src={event3} 
            alt='Foto del evento' 
            width='200'
          />
          <img 
            className='lg:w-1/4'
            src={event2} 
            alt='Foto del evento' 
            width='200'
          />
        </div>
        <h1 className='text-5xl text-center pb-2'>PATROCINADORES</h1>
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
        <div className='mx-40 lg:flex lg:place-content-evenly items-center pb-8'>
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
      </div>
    </>
  );
};

export default Home;
