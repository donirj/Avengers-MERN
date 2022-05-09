import React, { useContext, useEffect } from 'react'
import CharactersContext from './../context/Characters/CharactersContext'
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from 'react-router-dom';

function HomePage() {

  //ESTADO GLOBAL
  //aquirir valores del estado global a traves del contexto
  const ctxCharacters = useContext(CharactersContext)

  const {
    characters, getAllCharacters
  } = ctxCharacters;

  //SIDE EFFECTS -  USEFFECT
  useEffect(() => {
    getAllCharacters()
  }, []);

  return (
    <div>
      <section class="py-5 text-center container">
        <div class="row py-lg-5">
          <div class="col-lg-6 col-md-8 mx-auto">
            <h1 class="fw-light">Album example</h1>
            <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
            <p>
              <a href="#" class="btn btn-primary my-2">Main call to action</a>
              <a href="#" class="btn btn-secondary my-2">Secondary action</a>
            </p>
          </div>
        </div>
      </section>
      {characters.map((character) =>(
        <div
        className='charactersBox'
        key={character.id}
        >
          <div className='singleBox'>
            <img
              className='characterPic'
              src={character.pictureUrl}
            />
            <span src={character.name}>{character.name}</span>

            <Link to={`/characters/${character._id}`}>
              <button type='button'>
                See character
              </button>
            </Link>
          </div>
        </div>
      ))}
      {
        characters.length === 0 ?
        <ClipLoader/>
        :
        characters.map(e => e.name)
      }

      <hr/>  
          

    </div>
  )
}

export default HomePage