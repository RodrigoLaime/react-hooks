import { useEffect, useState } from "react";

const useCharacters = (url) => {

  const [characters, setCharacters] = useState([]);

  //se le pasa una funcion anonima y otra que va a estar escuchando los cambios 
  useEffect(() => {
    fetch(url).then(response => response.json()).then(data => setCharacters(data.results))
  }, [url]);

  //retornamos el estado
  return characters;
}

export default useCharacters;