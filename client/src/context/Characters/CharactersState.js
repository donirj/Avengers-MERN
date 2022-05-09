/**
 * Estado global
 * aqui vamos a gestionar la informacion
 */
import React, { useReducer } from 'react'
import CharactersContext from './CharactersContext'
import CharactersReducer from './CharactersReducer';

import axiosClient from '../../config/axios';

const CharactersState = (props) => {

    //1. estado inicial
    const initialState = {
        characters: [
            {
            name: "hulk"
            },
            {
                name: "capitan america"
            }
        ]  
    }
    //2. manejo de reducers
    //reducer - una funcion, la unica autorizada para cambiar el estado global
    //useReducer tiene dos argumentos
    //1. archivo con los difernetes escenarios para cambiar el estado global
    //2. estado inicial

    //useReducer devuelve en una desestructuracion de arreglos:
    //a. globalState - estado global de los datos (ya no es initialState)
    //b. dispatch - ordenes para cambiar el estado global
    const [globalState, dispatch] = useReducer(CharactersReducer, initialState )
    //3. funciones api/conexion a reducers(dispatch)
    //estas funciones disparan a los reducers la orden de cambiar el estado global
    const getAllCharacters = async () => {

        try {
            const res = await axiosClient.get("/api/characters/get-all")
            console.log(res)
            const charactersFromDB = res.data.data

            dispatch({
                type: "OBTENER_MASCOTAS",
                payload: charactersFromDB
            })

        } catch (error) {
            console.log(error)
        }
    }
    
    const addCharacter = async (dataForm) => {
        
        console.log(dataForm)
        try {

            await axiosClient.post("/api/characters/create", dataForm)
            
            return getAllCharacters()

        } catch (error) {

            console.log(error)

        }
        
    }

    //4. retorno - proveedores de los datos a los componentes
    return (
        <CharactersContext.Provider
            value={{
                characters: globalState.characters,
                //todas las funciones hay que pasarlas al provider
                getAllCharacters,
                addCharacter
            }}
        >

                { props.children }
        </CharactersContext.Provider>
    )
}

export default CharactersState