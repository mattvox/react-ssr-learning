import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import { fetchUsers } from '../actions'

class UsersList extends Component {
  componentDidMount() {
    this.props.fetchUsers()
  }

  renderUsers() {
    return this.props.users.map(user =>
      <li key={user.id}>{user.name}</li>)
  }

  renderHelmet() {
    return (
      <Helmet>
        <title>{`React SSR || ${this.props.users.length} Users`}</title>
        <meta property='og:title' content='React SSR || Users' />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.renderHelmet()}
        <h3>List of Users</h3>
        <ul>{this.renderUsers()}</ul>
      </div>
    )
  }
}

const mapStateToProps = state => (
  { users: state.users }
)

const loadData = store => store.dispatch(fetchUsers())

export default {
  loadData,
  component: connect(mapStateToProps, { fetchUsers })(UsersList),
}
