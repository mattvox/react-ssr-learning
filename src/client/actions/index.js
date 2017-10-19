import axios from 'axios'

export const FETCH_USERS = 'FETCH_USERS'

const API_URL = 'http://react-ssr-api.herokuapp.com'

export const fetchUsers = () => async (dispatch) => {
  const response = await axios.get(`${API_URL}/users`)

  dispatch({
    type: FETCH_USERS,
    payload: response,
  })
}
