import React, { Component } from 'react';
import styled from 'styled-components';

import FilmList from './FilmList.jsx';
import AddFilm from './AddFilm.jsx';

import Logo from '../../images/LOGO.svg';

const MainDiv = styled.div `
    width: 100%;
    max-width: 790px;
    height: 100%;
    /* min-height: 736px; */
    display: flex;
    flex-direction: column;
    margin: 100px auto;
    background-color: #E0E6EE;
`

const LogoImg = styled.img `
    display: block;
    margin: 0 auto;
    padding: 30px 0;
`

const FilmsContainer = styled.div `
    position: relative;
    display: flex;
    flex-direction: column;
`

class MainContainer extends Component {
    render() { 
        return ( 
            <>
                <MainDiv className="mainContainer">
                    <LogoImg src={Logo} alt="Logo"/>
                    <FilmsContainer>
                        <FilmList />
                        <AddFilm />
                    </FilmsContainer>
                </MainDiv>
            </>
         );
    }
}
 
export default MainContainer;