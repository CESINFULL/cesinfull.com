const Footer = () => {
  return (
    <section className="bg-slate-800">
        <div className="mx-auto space-y-3 overflow-hidden">
            <div className="flex justify-center mt-6 space-x-6">
                <a href="https://twitter.com/CESINFULL" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">X</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-9 w-9" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      stroke-width="2" 
                      stroke="white" 
                      fill="none" 
                      stroke-linecap="round" 
                      stroke-linejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
                      <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                    </svg>
                </a>
                <a href="https://www.instagram.com/cesinfull" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Instagram</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9" 
                      fill="currentColor"
                      style={{ color: "#c13584" }}
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
                <a href="https://www.tiktok.com/@cesinfull" className="text-gray-400 hover:text-gray-500">
                    <span className="sr-only">TikTok</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-9 w-9" 
                      viewBox="0 0 448 512"
                      style={{ color: "#6a76ac" }}
                    >
                      <path
                        fill="currentColor"
                        d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"
                      />
                    </svg>
                </a>
                <a href="https://www.youtube.com/cesinfull" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">YouTube</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-9 w-9" 
                    fill="currentColor"
                    style={{ color: "#ff0000" }}
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                </a>
            </div>
            <div className="flex flex-col items-center space-y-3 px-5">
              <p className="text-lg sm:text-2xl font-bold text-white">25 y 26 de Enero de 2024</p>
              <p className="text-gray-400 sm:text-lg text-center">Aula Magna Sección de Física y Matemáticas</p>
            </div>
            <p className="text-4xl font-bold text-white text-center">CESINF IX</p>
            <div className="flex flex-col items-center pb-4">
              <a href="mailto:cesinfull@ull.edu.es" className="text-gray-400 hover:underline">cesinfull@ull.edu.es</a>
            </div>
        </div>
    </section>
    )
};

export default Footer;
