import CustomNavbar from '../components/CustomNavbar';
import Hero from '../components/Hero';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import astronaut from '../images/astronaut.svg';
import event1 from '../images/event1.jpg';
import event2 from '../images/event2.jpg';
import event3 from '../images/event3.jpg';
import unkwown from '../images/unkwown_sponsor.png';

const Home = () => {
  return (
    <CustomNavbar />
    <Hero />
    <div className="w-full bg-cesinf-blue">
      <div className="w-auto h-[166px] left-0 top-0 absolute">
        <NavBar />
      </div>
      <div className="w-auto h-[1080px] relative">
        <div className="w-[788px] h-[854px] left-[375px] top-[212px] absolute">
          <img src={astronaut} alt="Mascota astronauta del CESINF" />
        </div>
        <div className="left-[661px] top-[167px] absolute text-center text-white text-[200px] font-bold font-bangers drop-shadow-[0_10px_0px_rgba(0,0,0)]">
          CESINF IX
        </div>
        <div className="w-[1087px] h-[323px] left-[417px] top-[740px] absolute text-center text-white text-8xl font-bold font-bangers drop-shadow-[0_8px_0px_rgba(0,0,0)]">
          25 y 25 de enero
          <br />
          AULA MAGNA DE FÍSICA Y MATEMÁTICAS
        </div>
      </div>
      <div className="w-[1920px] h-[1080px] relative">
        <div className="w-[1562px] h-[782px] left-[174px] top-[91px] absolute">
          <div className="left-[387px] top-0 absolute text-white text-9xl font-normal font-bangers drop-shadow-[0_8px_0px_rgba(0,0,0)]">
            ¿Quiénes somos?
          </div>
          <div className="w-[1562px] h-[622px] left-0 top-[160px] absolute text-center text-white text-5xl font-normal font-bangers drop-shadow-[0_4px_0px_rgba(0,0,0)]">
            El
            <strong> Congreso de Estudiantes de Ingeniería Informática </strong>
            es un evento que se celebra anualmente en la Escuela Superior de
            Ingeniería y Tecnología de la Universidad de La Laguna, organizado
            por estudiantes del grado de Ingeniería Informática. Nuestro
            objetivo es dar a conocer nuevas tecnologías, aportar conocimiento e
            intercambiar ideas de la mano de profesionales de la informática así
            como del propio alumnado, a través de conferencias, presentaciones
            de proyectos, talleres y ¡mucho más!
          </div>
        </div>
        <div className="w-[532.84px] h-[314.56px] left-[57px] top-[714.63px] absolute bg-zinc-300">
          <img src={event1} alt="Foto del evento" />
        </div>
        <div className="w-[529.59px] h-[312.64px] left-[701px] top-[711.61px] absolute bg-zinc-300">
          <img src={event2} alt="Foto del evento" />
        </div>
        <div className="w-[524.69px] h-[309.75px] left-[1342px] top-[719.59px] absolute bg-zinc-300">
          <img src={event3} alt="Foto del evento" />
        </div>
      </div>
      <div className="w-[1920px] h-[1080px] relative">
        <div className="left-[598px] top-[94px] absolute text-white text-9xl font-normal font-bangers drop-shadow-[0_8px_0px_rgba(0,0,0)]">
          PATROCINADORES
        </div>
        <div className="w-[200px] h-[200px] left-[204px] top-[359px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[1516px] top-[648px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[1188px] top-[648px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[860px] top-[648px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[532px] top-[648px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[204px] top-[648px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[1516px] top-[359px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[1188px] top-[359px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[860px] top-[359px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
        <div className="w-[200px] h-[200px] left-[532px] top-[359px] absolute bg-zinc-300">
          <img src={unkwown} alt="Patrocinador desconocido" />
        </div>
      </div>
      <div className="w-[1920px] h-[1080px] relative">
        <div className="left-[164px] top-[172px] absolute text-white text-9xl font-normal font-bangers drop-shadow-[0_8px_0px_rgba(0,0,0)]">
          Horario
        </div>
        <div className="left-[771px] top-[172px] absolute text-white text-9xl font-normal font-bangers drop-shadow-[0_8px_0px_rgba(0,0,0)]">
          Talleres
        </div>
        <div className="left-[1347px] top-[172px] absolute text-white text-9xl font-normal font-bangers drop-shadow-[0_8px_0px_rgba(0,0,0)]">
          Eventos
        </div>
        <div className="w-[350px] h-[350px] left-[178px] top-[332px] absolute bg-zinc-300">
          <img
            src="https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da"
            alt="Foto del evento"
          />
        </div>
        <div className="w-[350px] h-[350px] left-[1356px] top-[332px] absolute bg-zinc-300">
          <img
            src="https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da"
            alt="Foto del evento"
          />
        </div>
        <div className="w-[350px] h-[350px] left-[785px] top-[332px] absolute bg-zinc-300">
          <img
            src="https://preview.redd.it/nhvy5bbqs8891.png?auto=webp&s=db37de29529eec90a72fdb5c28f380c7202765da"
            alt="Foto del evento"
          />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
