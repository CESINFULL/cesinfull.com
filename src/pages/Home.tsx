import NavBar from '../components/NavBar';

const Home = () => {
  return (
    <>
      <NavBar />
      <div className='main-container'>
        <h1>CESINF IX</h1>
        <img src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' alt='Astronauta mascota del CESINF' />
        <h2> 25 y 26 DE ENERO </h2>
        <h3> AULA MAGNA DE FÍSICA Y MATEMÁTICAS </h3>
      </div>
      <div className='who-we-are-container'>
        <h1> ¿QUIÉNES SOMOS? </h1>
        <p>
        El <strong>Congreso de Estudiantes de Ingeniería Informática</strong> es un evento que 
        se celebra anualmente en la Escuela Superior de Ingeniería y Tecnología 
        de la Universidad de La Laguna, organizado por estudiantes del grado de 
        Ingeniería Informática.
        </p>
        <p>
        Nuestro objetivo es dar a conocer nuevas tecnologías, aportar conocimiento 
        e intercambiar ideas de la mano de profesionales de la informática así como 
        del propio alumnado, a través de conferencias, presentaciones de proyectos, 
        talleres y ¡mucho más!
        </p>
        <div className='who-we-are-images'>
          <img src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' alt='Foto del evento' />
          <img src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' alt='Foto del evento' />
          <img src='https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da' alt='Foto del evento' />
        </div>
      </div>
      <div className='sponsors-container'>
        <h1> PATROCINADORES </h1>
        <div className='sponsors-images'></div>
      </div>
      <div className='links-container'>
        <h2> HORARIO </h2>
        <h2> EVENTOS </h2>
        <h2> TALLERES </h2>
      </div>
    </>
  );
};

export default Home;
