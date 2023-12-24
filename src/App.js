import Register from './pages/Register'
import Login from './pages/Login';
import {
  unstable_HistoryRouter as HistoryRouter,
  Route,
  Routes,
} from "react-router-dom";
import { history } from '.';
import ProductList from './pages/ProductList';



function App() {

  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route exact path="/" element={<ProductList />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HistoryRouter>
  );

}
export default App;