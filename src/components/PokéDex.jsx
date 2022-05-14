import React, { useEffect, useState } from 'react';
import axios from 'axios';


const PokéDex = (props) => {
    const [pokémonInfo, setpokémonInfo] = useState([]);

const getPokémon = (e) => {
    e.preventDefault()
    axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(response=>{setpokémonInfo(response.data.results)
            console.log(response.data)
                })
            .catch(err => console.log(err))

}

    // useEffect(()=>{
        
    // }, []); 
    return(
        <div>
            <button onClick={getPokémon}>Get That Pokémon!!</button>
            {pokémonInfo.map((eachPokémon, i) => {
                return(
                    <p>{eachPokémon.name}</p>
                )
            })}
        </div>
    )
}


export default PokéDex;