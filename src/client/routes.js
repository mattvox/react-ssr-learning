import App from './App'
import HomeView from './views/HomeView'
import UsersListView from './views/UsersListView'

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
    ],
  },
]
