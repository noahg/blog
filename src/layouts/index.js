import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

class Template extends React.Component {
  render() {
    console.log(this.props)
    const {location, children } = this.props

    const AppTitle = styled.h1`
      font-size: 64px;
      > a { 
        text-decoration: none;
        color: black;
      }
    `
    const AppWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `
    const AppMain = styled.section`
      width: 50%;
      @media (orientation: portrait) {
        width: 100%;
        padding-right: 12px;
        padding-left: 12px;
      }
      
    `
    return (
      <AppWrapper>
        <AppMain>
          <AppTitle>
            <Link to="/">
              Noah Glusenkamp
            </Link>
          </AppTitle>
          {children()}
        </AppMain>
      </AppWrapper>
    )
  }
}

Template.propTypes = {
  children: React.PropTypes.func,
  location: React.PropTypes.object,
  route: React.PropTypes.object,
}

export default Template
