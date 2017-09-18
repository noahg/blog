import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import profilePic from './profile-pic.png'

class Bio extends React.Component {
  render() {

    const BioSection = styled.div`
      display: flex;
      align-items: center;
    `

    const BioPhoto = styled.img`
      border-radius: 10%;
      align-self: flex-start;
    `
    const BioDescription = styled.p`
      padding-left: 24px;
      flex-wrap: no-wrap;
      @media (orientation: portrait) {
        padding-left: 12px;
      }
    `

    return (
    <BioSection>
      <BioPhoto
        src={profilePic}
        alt={`Noah Glusenkamp`}
      >
      </BioPhoto>
      <BioDescription>
        Hi, I'm Noah, this is where I post my <strong>insights</strong>, <strong>learnings</strong>, and <strong>opinions</strong>.{' '}
        I live in Seattle where I write, read, code, cook, meditate, and paddle. <Link to='/about-me/'>More about me</Link>
      </BioDescription>
    </BioSection>
    )
  }
}

export default Bio
