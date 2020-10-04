import React, { useState } from 'react';
import axios from 'axios';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from "@material-ui/core/styles";

import ArrowOpen from '../../images/ARROW_OPEN.svg';
import ArrowClose from '../../images/ARROW_CLOSE.svg';

const useStyles = makeStyles({
    container: {
        height: '80%',
        padding: '30px 30px 0px 30px',
        borderTop: '2px dashed #FFFFFF',
    },
    accordionElement: {
        fontFamily: 'Barlow',
        background: '#ffffff',
        padding: '0',
        color: '#00687F',
        marginBottom: '30px',
        boxShadow: '0px 2px 1px rgba(196, 196, 196, 0.2)',
        borderRadius: '4px',
        border: 'none'
    },
    customAccordionSummary: {
        backgroundColor: '#fffffff',
        boxShadow: '0px 4px 12px rgba(224, 230, 238, 0.5)'
    },
    customTypgraphy: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        fontWeight: 'bold',
    },
    customForm: {
        width: '80%',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    formInput: {
        display: 'flex',
        width: '100%',
        margin: '10px 0',
        '& label.Mui-focused': {
            color: '#1BA1BE',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#1BA1BE',
        },
    },
    submitBtn: {
        textTransform: 'uppercase',
        margin: '10px 0',
        padding: '1.5% 10%',
        backgroundColor: '#1BA1BE'
    }
});

const planetList = [
    { title: 'Tatooine'},
    { title: 'Alderaan'},
    { title: 'Yavin IV'},
    { title: 'Hoth'},
    { title: 'Dagobah'},
    { title: "Bespin"},
    { title: 'Endor'},
]

const AddFilm = () => {
    const classes = useStyles();

    const [filmName, setFilmName] = useState('');
    const [planet, setPlanet] = useState('');
    const [newFilm, addFilm] = useState([]);

    const handleChangeFilmName = (name) =>{
        setFilmName(name.target.value);
    }
    const handleChangePlanet = (planet) =>{
        setPlanet(planet.target.value);
    }

    const handleAdd = () => {
        const newFilm = {
            name: filmName,
            planet: planet,
        }
        addFilm(newFilm);
    }

    return ( 
        <>
            <div className={classes.container}>
                <Accordion className={classes.accordionElement}>
                    <AccordionSummary className={classes.customAccordionSummary}>
                        <Typography className={classes.customTypgraphy}>Add movie<img src={ArrowOpen} /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className={classes.customForm} noValidate autoComplete="off">
                            <TextField 
                            id="standard-first" 
                            className={classes.formInput} 
                            label="Movie tittle"
                            placeholder="Please enter the tittle of the movie"
                            onChange={handleChangeFilmName}
                            />
                            <Autocomplete
                            id="combo-box-demo"
                            planet={planet}
                            onChange={(event, planet) => {
                                setPlanet(planet);
                            }}
                            options={planetList}
                            getOptionLabel={(option) => option.title}
                            className={classes.formInput}
                            renderInput={(params) => <TextField {...params} 
                                className={classes.formInput}
                                label="Add Planet" 
                                placeholder="Seacrh for the the planet in database" 
                                />}
                            />
                            {/* <Autocomplete
                            id="combo-box-demo"
                            options={top100Films}
                            className={classes.formInput} 
                            renderInput={() => <TextField 
                                id="standard-second"
                                label="Add Planet" 
                                placeholder="Seacrh for the the planet in database"
                                />}
                            /> */}
                            
                            <Button 
                            type="button"
                            variant="contained" 
                            color="secondary" 
                            className={classes.submitBtn}
                            onClick={handleAdd}>
                            Add movie
                            </Button>
                        </form>
                    </AccordionDetails>
                </Accordion>
            </div>
        </>
    );
}
 
export default AddFilm;