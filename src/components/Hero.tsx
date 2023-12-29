import { Button } from "flowbite-react"
import Machango from "./svg/Machango"

export default function Hero() {
  return <div className="bg-gray-800 flex flex-col p-4 md:flex-row-reverse items-center justify-evenly min-h-screen w-full">
    <div className="text-center text-white md:grow-0 md:w-1/3">
      <h1 className="text-5xl font-extrabold mb-8">CESINF IX</h1>
      <p className="text-2xl mb-2">25 y 26 de Enero</p>
      <p className="text-2xl">Aula Magna de Física y Matemáticas</p>
      <div className="inline-block mt-8">
        <Button outline gradientDuoTone="purpleToBlue">
          Compra tu entrada
        </Button>
      </div>
    </div>
    <Machango className="animate-floating md:mx w-1/2 md:w-1/3" />
  </div>
}
