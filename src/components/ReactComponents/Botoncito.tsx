import React, { useState } from "react";
import CardCursos from "./CardCursos";
import useJovenes from "../../hooks/useJovenes";

export default function Botoncito({idName}: {idName: string}) {
  const [isOpen, setIsOpen] = useState(false);
  const data = useJovenes();

  return (
    <>
      <button
        id={idName}
        className="absolute  w-60 aspect-2/3 inline-block select-none  pointer-events-auto"
        onClick={() => {
          setIsOpen(!isOpen);
          console.log("isOpen", isOpen);
        }}
      >
       
      </button>
      {isOpen && (
        <div className="fixed inset-0  text-white bg-black bg-opacity-10 backdrop-blur-md flex items-center justify-center overflow-y-hidden">
          <div className="bg-gradient-to-tl from-[#438EBE] via-[#85BADC] to-[#E8EEF2] p-1 rounded-2xl  animate-fade-in-down animate-duration-300">
            <div className="bg-black rounded-2xl py-6 px-8 min-w-[760px] min-h-[372px] max-h-[600px] ">
              {/* #464646 fondo opcion */}

              <div className="flex justify-between items-center">
                <h2 className="text-transparent text-3xl font-bold bg-gradient-to-br from-[#438EBE] via-[#85BADC] to-[#E8EEF2] bg-clip-text mb-5">
                  Jovenes
                </h2>

                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-5 grid grid-cols-2 gap-4 max-h-[500px] overflow-y-auto " style={{ scrollBehavior: 'smooth' }}>
                {data.map((item, index) => (
                  <CardCursos
                    key={index}
                    recurso={item.Recurso}
                    descripcion={item.Descripción}
                    link={item.URL}
                    imagen={item.imagen}
                  />
                ))}
                
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
