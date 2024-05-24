import { useState, useEffect } from "react";
import useAdultos from "../../hooks/useAdultos";
import useJovenes from "../../hooks/useJovenes";
import Card from "./Card";

interface recursosProps {
  Recurso: string;
  Descripción: string;
  URL: string;
  imagen: string;
}

export default function RecursosContainer() {
  const [data, setData] = useState([{}]);
  //get params from url
  useEffect(() => {
    const joven=useJovenes();
    console.log(joven);
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    console.log(id);
    if (id === "Jovenes") {
      setData(joven);
    }
    if (id === "Adultos") {
      setData(useAdultos());
    }
  }, []);

  return (
    <>
      <div className="w-fit grid md:grid-cols-2 grid-cols-1 gap-14 px-5 py-5 max-h-[420px] ">


        {data.map((item: recursosProps, key) => (
          <div  key={key}>
            <Card
              title={item.Recurso}
              description={item.Descripción}
              link={item.URL}
              image={item.imagen}
            />
          </div>
        ))}
      </div>
    </>
  );
}
