import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import fetchPokemon from '../../redux/actions/buscadorAction';

const BuscadorPokemon = () => {
    const dispatch = useDispatch();
    const [pokemon_name, set_pokemon_name] = useState('mewtwo')
    


    return (
        <div className="form-group">
            <label htmlFor="buscar_pokemon" className="text-white">Buscar Pokemon</label>
            <input type="text" className="form-control" id="buscar_pokemon" 
            value={pokemon_name}
            onChange={ 
                (event) => {
                    set_pokemon_name(event.target.value.toLowerCase())
                }
            }

            onKeyUp={(event) => {
                if (event.keyCode === 13) {
                event.preventDefault();
                dispatch(fetchPokemon(pokemon_name))
                }
            }}
            />
            <button className="btn btn-primary mt-3" onClick={
                () => {
                    dispatch(fetchPokemon(pokemon_name))
                }
            }>Buscar</button>
        </div>
    )
}

export default BuscadorPokemon