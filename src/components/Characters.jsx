import React, { useMemo, useReducer, useRef, useState, useCallback } from 'react'
import '../css/Characters.css'
import Search from './Search';
import useCharacters from '../hooks/useCharacters';
const initialState = {
  favorites: []
};

const API = 'https://rickandmortyapi.com/api/character/';

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

  const [favorites, dispatch] = useReducer(favoriteReducer, initialState);

  const [search, setSearch] = useState('');

  const searchInput = useRef(null);

  //
  const characters = useCharacters(API);

  //funcion para agregar a favoritos
  const handleClick = favorite => {
    dispatch({ type: 'ADD_TO_FAVORITE', payload: favorite });
  }

  //funcion para busqueda
  /*   const handleSearch = () => {
    //obtener el valor del input
    setSearch(searchInput.current.value);
  }; */
  //funcion para busqueda
  const handleSearch = useCallback(() => {
    //obtener el valor del input
    setSearch(searchInput.current.value)
  }, []);

  //guardamos en una variable el usuario filtrado
  /* const filteredUsers = characters.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  }) */
  //guardamos en una variable el usuario filtrado
  const filteredUsers = useMemo(() =>
    characters.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    }),
    //va a escuchar, los personajes y la busqueda
    [characters, search]
  );

  return (
    <div className='Character'>
      {favorites.favorites.map(favorit => (
        <li key={favorit.id}>{favorit.name}</li>
      ))}

      {/*     <div>
        <input type="text" value={search} ref={searchInput} onChange={handleSearch} />
      </div> */}

      <Search search={search} searchInput={searchInput} handleSearch={handleSearch} />

      <div className='container-item'>
        {filteredUsers.map(character => (
          <div className='item' key={character.id}>
            <article className='container-text'>
              <img src={character.image} alt="imagen" />
              <div className='text'>
                <h2>{character.name}</h2>
                <button type='button' onClick={() => handleClick(character)}>add favorite</button>
              </div>
            </article>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Characters