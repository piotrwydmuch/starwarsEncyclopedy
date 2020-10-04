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
    }
});

const FilmList = () => {

    const [films, setFilms] = useState([]);
    const apiUrl = 'https://swapi.dev/api/films/';

    useEffect(() => {
        async function fetchData() {
          const result = await axios(apiUrl);
          setFilms(result.data.results)
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
                        filmId={index} 
                        title={film.title} />
                    )}
                </ul>
            </div>
            <AddFilm />
        </>
    );
}
 
export default FilmList;