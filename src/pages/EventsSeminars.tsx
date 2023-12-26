import { Pagination } from 'flowbite-react';
import { useState } from 'react';

const EventsSeminars = () => {
  const [page, setPage] = useState(0);
  return <>
    <h1>Eventos</h1>
    <Pagination currentPage={page} onPageChange={function (page: number): void {
      setPage(page);
    } } totalPages={2}></Pagination>
  </>;
};

export default EventsSeminars;
