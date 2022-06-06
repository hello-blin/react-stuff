import React, { Component } from 'react'
import './Pokecard.scss'

const POKE_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"

const form = (num) => (
    num <= 999 ? `00${num}`.slice(-3) : num);

export class Pokecard extends Component {
    render() {
        let imgSrc = `${POKE_API}${form(this.props.id)}.png`;
        const props = this.props
        return (
            <div className="pokecard">
                <h1 className='pokemon-title'>
                    {props.name}
                </h1>
                <img src={imgSrc} alt="" className='pokemon-image' />
                <div className='pokemon-type'>Type: {props.type}</div>
                <div className='pokemon-exp'>Exp: {props.base_experience}</div>
            </div>
        )
    }
}

export default Pokecard