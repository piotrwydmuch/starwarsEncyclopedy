import React from 'react';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { makeStyles } from "@material-ui/core/styles";
import { styled } from '@material-ui/core/styles';

const useStyles = makeStyles({
    firstTableCell: {
      color: 'rgba(0, 104, 127, 1)',
      paddingLeft: '0',
    },
    customTableCell: {
        border: 'none',
        fontWeight: '400',
    }
});

const FilmDetails = (props) => {
    const classes = useStyles();
    return (
        <>
            <TableContainer>
                <Table aria-label="Planets table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left" className={classes.firstTableCell}>Planet Name</TableCell>
                            <TableCell align="right">Rotation period</TableCell>
                            <TableCell align="right">Orbital period</TableCell>
                            <TableCell align="right">Diameter</TableCell>
                            <TableCell align="right">Climate</TableCell>
                            <TableCell align="right">Surface water</TableCell>
                            <TableCell align="right">Population</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {props.plantesDetails.map((planet) => (
                        <TableRow key={planet.data.name}>
                            <TableCell align="left" component="th" scope="row" className={classes.firstTableCell}>
                                {planet.data.name}
                            </TableCell>
                            <TableCell classsName={classes.customTableCell} align="right">{planet.data.rotation_period}</TableCell>
                            <TableCell classsName={classes.customTableCell} align="right">{planet.data.orbital_period}</TableCell>
                            <TableCell classsName={classes.customTableCell} align="right">{planet.data.diameter}</TableCell>
                            <TableCell classsName={classes.customTableCell} align="right">{planet.data.climate}</TableCell>
                            <TableCell classsName={classes.customTableCell} align="right">{planet.data.surface_water}</TableCell>
                            <TableCell classsName={classes.customTableCell} align="right">{planet.data.population}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FilmDetails;