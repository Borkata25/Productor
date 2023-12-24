import axios from "axios";
import { register, login } from "../../slices/userSlice";
import { history } from "../../..";
import { fetchAll, productDelete } from "../../slices/productSlice";


export async function fetchUserProducts(userId, dispatch) {
  const response = await axios.get('http://localhost:3001/products')
  const responseData = response.data;
  const userProducts = responseData.filter(productItem => productItem.userId === userId)

  await dispatch(fetchAll(userProducts))
}

export async function deleteUserProducts(productId, dispatch) {
  await axios.delete(`http://localhost:3001/products/${productId}`)

  await dispatch(productDelete(productId));
}

export async function registerUser(user, dispatch) {
  const response = await axios.post('http://localhost:3001/users', user)
  const responseUser = response.data;

  await dispatch(register({ id: responseUser.id, firstName: responseUser.firstName, lastName: responseUser.lastName }));
  history.push('/')

}

export async function loginUser(user, dispatch) {
  const response = await axios.get('http://localhost:3001/users')
  const usersList = response.data;
  const userResult = usersList.filter(userItem => userItem.email === user.email && userItem.password === user.password)

  await dispatch(login({ id: userResult[0].id, firstName: userResult[0].firstName, lastName: userResult[0].lastName }));
  history.push('/')
}


