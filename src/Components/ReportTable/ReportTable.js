import React from "react";
import {
  Table,
  TableHead,
  Paper,
  TableCell,
  TableBody,
  TableRow
} from "@material-ui/core";

const ReportTable = () => {
  return (
    <div>
      <Table>
        <TableHead style={{ backgroundColor: "#ec0080" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>Código</TableCell>
            <TableCell style={{ color: "white" }}>Nombre</TableCell>
            <TableCell style={{ color: "white" }}>Cantidad</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
          <TableRow className="table-color">
            <TableCell>004325</TableCell>
            <TableCell>Lauren Harrison</TableCell>
            <TableCell>Q.321</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default ReportTable;
