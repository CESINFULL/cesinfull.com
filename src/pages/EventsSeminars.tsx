import eventsData from '../data/events.json';
import calendarData from '../data/calendar.json';
import CustomNavbar from '../components/CustomNavbar';
import Footer from '../components/Footer';
import EventsTimeline from '../components/EventsTimeline';
import Calendar from '../components/Calendar';

const EventsSeminars = () => {
  return (
    <div className="dark:bg-gray-900">
      <CustomNavbar />
      <div className="pt-20 pb-3 px-3 md:px-12 min-h-screen">
        <h1 className="text-4xl font-bold py-6 dark:text-white">
          Talleres y eventos
        </h1>
        <p className="mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
          En esta página se ofrece un listado de los diferentes eventos del
          cesinf e infomación sobre los mismos.
          <br /> Todos estos eventos se desarollarán en el <b>Aula Magna</b> de
          la
          <a
            href="https://maps.app.goo.gl/j4DUbaETev2Gdf3S8"
            className="font-bold ml-1 text-blue-600 dark:text-blue-500 hover:underline"
          >
            Facultad de Física y Matemáticas
          </a>
          .
        </p>
        <article className="flex gap-6 flex-col lg:flex-row">
          <section>
            <h3 className="text-2xl font-bold pb-4 dark:text-white">
              Calendario
            </h3>
            <Calendar data={calendarData as any} />
          </section>
          <section>
            <h3 className="text-2xl font-bold pb-4 dark:text-white">
              Infomación de los eventos
            </h3>
            <EventsTimeline data={eventsData as any} />
          </section>
        </article>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default EventsSeminars;
