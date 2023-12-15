import { Login } from "./components/Login";
import { Register } from "./components/Register";
import { useState } from "react";

import NewUser from './components/NewUser'
import axios from "axios";
import CreateUser from "./components/NewUser";




function App() {
  const [users, setUsers] = useState([]);


  const createUser = async (user) => {
    const response = await axios.post('http://localhost:3001/users', {
      user
    })

    const updatedUsers = [...users, response.data]
    setUsers(updatedUsers)
  }

  // const [currentForm, setCurrentForm] = useState('login')

  // const toggleForm = (forName) => {
  //   setCurrentForm(forName);
  // }


  return <div>
    <CreateUser onCreate={createUser} />
  </div>





  // <div>
  //   {
  //     currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
  //   }

  // </div>
}

export default App;