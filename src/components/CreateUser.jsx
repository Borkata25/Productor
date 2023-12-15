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
    <div>
      <h3>Add a User</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={handleChange} />
        <button>Create!</button>
      </form>
    </div>
  );
}

export default CreateUser;
