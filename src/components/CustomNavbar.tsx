import { Button, Navbar } from 'flowbite-react';
import { Link } from 'react-router-dom';
import CesinfLogo from './svg/CesinfLogo';

export default function CustomNavbar() {
  return (
    <Navbar fluid rounded className="fixed w-full bg-gray-800 z-10">
      <Navbar.Brand as={Link} to="/">
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
        <Button gradientDuoTone="purpleToBlue" onClick={() => window.open("https://www.eventbrite.com/e/792436016457", "_blank")}>
          Compra tu entrada
        </Button>
        <Navbar.Toggle className="2xs:ml-3" />
      </div>
      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/" className="text-lg">Inicio</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
