const reducer = (globalState, action) => {

    switch(action.type){

        case "OBTENER_MASCOTAS":
            return {
                ...globalState,
                characters: action.payload
            }

        case "AGREGAR_PERSONAJE":
            /**
             * type: "AGREGAR_MASCOTA"
             * payload: newCharacter
             */
            return {
                ...globalState,
                characters: [
                    ...globalState.characters,
                    action.payload
                ]
            }

        default: 
        return globalState
    }

}

export default reducer