import HomeView from './views/HomeView'
import UsersListView from './views/UsersListView'

export default [
  {
    ...HomeView,
    path: '/',
    exact: true,
  },
  {
    ...UsersListView,
    path: '/users',
  },
]
