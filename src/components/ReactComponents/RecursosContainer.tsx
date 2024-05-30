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

  const filterRecursos = (data, searchText) => {
    if (searchText === "") {
      return data;
    }

    return data.filter((item) =>
      item.Recurso.toLowerCase().includes(searchText.toLowerCase())
    );
  };
  //get params from url
  useEffect(() => {
    const joven = useJovenes();
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    if (id === "Jovenes") {
      setData(joven);
    }
    if (id === "Adultos") {
      setData(useAdultos());
    }
    if (id === "ninos") {
      setData(useNinos());
      // console.log('h')
    }
  }, []);

  useEffect(() => {
    // Filter Recursos
    setFilteredData(filterRecursos(data, searchText));
    // console.log(filteredData.length);
  }, [searchText, data]);

  return (
    <>
      <div className="md:mt-10 mt-24 pt-6  px-5">
        <SearchBar value={searchText} set={setSearchText} />
        <div>
          {filteredData.length != 0 ? (
            <div className="w-fit grid md:grid-cols-2 grid-cols-1 gap-14  py-8  ">
              {filteredData.map((item: recursosProps, key) => (
                <div key={key}>
                  <Card
                    title={item.Recurso}
                    description={item.Descripción}
                    link={item.URL}
                    image={item.imagen}
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className=" py-8 text-xl">No se encuentran Resultados para: <span className="font-semibold"> {searchText}</span></div>
          )}
        </div>
      </div>
    </>
  );
}
