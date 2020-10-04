import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import FilmDetails from './FilmDetails.jsx';

import { styled } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ArrowOpen from '../../images/ARROW_OPEN.svg';

const AccordionElement = styled(Accordion)({
    fontFamily: 'Barlow',
    background: '#ffffff',
    padding: '15px',
    color: '#00687F',
    marginBottom: '30px',
});
const CustomTypography = styled(Typography)({
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    fontWeight: 'bold',
});

const Film = (props) => {
    
    const [filmDetails, setFilmDetails] = useState([]);
    const [planetDetails, setPlanetDetails] = useState([]);
        
    const dataCollapsed = useCallback((filmId) => {        
        const apiUrl = `https://swapi.dev/api/films/${filmId}/`;
        async function fetchData() {
            const result = await axios(apiUrl);
            setFilmDetails(result.data)
        }
        fetchData();
    }, []);

    const getPlanets = async (planetAPI) => {;
        const planetAPIarr = [...planetAPI];
        Promise.all(planetAPIarr.map(e => axios.get(e)))
        .then(results=> setPlanetDetails(results));
    }

    useEffect(() => {
        const planetsApiUrls = filmDetails.planets;
        getPlanets(planetsApiUrls);
    }, [filmDetails.planets]);
    
    return ( 
        <>
            <AccordionElement onClick={() => dataCollapsed(props.filmId+1)} id={`accordion_id${props.filmId+1}`}>
                <AccordionSummary>
                <CustomTypography>{props.title}<img src={ArrowOpen} /></CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <FilmDetails plantesDetails={[...planetDetails]} />
                </AccordionDetails>
            </AccordionElement>
        </>
    );
}
 
export default Film;