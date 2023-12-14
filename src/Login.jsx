import { useState } from 'react';

export function Login(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className='auth-form-container'>
      <h2>Login</h2>
      <form className='login-form' onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          id="email"
          name="email"
          type="email"
          placeholder="plamenborisov99@abv.bg"
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPass(e.target.value)}
          value={pass}
          id="password"
          name="password"
          type="password"
          placeholder="*****************"
        />
        <button type="submit">Log in</button>
      </form>
      <button className='link-btn' onClick={()=>props.onFormSwitch('register')}> Don't have an account? Register here.</button>
    </div>
  );
}
