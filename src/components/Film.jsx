import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';

import FilmDetails from './FilmDetails.jsx';

import { styled } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

import ArrowOpen from '../../images/ARROW_OPEN.svg';
import ArrowClose from '../../images/ARROW_CLOSE.svg';

const AccordionElement = styled(Accordion)({
    fontFamily: 'Barlow',
    background: '#ffffff',
    padding: '0',
    color: '#00687F',
    marginBottom: '30px',
    boxShadow: '0px 2px 1px rgba(196, 196, 196, 0.2)',
    borderRadius: '4px',
    border: 'none'
});
const CustomAccordionSummary = styled(AccordionSummary)({
    backgroundColor: '#fffffff',
    boxShadow: '0px 4px 12px rgba(224, 230, 238, 0.5)'
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
    
    const [newPlanetDetails, setNewPlanetDetails] = useState([]);
    
    // const [newFilmDetails, setNewFilmDetails] = useState([]);
    // const [planetNewFilmDetails, setPlanetNewFilmDetails] = useState([]);
        
    const dataCollapsed = useCallback((filmId) => {    
        if (filmId <= 6) {
            const apiUrl = `https://swapi.dev/api/films/${filmId}/`;
            async function fetchData() {
                const result = await axios(apiUrl);
                setFilmDetails(result.data);
            }
            fetchData();
        } else {
            const lastAddedFilmArr = props.listOfAllFilms;
            const newFilm = lastAddedFilmArr[lastAddedFilmArr.length - 1];
            const newFilmPlanets = newFilm.planets.map(e => e)
            Promise.all(newFilmPlanets.map(e => axios.get(e)))
            .then(results=> setNewPlanetDetails(results));
        }
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
                <CustomAccordionSummary>
                    <CustomTypography>{props.title}<img src={ArrowOpen} /></CustomTypography>
                </CustomAccordionSummary>
                <AccordionDetails>
                    <FilmDetails plantesDetails={[...planetDetails]} newPlanetDetails={[...newPlanetDetails]} />
                </AccordionDetails>
            </AccordionElement>
        </>
    );
}
 
export default Film;