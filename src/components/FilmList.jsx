import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Container = styled.div `
    height: 80%;
    padding: 0 30px;
`

const FilmList = () => {

    const [films, setFilms] = useState([]);
    const apiUrl = 'https://swapi.dev/api/films/';

    useEffect(() => {
        async function fetchData() {
          // You can await here
          const result = await axios(apiUrl);
          setFilms(result.data.results)
          // ...
        }
        fetchData();
      }, []);

      console.log(films)

    return ( 
        <>
            <Container>
                <p>Its film list component</p>
            </Container>
        </>
    );
}
 
export default FilmList;