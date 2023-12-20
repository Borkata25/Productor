import { useState } from 'react';
import {
  Box,
  Container,
  TextField,
  Grid,
  Button,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();


  const handleSubmit = (e) => {
    e.preventDefault();
   
    console.log(email);
    console.log(password);
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography
        style={{ display: 'flex', justifyContent: 'center' }}
        component="h1"
        variant="h5"
      >
        Login
      </Typography>
      <Container
        style={{
          border: '1px solid gray',
          borderRadius: '5px',
          padding: '10px',
        }}
        component="main"
        maxWidth="sm"
      >
        
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
            <Grid
              style={{ display: 'flex', justifyContent: 'center' }}
              item
              xs={12}
            >
              <Button type="submit" onSubmit={handleSubmit} variant="contained">
                Login
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/register'}>
          <Button variant="text">Don't have an account? Register!</Button>
        </Link>
      </Container>
    </Container>
  );
}

export default Login;
