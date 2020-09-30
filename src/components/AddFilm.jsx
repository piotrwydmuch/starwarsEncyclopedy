import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div `
    border-top: 2px dashed #fff;
    padding: 0 30px;
`

class AddFilm extends Component {
    //state = {  }
    render() { 
        return ( 
            <>
                <Container>
                    <p>Its add new film component</p>
                </Container>
            </>
         );
    }
}
 
export default AddFilm;