import { BUY_POKEDEX, RETURN_POKEDEX } from "../actions/gameShopAction";

const default_game_shop = {
    pokedex: 30
};

const game_shop = (state = default_game_shop, action) => {
    switch(action.type) {
        case BUY_POKEDEX: {
            return {
                ...state,
                pokedex: state.pokedex - action.payload
            }
        }
        case RETURN_POKEDEX: {
            return {
                ...state,
                pokedex: state.pokedex + action.payload
            }
        }

        default: return state
    }
}

export default game_shop;