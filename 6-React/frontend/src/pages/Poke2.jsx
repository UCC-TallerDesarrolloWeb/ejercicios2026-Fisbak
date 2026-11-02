import {useEffect, useState} from "react";
import PokeCard from "@components/PokeCard";

const Poke = () => {
    const [pokeData, setPokeData] = useState([]);

    const BASE_URL = "https://pokeapi.co/api/v2/pokemon/";

    const fetchPokemon = async(id) => {
        try{
            const response = await fetch(`${BASE_URL}${id}`)
            const data = await response.json();
            setPokeData((prev) => [...prev, data]);
        }catch(error){
            console.error("Error al cargar el pokemon");
        }
    }

const fetchAllPokemon = () => {
        for(let i = 1; i < 21; i++){
            fetchPokemon(i);
        }
}

    useEffect(() => {
        fetchAllPokemon();
    }, [])

    if(!pokeData){
        return(<h2>Cargando Pokemon</h2>)
    }

    return(
        <>
            {
                pokeData.map((pokemon, index)=>(
                  <PokeCard pokeData={pokemon} key={index}/>
                ))
            }
        </>
    )
}

export default Poke;