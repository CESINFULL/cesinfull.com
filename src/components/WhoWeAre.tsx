import event1 from '../images/event1.webp';
import event2 from '../images/event2.webp';
import event3 from '../images/event3.webp';

const WhoWeAre = () => {
  return (
    <>
      <div className="text-center pt-10">
        <h3 className="font-bold text-[7vw] sm:text-5xl pb-8">¿QUIÉNES SOMOS?</h3>
        <p className="sm:text-lg mx-10 lg:mx-40">
          El Congreso de Estudiantes de Ingeniería Informática es un evento
          que se celebra anualmente en la Escuela Superior de Ingeniería y
          Tecnología de la Universidad de La Laguna, organizado por
          estudiantes del grado de Ingeniería Informática. Nuestro objetivo es
          dar a conocer nuevas tecnologías, aportar conocimiento e
          intercambiar ideas de la mano de profesionales de la informática así
          como del propio alumnado, a través de conferencias, presentaciones
          de proyectos, talleres y ¡mucho más!
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row place-content-evenly py-12">
        <img
          className="w-3/4 h-64 object-cover lg:w-1/4 md:w-1/2 my-5"
          src={event1}
          alt="Foto del evento"
        />
        <img
          className="w-3/4 h-64 object-cover lg:w-1/4 md:w-1/2 my-5"
          src={event3}
          alt="Foto del evento"
        />
        <img
          className="w-3/4 h-64 object-cover lg:w-1/4 md:w-1/2 my-5"
          src={event2}
          alt="Foto del evento"
        />
      </div>
    </>
  );
};

export default WhoWeAre;
