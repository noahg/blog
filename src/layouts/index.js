import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import typography from "../utils/typography"
import "typeface-open-sans"
import "typeface-lato"
import Footer from '../components/Footer'
const rhythm = typography.rhythm
const scale = typography.scale

class Template extends React.Component {
  render() {
    console.log(this.props)
    const {location, children } = this.props

    const AppTitle = styled.h1`
      font-size: 60px;
      margin-top: 48px;
      padding-bottom: 12px;
      border-bottom: solid 1px lightgray;

      @media (orientation: portrait) { 
        font-size: 36px;
        margin-top: 36px;
      }
      > a { 
        text-decoration: none;
        color: black;
        :hover {
          background: linear-gradient(to right, #FF5F6D 20%, #FFC371 40%, #FFC371 40%, #FF5F6D 80%);
          background-size: 200% auto;
          background-clip: text;
          text-fill-color: transparent;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          
          animation: shine 3s linear infinite;
          @keyframes shine {
            to {
              background-position: 200% center;
            }
          }

        }
      }
    `
    const AppWrapper = styled.div` 
        top: 0px;
        bottom: 0px;
    `
    const AppMainWrapper = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
    `
    const AppMain = styled.section`
      width: 50%;
      display: flex;
      flex-direction: column;
      align-items: center;
      @media (orientation: portrait) {
        width: 100%;
        padding-right: 12px;
        padding-left: 12px;
      }
    `
    const TitleIcon = styled.img`
        margin-bottom: 24px;
        width: 40px;
    `

    return (
      <AppWrapper>
        <AppMainWrapper>
          <AppMain>
            <AppTitle>
              <Link to="/">
                Noah Glusenkamp 
              </Link>
            </AppTitle>
            <TitleIcon src="data:image/png;base64,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" />
            {children()}
          </AppMain>
        </AppMainWrapper>
        <Footer>
        </Footer>
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
