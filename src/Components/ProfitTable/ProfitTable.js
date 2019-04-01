import React from "react";
import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Paper
} from "@material-ui/core";

const ProfitTable = () => {
  return (
    <div>
      <Paper style={{ marginTop: "2vh" }}>
        <Table>
          <TableHead style={{ backgroundColor: "#ec008c" }}>
            <TableRow>
              <TableCell style={{ color: "white" }}>
                Lo que tendría hacer
              </TableCell>
              <TableCell style={{ color: "white" }}>Pedido 1</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow className="table-color">
              <TableCell>
                Cantidad a pagar por compra del programa de Bienvenida cada
                campaña.
              </TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>Cantidad de clientes necesaria por campaña.</TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>
                Cantidad de venta a cada cliente por campaña.
              </TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>
                Cantidad de Venta de folletos de Cosméticos y Moda y Hogar
                necesaria por campaña.
              </TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>
                Precio sugerido al que puedes vender el Programa de Bienvenida.
              </TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>
                Tu ganancias por tu venta de folleto de Cosméticos y Moda y
                Hogar.
              </TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>
                Tu ganancia por vender el Programa de Bienvenida.
              </TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
            <TableRow className="table-color">
              <TableCell>Tu ganancia total de cada campaña.</TableCell>
              <TableCell style={{ color: "#ec008c" }}>Cantidad</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default ProfitTable;
