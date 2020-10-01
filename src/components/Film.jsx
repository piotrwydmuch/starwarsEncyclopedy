import React from 'react';

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
    //state = {  }
    return ( 
        <>
            <AccordionElement onChange={console.log('dksodksods')}>
                <AccordionSummary
                id={`id`}
                >
                <CustomTypography>{props.title}<img src={ArrowOpen} /></CustomTypography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                </AccordionDetails>
            </AccordionElement>
        </>
    );
}
 
export default Film;