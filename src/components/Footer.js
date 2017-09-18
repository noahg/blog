import React from 'react'
import styled from 'styled-components'

class Footer extends React.Component {
    render() {

    const Footer = styled.div`
        position: relative;
        height: 40px;
        color: lightgray;
        font-size: 10px;
        padding-left: 12px;
    `

    const Icon = styled.img`
        position: absolute;
        bottom: 0px;
        right: 0px;
        margin-bottom: 12px;
        margin-right: 12px;
        transition:  1s ease-out;
        :hover {
            transform: rotateY(360deg);
        }

    `

    const Attribution = styled.a`
        margin-left: 5px;
        font-size: 10px;
        color: lightgray;
        decoration: none;
    `

        return(
        <Footer>
            Copyright &copy; 2017 Noah Glusenkamp
            <Attribution
             href="https://icons8.com"
            >
                Icon pack by Icons8
            </Attribution>
            <Icon 
                src="data:image/png;base64,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"
                alt="Icon pack by Icons8">
            </Icon>
        </Footer>
        )
    }

}

export default Footer