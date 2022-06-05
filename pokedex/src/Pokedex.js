import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './App.scss'


export class Pokedex extends Component {
    static defaultProps = {
        pokemon: [
            { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
            { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
            { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
            { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
            { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
            { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
            { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
            { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 },
            { id: 124, name: 'Garchomp', type: 'normal', base_experience: 211 }
        ]
    }
    render() {
        return (
            <div className='pokedex'>
                <h1 className='main-title'>Welcome to Pokedex Game</h1>
                <div className="pokecards-container">
                    {this.props.pokemon.map((pokemon) => {
                        return <Pokecard id={pokemon.id} name={pokemon.name} type={pokemon.type} base_experience={pokemon.base_experience} />
                    })}
                </div>
            </div>
        )
    }
}

export default Pokedex