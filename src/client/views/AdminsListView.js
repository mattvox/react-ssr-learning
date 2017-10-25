import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Helmet } from 'react-helmet'

import requireAuth from '../components/hocs/requireAuth'
import { fetchAdmins } from '../actions'

class AdminsList extends Component {
  componentDidMount() {
    this.props.fetchAdmins()
  }

  renderAdmins() {
    return this.props.admins.map(admin => (
      <li key={admin.id}>{admin.name}</li>
    ))
  }

  renderHelmet() {
    return (
      <Helmet>
        <title>{`React SSR || ${this.props.admins.length} Admins`}</title>
        <meta property='og:title' content='React SSR || Admins' />
      </Helmet>
    )
  }

  render() {
    return (
      <div>
        {this.renderHelmet()}
        <h3>Protected list of admins</h3>
        <ul>{this.renderAdmins()}</ul>
      </div>
    )
  }
}

const mapStateToProps = ({ admins }) => ({ admins })

export default {
  component: connect(mapStateToProps, { fetchAdmins })(
    requireAuth(AdminsList),
  ),
  loadData: ({ dispatch }) => dispatch(fetchAdmins()),
}
