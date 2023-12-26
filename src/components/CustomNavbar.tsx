import { Button, Navbar } from 'flowbite-react';
import CesinfLogo from './svg/CesinfLogo';

export default function CustomNavbar() {
  return (
    <Navbar fluid rounded className="fixed w-full bg-gray-800 z-30">
      <Navbar.Brand href="/">
        <CesinfLogo
          letterColor="#ffffff"
          circleColor="#ffffff"
          className="ml-3 md:ml-0 mr-3 h-10 sm:h-9"
        />
        <span className="hidden sm:inline self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CESINF IX
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button gradientDuoTone="purpleToBlue">Compra tu entrada</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/">Inicio</Navbar.Link>
        <Navbar.Link href="/talleres-eventos">Talleres y eventos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
