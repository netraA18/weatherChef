import React from 'react';
import MuiTable from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

/**
 * TableIngredients component displays the ingredients and measurements of a recipe in a table format.
 * @param {Object} item - Object containing recipe information
 * @returns {JSX.Element} TableIngredients component
 */
const TableIngredients = ( {item}) => {

  /**
   * Displays recipe parts (ingredients or measurements) in paragraphs.
   * @param {Object} item - Object containing recipe information
   * @param {string} partName - Name of the recipe part (ingredients or measurements)
   * @returns {JSX.Element} JSX element displaying recipe parts
   */
  const displayRecipeParts = (item, { partName }) => {
    const partInfo = [];

    for (var i = 1; i <= 20; i++) {
    partInfo[i] = item[`str${partName}${i}`];
    }

    return partInfo.map((partText, index) => (
    <p key={index}>{partText}</p>
    ));
};
  return (
    <TableContainer component = {Paper}>
      <MuiTable sx = {{minWidth: 50}} aria-label="simple table" id="tableIngredients">
        <TableHead>
          <TableRow>
            <TableCell><strong>Ingredients</strong></TableCell>
            <TableCell align='right'><strong>Measurements</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow key={item.idMeal}  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row">
              {displayRecipeParts(item, { partName: 'Ingredient' })}     
            </TableCell>
            <TableCell align='right'>
            {displayRecipeParts(item, { partName: 'Measure' })}
            </TableCell>
          </TableRow>  
        </TableBody>
      </MuiTable>
    </TableContainer>
    
  )
}

export default TableIngredients;
