import React from 'react'

const Home = () => (
  <div>
    <div>
      Home Component
    </div>

    <button onClick={() => console.log('Hi there!')}>
      Press Me!
    </button>
  </div>
)

export default {
  component: Home,
}
