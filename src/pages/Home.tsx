import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='bg-slate-800'>
        <div className='text-xl text-center py-8 '>
          <h1 className="text-5xl font-bold pb-4">CESINF IX</h1>
          <h2 className="text-2xl text-gray-400 pb-4"> 25 y 26 DE ENERO </h2>
          <h3 className="text-2xl text-gray-400"> AULA MAGNA DE FÍSICA Y MATEMÁTICAS </h3>
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
        <div className='lg:flex place-content-evenly items-center py-12 pb-24'>
          <img 
            className='lg:w-1/6'
            src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
            alt='Foto del evento'
            width='200'
          />
          <img 
            className='lg:w-1/6'
            src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
            alt='Foto del evento' 
            width='200'
          />
          <img 
            className='lg:w-1/6'
            src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
            alt='Foto del evento' 
            width='200'
          />
        </div>
        <div className='mx-40 lg:flex lg:place-content-evenly items-center pb-8'>
          <div className='flex flex-col items-center text-center'>
            <h1 className='text-xl'>PATROCINADORES</h1>
            <img 
              className='lg:w-10/12 mt-4'
              src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
              alt='Foto del evento' 
              width='200'
            />
          </div>

          <div className='flex flex-col items-center text-center'>
            <h2 className='text-xl'>HORARIO</h2>
            <img 
              className='lg:w-10/12 mt-4'
              src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
              alt='Foto del evento' 
              width='200'
            />
          </div>

          <div className='flex flex-col items-center text-center'>
            <h2 className='text-xl'>EVENTOS</h2>
            <img 
              className='lg:w-10/12 mt-4'
              src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
              alt='Foto del evento' 
              width='200'
            />
          </div>

          <div className='flex flex-col items-center text-center'>
            <h2 className='text-xl'>TALLERES</h2>
            <img 
              className='lg:w-10/12 mt-4'
              src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' 
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
