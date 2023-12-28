import {
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useEffect, useState } from 'react';
import { createProduct, editProduct } from '../store/API/userApi';
import { useDispatch } from 'react-redux';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: '15px',
  boxShadow: 24,
  p: 4,
};

function ProductModal({ handleClose, product, userId }) {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('');
  const [expiresOn, setExpiresOn] = useState('');

  useEffect(() => {
    if (product) {
      setName(product.name);
      setQuantity(product.quantity);
      setUnit(product.unit);
      setExpiresOn(product.expDate);
    }
  }, [product]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product) {
      //create logic
      const createDate = new Date().toLocaleDateString('en-US');
      const newProduct = {
        userId: userId,
        name: name,
        quantity: Number(quantity),
        unit: unit,
        addDate: createDate,
        expDate: expiresOn,
      };
      await createProduct(newProduct, dispatch);
    } else {
      const newProduct = {
        ...product,
        name: name,
        quantity: Number(quantity),
        unit: unit,
        expDate: expiresOn,
      };
      await editProduct(newProduct, dispatch);
    }
    handleClose();
  };

  return (
    <div>
      <Modal
        open={true}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate={false}
          sx={style}
        >
          <Container>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  id="standard-basic"
                  label="Name"
                  variant="outlined"
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  id="standard-basic"
                  label="Quantity"
                  variant="outlined"
                  type="number"
                  InputProps={{ inputProps: { min: 0 } }}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Unit</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={unit}
                    label="Unit"
                    onChange={(e) => setUnit(e.target.value)}
                    required
                  >
                    <MenuItem value={'Kg'}>Kg</MenuItem>
                    <MenuItem value={'Gram'}>Gram</MenuItem>
                    <MenuItem value={'Liter'}>Liter</MenuItem>
                    <MenuItem value={'Milliliter'}>Milliliter</MenuItem>
                    <MenuItem value={'Count'}>Count</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  onChange={(e) => setExpiresOn(e.target.value)}
                  value={expiresOn}
                  id="standard-basic"
                  label="Expires on"
                  variant="outlined"
                  type="date"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  required
                />
              </Grid>
            </Grid>
          </Container>

          <div
            style={{ display: 'flex', justifyContent: 'center', padding: 20 }}
          >
            <Button variant="contained" onSubmit={handleSubmit} type="submit">
              Save
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
}

export default ProductModal;
