import { useState } from 'react';

export function Register(props) {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };
  return (
    <div className='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label htmlFor='name'>Full Name</label>
        <input value={name} name='name' id='name' placeholder='Full Name'/>
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
      <button className='link-btn' onClick={()=>props.onFormSwitch('login')}> Already have an account? Login here.</button>
    </div>
  );
}
