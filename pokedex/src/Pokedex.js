import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './App.scss'


export class Pokedex extends Component {

    render() {
        return (
            <div className='pokedex'>
                <h2 className='result'>{this.props.isWinner ? 'Winner' : 'Looser'}</h2>
                <div className="pokecards-container">
                    {this.props.pokemon.map((pokemon) => {
                        return <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience} />
                    })}
                </div>
                <span className='total_exp'> Total Experience: {this.props.exp}</span>
            </div>
        )
    }
}

export default Pokedex