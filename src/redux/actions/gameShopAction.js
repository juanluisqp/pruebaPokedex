export const BUY_POKEDEX = 'BUY_POKEDEX'
export const RETURN_POKEDEX = 'RETURN_POKEDEX'

export const buy_pokedex_action = (cant) => {
    return {
    type: BUY_POKEDEX,
    payload: cant
    }
}

export const return_pokedex_action = (cant) => {
    return {
        type: RETURN_POKEDEX,
        payload: cant
    }
}