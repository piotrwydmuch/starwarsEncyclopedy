import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import Film from './Film.jsx';

const Container = styled.div `
    height: 80%;
    padding: 0 30px;
`
const FilmUlList = styled.ul `
    list-style: none;
    padding: 0;
    margin: 0;
`

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

    // console.log(films)

    return ( 
        <>
            <Container>
                <FilmUlList>
                    {films.map(film =>
                        <Film key={film.title} title={film.title}>{film.title}</Film>
                    )}
                </FilmUlList>
            </Container>
        </>
    );
}
 
export default FilmList;