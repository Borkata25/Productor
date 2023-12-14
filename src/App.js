import { Login } from "./Login";
import { Register } from "./Register";
import { useState } from "react";
import './App.css'

function App() {
  const [currentForm, setCurrentForm] = useState('login')

  const toggleForm = (forName) => {
    setCurrentForm(forName);
  }


  return <div>
    {
      currentForm === 'login' ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />
    }

  </div>
}

export default App;