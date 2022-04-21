import React, { Component } from 'react'
import {connect} from 'react-redux';
import {buy_pokedex_action, return_pokedex_action } from '../redux/actions/gameShopAction'

class CompraPokemon extends Component {
    render() {
        return (
           <div>
                <button className="btn btn-dark btn-sm mb-2" onClick={() => {
                    this.props.buy_pokedex_action(1)
                }}>Comprar Pokedex</button>   
                <button className="btn btn-dark btn-sm" onClick={() => {
                    this.props.return_pokedex_action(1)
                }}>Regresar Pokedex</button>  
           </div>
        )
    }
}

const mapDispatchToProps = {
    buy_pokedex_action,
    return_pokedex_action

}

export default connect(null, mapDispatchToProps)(CompraPokemon);