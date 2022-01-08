import {useContext} from 'react';
import {AppContext} from './AppContext';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CartDetails() {
    const [item, total] = useContext(AppContext); 



  return (
    <>
    <TableContainer component={Paper}>
        <h1>Cart Details</h1>
        <p>Invoice</p>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Item</StyledTableCell>
            <StyledTableCell align="right">quantity&nbsp;</StyledTableCell>
            <StyledTableCell align="right">Price&nbsp;(in Rupee)</StyledTableCell>
            <StyledTableCell align="right">Final Price&nbsp;</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {item.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                Item {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">{row.sum}</StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.finalPrice}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
        
      
        

      </Table>
      
    </TableContainer>
    <h5>Total Price <span>{total}</span></h5>
  </>
  );
}
