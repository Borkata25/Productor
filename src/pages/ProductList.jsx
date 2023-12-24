import { useSelector } from 'react-redux';
import { history } from '..';
import { useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  Container,
  Button,
} from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function ProductList() {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);

  useEffect(() => {
    if (!user.id) {
      history.replace('/login');
    }
  }, [user.id]);

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

  console.log(products, 'prods');

  return (
    <Container component="main">
      <TableContainer component={Paper}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            padding: '10px 0',
          }}
        >
          <Button variant="contained">Add new</Button>
        </div>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="center">Unit</StyledTableCell>
              <StyledTableCell align="center">Added on</StyledTableCell>
              <StyledTableCell align="center">Expires on</StyledTableCell>
              <StyledTableCell align="right">Actions</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  {row.name}
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="center">{row.unit}</StyledTableCell>
                <StyledTableCell align="center">{row.addDate}</StyledTableCell>
                <StyledTableCell align="center">{row.expDate}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button style={{ minWidth: '30px' }}>
                    <EditIcon color="primary" /> &nbsp;{' '}
                  </Button>
                  <Button>
                    <DeleteIcon color="error" />
                  </Button>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}
export default ProductList;
