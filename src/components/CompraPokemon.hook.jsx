import React from 'react';
import { useDispatch } from 'react-redux';
import { buy_pokedex_action, return_pokedex_action } from '../redux/actions/gameShopAction';

const CompraPokemonHook = () => {
    const dispatch = useDispatch();
    
    return (
        <div>
        <button className="btn btn-dark btn-sm mb-2" onClick={() => {
            dispatch(buy_pokedex_action(1))
        }}>Comprar Pokedex</button>   
        <button className="btn btn-dark btn-sm" onClick={() => {
            dispatch(return_pokedex_action(1))
        }}>Regresar Pokedex</button> 
        </div>
    );
}


export default CompraPokemonHook;