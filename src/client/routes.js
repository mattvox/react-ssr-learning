import App from './App'
import HomeView from './views/HomeView'
import UsersListView from './views/UsersListView'
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
        ...NotFoundView,
      },
    ],
  },
]
