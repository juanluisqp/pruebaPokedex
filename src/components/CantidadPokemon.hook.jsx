import React from 'react';
import { useSelector } from 'react-redux';

const CantidadPokemonHook = () => {

    const game_shop = useSelector((state) => state.game_shop);
    return (
        <React.Fragment>
                unidades: {game_shop.pokedex}
        </React.Fragment>
    );
}

export default CantidadPokemonHook;