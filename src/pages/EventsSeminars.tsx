import { Avatar, Select, Timeline } from 'flowbite-react';
import { useMemo, useState } from 'react';
import calendarData from '../data/calendar.json';

interface CalendarI {
  id: string;
  day: string;
  hours: {
    speaker: string;
    hour: number;
    duration: string;
    speakerAvatar: string; // url
    title: string;
    description: string;
  }[];
}

const FormatDate = (date: number): string => {
  return Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
  }).format(date);
};

const EventsSeminars = () => {
  const data: CalendarI[] = useMemo(() => calendarData, []);
  const [selectedDay, selectDay] = useState(data[0].day);
  const dayIndex = useMemo(
    () => data.findIndex((calendar) => calendar.day == selectedDay) || 0,
    [data, selectedDay]
  );
  // TODO: make the filter to search events

  return (
    <>
      <div className="my-3 mx-3">
        <h1 className="text-4xl font-bold py-6 dark:text-white">
          Calendario y eventos
        </h1>
        {/* Write a little description */}
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
            className="block w-full max-w-7xl p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Busca tu evento, ponente..."
          />
        </div>
        <Timeline className="mt-2 pt-2">
          {data[dayIndex].hours.map((event) => (
            <Timeline.Item key={event.title}>
              <Timeline.Point />
              <Timeline.Content>
                <Timeline.Time>
                  {FormatDate(event.hour)} ({event.duration})
                </Timeline.Time>
                <Timeline.Title>{event.title}</Timeline.Title>
                <Timeline.Body>{event.description}</Timeline.Body>
                <div className="flex items-center gap-2">
                  <small className="text-sm font-bold text-gray-500 dark:text-gray-400">
                    {event.speaker}
                  </small>
                  <Avatar
                    className="object-cover"
                    img={event.speakerAvatar}
                    rounded
                    bordered
                  />
                </div>
              </Timeline.Content>
            </Timeline.Item>
          ))}
        </Timeline>
      </div>
    </>
  );
};

export default EventsSeminars;
