import App from './App'
import HomeView from './views/HomeView'
import UsersListView from './views/UsersListView'
import AdminsListView from './views/AdminsListView'
import NotFoundView from './views/NotFoundView'

export default [
  {
    ...App,
    routes: [
      {
        ...HomeView,
        path: '/',
        exact: true,
      },
      {
        ...UsersListView,
        path: '/users',
      },
      {
        ...AdminsListView,
        path: '/admins',
      },
      {
        ...NotFoundView,
      },
    ],
  },
]
