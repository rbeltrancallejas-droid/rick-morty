export default function Characters(props) {
  const { characters, setCharacters, info, goToNextPage, goToPrevPage } = props;

  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      
      {/* Controles de paginación superiores */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginBottom: '20px' }}>
        <span 
          onClick={info?.prev ? goToPrevPage : null} 
          className="back-home" 
          style={{ opacity: !info?.prev ? 0.5 : 1, cursor: info?.prev ? 'pointer' : 'not-allowed' }}
        >
          Anterior
        </span>
        
        <span onClick={resetCharacters} className="back-home">
          Volver al Home
        </span>
        
        <span 
          onClick={info?.next ? goToNextPage : null} 
          className="back-home"
          style={{ opacity: !info?.next ? 0.5 : 1, cursor: info?.next ? 'pointer' : 'not-allowed' }}
        >
          Siguiente
        </span>
      </div>

      <div className="container-characters">
        {characters.map(
          (character, index) =>
            character && (
              <div className="character-container" key={index}>
                <div>
                  <img src={character.image} alt={character.name} />
                </div>
                <div>
                  <h3>{character.name}</h3>
                  <h6>
                    {character.status === "Alive" ? (
                      <>
                        <span className="alive"> Vivo</span>
                      </>
                    ) : character.status === "Dead" ? (
                      <>
                        {" "}
                        <span className="dead"> Muerto</span>{" "}
                      </>
                    ) : (
                      <>
                        {" "}
                        <span className="unknown">
                          Desconocido
                        </span>{" "}
                      </>
                    )}
                  </h6>
                  <p>
                    <span className="text-grey">Episodios: </span>
                    <span>{character.episode?.length || 0}</span> episodios
                  </p>
                  <p>
                    <span className="text-grey">Especie: </span>
                    <span>{character.species}</span>
                  </p>
                </div>
              </div>
            ),
        )}
      </div>
      
      {/* Controles de paginación inferiores */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '20px' }}>
        <span 
          onClick={info?.prev ? goToPrevPage : null} 
          className="back-home" 
          style={{ opacity: !info?.prev ? 0.5 : 1, cursor: info?.prev ? 'pointer' : 'not-allowed' }}
        >
          Anterior
        </span>
        
        <span onClick={resetCharacters} className="back-home">
          Volver al Home
        </span>
        
        <span 
          onClick={info?.next ? goToNextPage : null} 
          className="back-home"
          style={{ opacity: !info?.next ? 0.5 : 1, cursor: info?.next ? 'pointer' : 'not-allowed' }}
        >
          Siguiente
        </span>
      </div>
    </div>
  );
}