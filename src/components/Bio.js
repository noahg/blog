import React from 'react'
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
    `
    const BioDescription = styled.p`
      padding-left: 24px;
      @media (orientation: portrait) {
        padding-left: 12px;
        max-height: 144px;
        overflow-y: scroll;
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
        Hi, I'm Noah, this is where I post my <strong>binsights</strong>, <strong>learnings</strong>, and <strong>opinions</strong>.{' '}
        I post what I'm reading on <a href='https://www.tumblr.com/blog/noahglus'>Tumblr</a>, 
        my undeveloped thoughts on <a href='https://twitter.com/noahglus'>Twitter</a>, 
        my work status on <a href='https://www.linkedin.com/in/noah-glusenkamp-b8339512/'>LinkedIn</a>, 
        my code on <a href='https://www.github.com/noahg'>GitHub</a>, 
        and my cat on <a href='https://www.instagram.com/noahglus/'>Instagram</a>. 
      </BioDescription>
    </BioSection>
    )
  }
}

export default Bio
