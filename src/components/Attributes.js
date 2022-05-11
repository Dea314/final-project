import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 20,
    fontFamily:['BlinkMacSystemFont'],
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(attribute: string, type: string, description: string) {
  return { attribute, type, description };
}

const rows = [
  createData("id", "number", "Id refered to the sequence of the images"),
  createData("name", "string", "A Character's full name"),
  createData(
    "location",
    "string",
    "Locations that the Character appeared in through out the Games"
  ),
  createData("elements", "string", "Which elements they come from"),
  createData("weakness", "string", "The soft spot to win a battle"),
  createData("strength", "string", "What makes them powerful"),
  createData(
    "resistance",
    "string",
    "Which components they are resistant to in a battle"
  ),
  createData("weapon", "string", "Which weapons they use for the attack"),
  createData("game", "string", "Which games they appear in"),
  createData("description", "string", "Information about the Character"),
  createData("img_url", "string", "Link to the Character's image"),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Attribute</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="center">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.attribute}>
              <StyledTableCell component="th" scope="row">
                {row.attribute}
              </StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="center">
                {row.description}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
