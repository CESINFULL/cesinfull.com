import { FC, useMemo, useState } from 'react';
import { Select, Timeline } from 'flowbite-react';
import Avatar from './Avatar';

export interface RoundTable {
  type: 'round-table';
  hour: number;
  title: string;
  description: string;
}

export interface Talk {
  type: 'talk';
  hour: number;
  title: string;
  description: string;
  speaker: string;
  speakerAvatar: string; // url
  job: string;
  enterprise: string;
}

export interface EventsI {
  id: string;
  day: string;
  events: (RoundTable | Talk)[];
}

const FormatDate = (date: number): string => {
  return Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    month: 'short',
    timeZone: 'UTC',
  }).format(date);
};

const FilterData = (data: EventsI, filter: string): (RoundTable | Talk)[] => {
  if (!filter) return data.events;
  filter = filter.toLowerCase();

  return data.events.filter((event) => {
    if (event.type === 'round-table') {
      return (
        event.description.toLowerCase().includes(filter) ||
        event.title.toLowerCase().includes(filter)
      );
    }

    return (
      event.description.toLocaleLowerCase().includes(filter) ||
      event.title.toLocaleLowerCase().includes(filter) ||
      event.speaker.toLocaleLowerCase().includes(filter) ||
      event.job.toLocaleLowerCase().includes(filter) ||
      event.enterprise.toLocaleLowerCase().includes(filter)
    );
  });
};

export interface EventsTimelineProps {
  data: EventsI[];
}

const EventsTimeline: FC<EventsTimelineProps> = ({ data }) => {
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
    <>
      <div className="flex gap-4 flex-col md:flex-row">
        <Select className="w-40" onChange={(e) => selectDay(e.target.value)}>
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
          <Timeline.Item key={event.title} className="max-w-6xl mt-2">
            <Timeline.Point />
            <Timeline.Content>
              <Timeline.Time>{FormatDate(event.hour)}</Timeline.Time>
              <Timeline.Title>{event.title}</Timeline.Title>
              <Timeline.Body className="text-pretty">
                {event.description}
              </Timeline.Body>
              {event.type === 'talk' && (
                <Avatar
                  img={`/speakers/${event.speakerAvatar}`}
                  speaker={event.speaker}
                  enterprise={event.enterprise}
                  job={event.job}
                />
              )}
            </Timeline.Content>
          </Timeline.Item>
        ))}
      </Timeline>
    </>
  );
};

export default EventsTimeline;
