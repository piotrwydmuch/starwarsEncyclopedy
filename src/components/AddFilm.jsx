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
import { ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

import ArrowOpen from '../../images/ARROW_OPEN.svg';
import ArrowClose from '../../images/ARROW_CLOSE.svg';

const useStyles = makeStyles({
    container: {
        height: '80%',
        padding: '30px',
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

const AddFilm = (props) => {
    const classes = useStyles();


    return ( 
        <>
            <div className={classes.container}>
                <Accordion className={classes.accordionElement}>
                    <AccordionSummary className={classes.customAccordionSummary}>
                        <Typography className={classes.customTypgraphy}>Add movie<img src={ArrowOpen} /></Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <form className={classes.customForm} autoComplete="off">
                            <TextField 
                            id="standard-first" 
                            className={classes.formInput} 
                            label="Movie tittle"
                            placeholder="Please enter the tittle of the movie"
                            onChange={props.handleChangeFilmName}
                            />
                            <Autocomplete
                            id="combo-box-demo"
                            multiple
                            planet={props.planet}
                            onChange={props.onChange}
                            options={planetList}
                            getOptionLabel={(option) => option.title}
                            className={classes.formInput}
                            renderInput={(params) => <TextField {...params} 
                                className={classes.formInput}
                                label="Add Planet" 
                                placeholder="Seacrh for the the planet in database" 
                                />}
                            />
                            <Button 
                            type="button"
                            variant="contained" 
                            color="secondary" 
                            className={classes.submitBtn}
                            onClick={props.handleAdd}>
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