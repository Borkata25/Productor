import { useSelector } from 'react-redux';
import { history } from '..';
import { useEffect, useState } from 'react';
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
import { deleteUserProducts, fetchUserProducts } from '../store/API/userApi';
import { useDispatch } from 'react-redux';
import UserNavigation from '../components/UserNavigation';
import ProductModal from '../components/ProductModal';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import WarningIcon from '@mui/icons-material/Warning';

function ProductList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);

  const currentDate = new Date();
  const tenDayaAhead = new Date();
  tenDayaAhead.setDate(currentDate.getDate() + 10);

  const copyArray = [...products];
  const sortedProducts = copyArray.sort(
    (a, b) => new Date(a.expDate) - new Date(b.expDate)
  );
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleModalClose = () => setModalOpen(false);
  const handleModalOpen = () => setModalOpen(true);

  const handleCreateModal = () => {
    setSelectedProduct(null);
    handleModalOpen();
  };

  const handleEditModal = (product) => {
    setSelectedProduct(product);
    handleModalOpen();
  };

  useEffect(() => {
    if (!user.id) {
      history.replace('/login');
    }

    fetchUserProducts(user.id, dispatch);
  }, [user.id, dispatch]);

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
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  const handleDelete = async (productId) => {
    await deleteUserProducts(productId, dispatch);
  };

  return (
    <Container component="main">
      {modalOpen && (
        <ProductModal
          userId={user.id}
          handleClose={handleModalClose}
          product={selectedProduct}
        />
      )}

      <UserNavigation firstName={user.firstName} lastName={user.lastName} />
      <TableContainer component={Paper}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'right',
            padding: '10px 10px 10px 0',
          }}
        >
          <Button variant="contained" onClick={handleCreateModal}>
            Add new
          </Button>
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
            {sortedProducts?.map((row) => (
              <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    {currentDate > new Date(row.expDate) && (
                      <LocalFireDepartmentIcon color="error" />
                    )}
                    {tenDayaAhead > new Date(row.expDate) &&
                      currentDate <= new Date(row.expDate) && (
                        <WarningIcon color="warning" />
                      )}
                    {row.name}
                  </div>
                </StyledTableCell>
                <StyledTableCell align="right">{row.quantity}</StyledTableCell>
                <StyledTableCell align="center">{row.unit}</StyledTableCell>
                <StyledTableCell align="center">{row.addDate}</StyledTableCell>
                <StyledTableCell align="center">{row.expDate}</StyledTableCell>
                <StyledTableCell align="right">
                  <Button
                    style={{ minWidth: '30px' }}
                    onClick={() => handleEditModal(row)}
                  >
                    <EditIcon color="primary" /> &nbsp;{' '}
                  </Button>
                  <Button
                    onClick={() => {
                      handleDelete(row.id);
                    }}
                  >
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
