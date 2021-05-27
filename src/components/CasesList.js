import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#B2B2B2",
    color: theme.palette.common.black,
    fontSize: 22,
    fontWeight: 900,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    backgroundColor: "#E9E3E6",
    "&:nth-of-type(odd)": {
      backgroundColor: "#E9E3E9",
    },
  },
}))(TableRow);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const CasesList = (props) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="sticky table" stickyHeader>
        <TableHead stickyHeader>
          <TableRow>
            <StyledTableCell>Country</StyledTableCell>
            <StyledTableCell align="right">Confirmed</StyledTableCell>
            <StyledTableCell align="right">Deaths</StyledTableCell>
            <StyledTableCell align="right">Population</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.cases.map((data) => (
            <StyledTableRow key={Object.keys(data)[0]}>
              <StyledTableCell component="th" scope="row">
                {Object.keys(data)[0]}
              </StyledTableCell>
              <StyledTableCell align="right">
                {data[Object.keys(data)].confirmed}
              </StyledTableCell>
              <StyledTableCell align="right">
                {data[Object.keys(data)].deaths}
              </StyledTableCell>
              <StyledTableCell align="right">
                {data[Object.keys(data)].population}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );

  //   return (
  //     <div>
  //       <table>
  //         <thead>
  //           <tr style={{ backgroundColor: "#B2B2B2" }}>
  //             <th>Country</th>
  //             <th>Confirmed</th>
  //             <th>Deaths</th>
  //           </tr>
  //         </thead>
  //         <tbody>
  //           {props.cases.map((data) => (
  //             <tr style={{ backgroundColor: "#E9E3E6" }}>
  //               <td key={Object.keys(data)[0]}>{Object.keys(data)[0]}</td>
  //               <td>{data[Object.keys(data)].confirmed}</td>
  //               <td>{data[Object.keys(data)].deaths}</td>
  //             </tr>
  //           ))}
  //         </tbody>
  //       </table>
  //     </div>
  //   );
};

export default CasesList;
