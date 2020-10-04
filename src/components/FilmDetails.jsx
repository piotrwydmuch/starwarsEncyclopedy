import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const FilmDetails = (props) => {

    return (
        <>
            {/* <span>
                {props.plantesDetails.map(planet =>(
                    <p key={planet.data.name}>{planet.data.name}</p>
                ))}
            </span> */}
            <TableContainer>
                <Table aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>Planet Name</TableCell>
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
                        <TableCell component="th" scope="row">
                            {planet.data.name}
                        </TableCell>
                        <TableCell align="right">{planet.data.rotation_period}</TableCell>
                        <TableCell align="right">{planet.data.orbital_period}</TableCell>
                        <TableCell align="right">{planet.data.diameter}</TableCell>
                        <TableCell align="right">{planet.data.climate}</TableCell>
                        <TableCell align="right">{planet.data.surface_water}</TableCell>
                        <TableCell align="right">{planet.data.population}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default FilmDetails;