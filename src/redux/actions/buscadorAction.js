import axios from "axios";

export const FETCH_POKEMON_REQUEST = 'FETCH_POKEMON_REQUEST';
export const FETCH_POKEMON_SUCCESS = 'FETCH_POKEMON_SUCCESS';
export const FETCH_POKEMON_FAILURE = 'FETCH_POKEMON_FAILURE';

// Actions

export const fetchPokemonRequest = () => {
    return {
        type: FETCH_POKEMON_REQUEST
    }
}

export const fetchPokemonSuccess = (pokemon) => {
    return {
        type: FETCH_POKEMON_SUCCESS,
        payload: pokemon
    }
}

export const fetchPokemonFailure = (error) => {
    return {
        type: FETCH_POKEMON_FAILURE,
        payload: error
    }
};

export const  fetchPokemon = (value) => {
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${value}`)
            .then(response => {
                dispatch(fetchPokemonSuccess([response.data]))
            })
            .catch(error => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'))
            });
    }
};
export const  fetchRandomPokemon = () => {
    const randomNumber = () => Math.floor((Math.random() * 899) + 1);
    
    
    return (dispatch) => {
        dispatch(fetchPokemonRequest());
        axios.get(`https://pokeapi.co/api/v2/pokemon/${randomNumber()}`)
            .then(response => {
                
                dispatch(fetchPokemonSuccess([response.data]))
                
                
            })
            .catch(error => {
                dispatch(fetchPokemonFailure('No se encontro el pokemon'))
            });
    }
};
