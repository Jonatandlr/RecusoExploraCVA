import { useState, useEffect } from "react";
import useAdultos from "../../hooks/useAdultos";
import useJovenes from "../../hooks/useJovenes";
import useNinos from "../../hooks/useNinos";
import Card from "./Card";
import SearchBar from "./SearchBar";

interface recursosProps {
  Recurso: string;
  Descripción: string;
  URL: string;
  imagen: string;
}

export default function RecursosContainer() {
  const [data, setData] = useState([{}]);
  const [searchText, setSearchText] = useState("");
  const [filteredData, setFilteredData] = useState(data);
  const [loading, setLoading] = useState(true);
  const [title, setTitle] = useState("");

  const filterRecursos = (data, searchText) => {
    if (searchText === "") {
      return data;
    }
    const normalizedSearchText = searchText.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

    return data.filter((item) =>
      item.Recurso.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(normalizedSearchText.toLowerCase())
    );
  };


  // RecursosCVA
  //get params from url
  useEffect(() => {
    const joven = useJovenes();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id === "Jovenes") {
      setData(joven);
      setTitle("Jóvenes");
    }
    if (id === "Adultos") {
      setData(useAdultos());
      setTitle("Adultos");
    }
    if (id === "ninos") {
      setData(useNinos());
      setTitle("Niños");
    }
  }, []);

  useEffect(() => {
    // Filter Recursos
    setFilteredData(filterRecursos(data, searchText));
    // console.log(filteredData.length);
    setLoading(false);

    console.log(loading);
  }, [searchText, data]);

  return (
    <>
      <div className="">
        <h1
          className={`px-2 md:px-0 pb-3 w-fit text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r bg-clip-text text-transparent
        ${
          title === "Adultos"
            ? "from-[#e0aea0]  to-[#ED695D]"
            : `${
                title === "Jovenes"
                  ? "from-[#616ED1]  to-[#916DE2]"
                  : "from-[#a3d2ca]  to-[#a3d2ca]"
              }`
        }`}
        >
          {title}
        </h1>

        {/* <SearchBar value={searchText} set={setSearchText} /> */}
        {loading ? (
          <div className="text-xl py-8">Cargando...</div>
        ) : (
          <div className="">
            {filteredData.length > 0 ? (
              <div className="w-fit grid md:grid-cols-2 grid-cols-1 gap-14  py-8  ">
                {filteredData.map((item: recursosProps, key) => (
                  <div key={key} className="px-2 md:px-0">
                    <Card
                      color={title}
                      title={item.Recurso}
                      description={item.Descripción}
                      link={item.URL}
                      image={item.imagen}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className=" py-8 text-xl">
                No se encuentran Resultados para:{" "}
                <span className="font-semibold"> {searchText}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </>
  );
}
