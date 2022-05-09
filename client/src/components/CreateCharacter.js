import React, { useState, useContext } from 'react'
import CharactersContext from './../context/Characters/CharactersContext'


const CreateCharacter = () => {

  //ESTADO GLOBAL
  //aquirir valores del estado global a traves del contexto
  const ctx = useContext(CharactersContext)

  const {
    addCharacter
  } = ctx


  //ESTADO LOCAL
  const  [ newCharacter, setNewCharacter] = useState({
    name: "",
    pictureUrl: "",
    aka: "",
    gender: "",
    description: ""
  })

  //FUNCIONES DE ESTADO LOCAL
  const handleForm = (event) => {
    event.preventDefault()

    setNewCharacter({
      ...newCharacter,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    addCharacter(newCharacter)
  }


  return (
    <>
      <div className='outBox'>
      <div className='mainBox'>
        <form onSubmit={ (e) => {handleSubmit(e)} }>

          <div>
            <input
              className='inputBox1'
              value={newCharacter.name}
              name="name"
              placeholder='Name'
              onChange={(e) => { handleForm(e)}}
            />
            <input
              className='inputBox1'
              value={newCharacter.pictureUrl}
              name="pictureUrl"
              placeholder='picture'
              onChange={(e) => { handleForm(e)}}
            />
          </div>
          <br/><br/>
          <div>
            <input
              className='inputBox1'
              value={newCharacter.aka}
              name="aka"
              placeholder='aka'
              onChange={(e) => { handleForm(e)}}
            />
            <select
              className='inputBox1'
              value={newCharacter.gender}
              name="gender"
              placeholder='gender'
              onChange={(e) => { handleForm(e)}}
            >
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <input
            className='inputBox2'
            value={newCharacter.description}
            name="description"
            placeholder='description'
            onChange={(e) => { handleForm(e)}}
          />
          <br/><br/>
          <button className='button1'>
            Crear personaje
          </button>
        </form>
      </div>
      </div>
    </>
  )
}

export default CreateCharacter