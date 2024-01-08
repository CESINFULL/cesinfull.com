import { Button, Navbar } from 'flowbite-react';
import CesinfLogo from './svg/CesinfLogo';

export default function CustomNavbar() {
  return (
    <Navbar fluid rounded className="fixed w-full bg-gray-800 z-10">
      <Navbar.Brand href="/">
        <CesinfLogo
          letterColor="#ffffff"
          circleColor="#ffffff"
          className="h-10 ml-3 sm:h-9 sm:mr-3 md:ml-0"
        />
        <span className="hidden sm:inline self-center whitespace-nowrap text-2xl font-semibold dark:text-white">
          CESINF IX
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button gradientDuoTone="purpleToBlue">Compra tu entrada</Button>
        <Navbar.Toggle className="2xs:ml-3" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="/" className="text-lg">Inicio</Navbar.Link>
        <Navbar.Link href="/talleres-eventos" className="text-lg">Talleres y eventos</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
