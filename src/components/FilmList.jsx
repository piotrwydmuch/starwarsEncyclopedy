import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { makeStyles } from "@material-ui/core/styles";

import Film from './Film.jsx';
import AddFilm from './AddFilm.jsx';

const useStyles = makeStyles({
    container: {
        height: '80%',
        padding: '0 30px',
    },
    filmList: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
});

const FilmList = () => {

    const [films, setFilms] = useState([]);
    const apiUrl = 'https://swapi.dev/api/films/';

    const [filmName, setFilmName] = useState('');
    const [planet, setPlanet] = useState('');
    const [newFilm, addFilm] = useState([]);
    const [filmCount, setFilmCount] = useState();

    const handleChangeFilmName = (name) => {
        setFilmName(name.target.value);
    }

    const handleAdd = () => {
        const planetsApiSearch = [...planet].map( e => {
            return `https://swapi.dev/api/planets/?search=${e.title}`
        })
        const newFilm = {
            title: filmName,
            planets: [...planetsApiSearch],
        }
        setFilms(films => [...films, newFilm]);
    }

    useEffect(() => {
        async function fetchData() {
          const result = await axios(apiUrl)
          setFilms(result.data.results);
          setFilmCount(result.data.count);
        }
        fetchData();
    }, []); 
    const classes = useStyles();
    return ( 
        <>
            <div className={classes.container}>
                <ul className={classes.filmList}>
                    {films.map((film, index) =>
                        <Film 
                        key={film.title} 
                        filmCount={filmCount}
                        filmId={index} 
                        title={film.title}
                        listOfAllFilms={films} />
                    )}
                </ul>
            </div>
            <AddFilm 
            newFilm={newFilm} 
            handleChangeFilmName={handleChangeFilmName} 
            onChange={(event, planet) => {setPlanet(planet)}}
            planet={planet}
            handleAdd={handleAdd} />
        </>
    );
}
 
export default FilmList;