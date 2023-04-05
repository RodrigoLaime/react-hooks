import React, { useEffect, useMemo, useReducer, useState } from 'react'
import '../css/Characters.css'
const initialState = {
  favorites: []
};

//recibe el estado actual y una acción
const favoriteReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_FAVORITE':
      return {
        ...state,
        favorites: [...state.favorites, action.payload]
      };
    default:
      return state;
  }
}

const Characters = () => {

  const [characters, setCharacters] = useState([]);

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character/')
      .then(response => response.json())
      .then(data => setCharacters(data.results))
  }, []);

  //funcion para agregar a favoritos
  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  }

  //funcion para busqueda
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  //guardamos en una variable el usuario filtrado
  /* const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  }) */
  const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    //para que va a escuchar, los personajes y la busqueda
    [characters, search]
  );

  return (
    <div className='Character'>
      {favorites.favorites.map(favorit => (
        <li key={favorit.id}>{favorit.name}</li>
      ))}

      <div>
        <input type="text" value={search} onChange={handleSearch} />
      </div>

      <div className='container-item'>
        {filteredUsers.map(character => (
          <div className='item' key={character.id}>
            <article>
              <img src={character.image} alt="imagen" />
              <h2>{character.name}</h2>
              <button type='button' onClick={() => handleClick(character)}>add favorite</button>
            </article>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Characters