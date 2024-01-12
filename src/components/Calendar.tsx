import { FC } from 'react';
import { Table } from 'flowbite-react';

export type CalendarI = [string, string, string][];

export interface CalendarProps {
  data: CalendarI;
}

const Calendar: FC<CalendarProps> = ({ data }) => {
  return (
    <div className="w-fit pb-6">
      <Table striped>
        <Table.Head>
          <Table.HeadCell>Hora</Table.HeadCell>
          <Table.HeadCell>Día 25</Table.HeadCell>
          <Table.HeadCell>Día 26</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {data.map((row, index) => {
            const isWhite = row[1] !== 'Descanso';
            const style = isWhite
              ? {
                  color: 'white',
                }
              : undefined;
            return (
              <Table.Row key={index} className="border-gray-700 bg-gray-800">
                <Table.Cell>{row[0]}</Table.Cell>
                <Table.Cell className="font-semibold" style={style}>
                  {row[1]}
                </Table.Cell>
                <Table.Cell className="font-semibold" style={style}>
                  {row[2]}
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Calendar;
