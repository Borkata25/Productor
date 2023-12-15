import { useState } from 'react';

function CreateUser({ onCreate }) {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate(name);
    setName('');
  };

  return (
    <div >
      <form onSubmit={handleSubmit}>
        <label>User</label>
        <input  value={name} onChange={handleChange} />
        <button >Create!</button>
      </form>
    </div>
  );
}

export default CreateUser;
