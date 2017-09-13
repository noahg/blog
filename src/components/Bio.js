import React from 'react'

import profilePic from './profile-pic.png'

class Bio extends React.Component {
  render() {
    return (
      <p>
        <img
          src={profilePic}
          alt={`Noah Glusenkamp`}
        />
        Noah lives and works in Seattle.{' '}
        <a href="https://twitter.com/noahglus">
          You can follow him on Twitter
        </a>
      </p>
    )
  }
}

export default Bio
