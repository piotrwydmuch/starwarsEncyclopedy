import React from 'react';


const FilmDetails = (props) => {

    return (
        <>
            <span>Film details</span><br/>
            <span>title: {props.title}</span><br/>
            <span>planets: {props.planets}</span><br/>
            <span>Date: {props.releaseDate}</span>
        </>
    )
}

export default FilmDetails;