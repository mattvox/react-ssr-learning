import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const styles = {
  logo: {
    paddingLeft: '12px',
  },
}

const Header = ({ auth }) => {
  const authButton = auth
    ? <a href='/api/logout'>Logout</a>
    : <a href='/api/auth/google'>Login</a>

  return (
    <nav>
      <div className='nav-wrapper'>
        <Link to='/' className='brand-logo' style={styles.logo}>
          React SSR
        </Link>
        <ul className='right'>
          <li><Link to='/users'>Users</Link></li>
          <li><Link to='/admins'>Admins</Link></li>
          <li>{authButton}</li>
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = ({ auth }) => ({ auth })

export default connect(mapStateToProps)(Header)
