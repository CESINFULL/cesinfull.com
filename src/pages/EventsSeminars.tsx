import { Avatar, Select, Timeline } from 'flowbite-react';
import { useMemo, useState } from 'react';
import calendarData from '../data/calendar.json';

interface Event {
  speaker: string;
  hour: number;
  duration: string;
  speakerAvatar: string; // url
  title: string;
  description: string;
  job: string;
  enterprise: string;
}

interface CalendarI {
  id: string;
  day: string;
  events: Event[];
}

const FormatDate = (date: number): string => {
  return Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
  }).format(date);
};

const FilterData = (data: CalendarI, filter: string): Event[] => {
  if (!filter) return data.events;
  filter = filter.toLowerCase();

  return data.events.filter(
    (hour) =>
      hour.description.toLowerCase().includes(filter) ||
      hour.speaker.toLowerCase().includes(filter) ||
      hour.title.toLowerCase().includes(filter)
  );
};

const EventsSeminars = () => {
  const data: CalendarI[] = useMemo(() => calendarData, []);
  const [selectedDay, selectDay] = useState(data[0].day);
  const dayIndex = useMemo(
    () => data.findIndex((calendar) => calendar.day == selectedDay) || 0,
    [data, selectedDay]
  );
  const [filter, setFilter] = useState('');
  const filtered = useMemo(
    () => FilterData(data[dayIndex], filter),
    [data, dayIndex, filter]
  );

  return (
    <div className="py-3 px-6 dark:bg-gray-800 min-h-screen">
      <h1 className="text-4xl font-bold py-6 dark:text-white">
        Calendario y eventos
      </h1>
      <p className="mb-6 text-base font-normal text-gray-500 dark:text-gray-400">
        En esta página se ofrece un listado de los diferentes eventos del cesinf
        e infomación sobre los mismos.
        <br /> Todos estos eventos se dessarollaran en el <b>Aula Magna</b> de
        la
        <a
          href="https://maps.app.goo.gl/j4DUbaETev2Gdf3S8"
          className="font-bold ml-1 text-blue-600 dark:text-blue-500 hover:underline"
        >
          Facultad de Física y Matemáticas
        </a>
        .
      </p>
      <div className="flex gap-4 flex-col md:flex-row">
        <Select className="w-28" onChange={(e) => selectDay(e.target.value)}>
          {data.map((calendar) => (
            <option key={calendar.day} value={calendar.day}>
              Día {calendar.day}
            </option>
          ))}
        </Select>
        <input
          type="text"
          className="block w-full max-w-5xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Busca tu evento, ponente..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
      <Timeline className="mt-2 pt-2">
        {filtered.map((event) => (
          <Timeline.Item key={event.title} className="max-w-6xl">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>
                {FormatDate(event.hour)} ({event.duration})
              </Timeline.Time>
              <Timeline.Title>{event.title}</Timeline.Title>
              <Timeline.Body>{event.description}</Timeline.Body>
              <Avatar
                className="justify-start"
                img={event.speakerAvatar}
                rounded
              >
                <div className="space-y-1 font-medium dark:text-white">
                  <p className="font-semibold">{event.speaker}</p>
                  <small className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                    {event.job} en {event.enterprise}
                  </small>
                </div>
              </Avatar>
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </div>
  );
};

export default EventsSeminars;
