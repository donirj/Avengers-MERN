import React, { useContext } from 'react'
import { useEffect } from 'react'

import CharactersContext from './../context/Characters/CharactersContext'

export default function Characters() {
    const ctx = useContext(CharactersContext)

    const { characters, getAllCharacters } = ctx

    //SIDE EFFECT - USEEFFECT
    useEffect(() => {
      getAllCharacters();
    }, [])

  return (
    <div>
        <h2 className="">Characters</h2>
        <div>
          
          
        </div>

        {ctx.characters.map(e => e.name)}

    </div>
  )
}
