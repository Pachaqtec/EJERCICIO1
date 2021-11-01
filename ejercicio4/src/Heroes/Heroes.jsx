import React, { useState, useEffect } from "react";
import './styles.css'

export const Heroes = () => {
    const [heroe, setHeroes] = useState([]);
    console.log(heroe)
    function informacionHeroe() {
        fetch('https://www.superheroapi.com/api.php/4934026556629020/search/superman')
            .then(response => {
                return response.json()
            })
            .then((data) => {
                console.log(data.results);
                setHeroes(data.results);
            });
    }
    useEffect(() => {
        informacionHeroe();
    }, [])
    return (
        <div className="container__hero">
            {informacionHeroe ?
                heroe.map((hero) => {
                    return (
                        <div className="contenido__hero">
                            <img src={hero.image.url} alt="" />
                            <p>Combat: {hero.powerstats.combat}</p>
                            <p>Durability: {hero.powerstats.durability}</p>
                            <p>Intelligence: {hero.powerstats.intelligence}</p>
                            <p>Power: {hero.powerstats.power}</p>
                            <p>Speed: {hero.powerstats.speed}</p>
                            <p>strength: {hero.powerstats.strength}</p>
                        </div>
                    )
                }) : <></>
            }
        </div>
    )
}