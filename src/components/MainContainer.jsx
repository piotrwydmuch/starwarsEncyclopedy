import React, { Component } from 'react';
import { makeStyles } from "@material-ui/core/styles";

import FilmList from './FilmList.jsx';
//import AddFilm from './AddFilm.jsx';

import Logo from '../../images/LOGO.svg';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    mainContainer: {
        width: '100%',
        maxWidth: '790px',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: '100px auto',
        backgroundColor: '#E0E6EE',
    },
    logo: {
        display: 'block',
        margin: '0 auto',
        padding: '30px 0',
    },
    filmsContainer: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
    }
});

const MainContainer = () => {
    const classes = useStyles();
    return ( 
        <>
            <div className={classes.mainContainer}>
                <img className={classes.logo} src={Logo} alt="Logo"/>
                <div className={classes.filmsContainer}>
                    <FilmList />
                </div>
            </div>
        </>
    );
}
 
export default MainContainer;