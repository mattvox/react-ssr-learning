import React from 'react'
import { Helmet } from 'react-helmet'

const NotFound = ({ staticContext: context = {} }) => {
  // eslint-disable-next-line no-param-reassign
  context.notFound = true

  return (
    <div>
      <Helmet>
        <title>React SSR || Page Not Found</title>
        <meta property='og:title' content='React SSR || Page Not Found' />
      </Helmet>
      <h1 className='center-align'>404, page not found</h1>
    </div>
  )
}

export default {
  component: NotFound,
}
