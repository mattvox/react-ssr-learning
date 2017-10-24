import React from 'react'

const NotFound = ({ staticContext: context = {} }) => {
  // eslint-disable-next-line no-param-reassign
  context.notFound = true

  return (
    <h1 className='center-align'>404, page not found</h1>
  )
}

export default {
  component: NotFound,
}
