import { Box, Container, TextField, Grid, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { registerUser } from '../store/API/userApi';
import { useDispatch } from 'react-redux';

function Register() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();


  const handleSubmit = async(e) => {
    e.preventDefault();
    await registerUser({firstName,lastName,email,password}, dispatch)
  };
  

  return (
    
    <Container component="main" maxWidth="sm">
      <Typography style={{display: 'flex', justifyContent: 'center'}} component="h1" variant="h5">
            Register
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
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
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
              <Button type='submit' onSubmit={handleSubmit} variant="contained">Register</Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <Container style={{ display: 'flex', justifyContent: 'center' }}>
        <Link to={'/login'}>
          <Button  variant="text">Already have an account? THen log in</Button>
        </Link>
      </Container>
    </Container>
  );
}

// export function Register(props) {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [name, setName] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(email);
//   };
//   return (
//     <div className='auth-form-container'>
//       <h2>Register</h2>
//       <form className='register-form' onSubmit={handleSubmit}>
//         <label htmlFor='name'>Full Name</label>
//         <input value={name} name='name' id='name' placeholder='Full Name'/>
//         <label htmlFor="email">Email</label>
//         <input
//           onChange={(e) => setEmail(e.target.value)}
//           value={email}
//           id="email"
//           name="email"
//           type="email"
//           placeholder="plamenborisov99@abv.bg"
//         />
//         <label htmlFor="password">Password</label>
//         <input
//           onChange={(e) => setPass(e.target.value)}
//           value={pass}
//           id="password"
//           name="password"
//           type="password"
//           placeholder="*****************"
//         />
//         <button type="submit">Log in</button>
//       </form>
//       <button className='link-btn' onClick={()=>props.onFormSwitch('login')}> Already have an account? Login here.</button>
//     </div>
//   );
// }

export default Register;
