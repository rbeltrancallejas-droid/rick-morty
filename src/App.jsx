import { useState } from 'react'
import imageRickMorty from './img/rick-morty.png'
import './App.css'
import Characters from './components/Characters';

function App() {
  const [characters, setCharacters] = useState(null);
  const [info, setInfo] = useState(null); 

  // La URL por defecto es la página 1
  const reqApi = async (url = "https://rickandmortyapi.com/api/character") => {
    try {
      const api = await fetch(url);
      const characterApi = await api.json();
      setCharacters(characterApi.results);
      setInfo(characterApi.info); // Guardamos la info de next/prev pages
    } catch (error) {
      console.error("Error al obtener los personajes:", error);
    }
  }

  const goToNextPage = () => {
    if (info && info.next) reqApi(info.next);
  }

  const goToPrevPage = () => {
    if (info && info.prev) reqApi(info.prev);
  }

  return (
    <div className="App">
      <h1 className='title'>Rick & Morty</h1>
      {characters ? (
        <Characters 
          characters={characters} 
          setCharacters={setCharacters} 
          info={info}
          goToNextPage={goToNextPage}
          goToPrevPage={goToPrevPage}
        />
      ) : (
        <>
          <img src={imageRickMorty} alt="rick y morty" className='img-home' />
          <br />
          <button onClick={() => reqApi()} className='btn-search'>Buscar Personajes</button>
        </>
      )}
    </div>
  )
}

export default App