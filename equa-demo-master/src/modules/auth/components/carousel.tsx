import * as React from 'react'
import styled from 'styled-components'
import SignInBackground from '../../../assets/image/signin-background.svg'
import { StyledH1 } from '../../../shared/styles/styled'
import Slider from 'react-slick'
import { colors } from '../../../shared/styles/theme'

import { rgba } from 'polished'

const StyledCarousel = styled.div`
  width: 50%;
 
  background: linear-gradient(180deg,#394E5B 0%,#597180 100%);
    height: 100vh;
  h2 {
    + div {
      font-size: 0.8em;
      opacity: 0.75;
    }
  }
  h1 {
    margin: 10px 0;
    font-size: 40px;
    font-family: Light;
  }
  *:focus {
    outline: none;
  }
  > div {
    > ul {
      bottom: -50px;
      button {
        background-color: ${colors.primaryLight};
        border-radius: 10px;
        width: 12px;
        height: 12px;
        :before {
          content: none;
        }
      }
    }
  }
`


const StyledSignInBackground = styled.div`
background-image: url(${SignInBackground});
left: 0;
height: 100%;
z-index: -1;
background-repeat: no-repeat;
background-size: cover;
padding-right: 70px;
padding-left: 40px;
padding-top: 50px;
> div {
  > ul {
    bottom: -50px;
    button {
      background-color: ${colors.primaryLight};
      border-radius: 10px;
      width: 12px;
      height: 12px;
      :before {
        content: none;
      }
    }
  }
`

const SliderSection = styled.div`
  section {
    margin: 20px 0;
    > div {
      font-size: 2.5em;
      color: ${colors.secondary};
      + div {
        font-size: 0.9em;
        color: ${colors.white};
      }
    }
  }
`

const SubHead = styled.p`
color: #FFFFFF;
text-align: start;
font-size: 30px;
font-weight: 100;
font-family: Light;
`
const SubContent = styled.p`
color: #FFFFFF;
text-align: start;
font-size: 16px;
font-family: Light;
margin-bottom:25px;
`

const labelStyle={
  fontSize:'20px',
  color: "#8b9296",
  fontFamily:'Light',
  marginBottom:'35px'
}

interface Props {
  totalUsers: number
  activeUsers: number
}

function Carousel(props: Props) {
  const settings = {
    dots: true,
    infinite: true,
    autoplaySpeed: 15000,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    <StyledCarousel>
      <StyledSignInBackground>
      <StyledH1>Welcome To Equa Start</StyledH1>
      <label style={labelStyle}>Conquering business challenges of today.</label>
      <Slider {...settings}>
        <SliderSection>
          <section>
            <SubHead style={{color:colors.green}}>{props.totalUsers}</SubHead>
            <SubContent>Total Waitlist Signups</SubContent>
          </section>
          <section>
            <SubHead style={{color:colors.green}}>{props.activeUsers}</SubHead>
            <SubContent>Active Users</SubContent>
          </section>
        </SliderSection>
        <SliderSection>
          <SubHead>Capitalization Tables</SubHead>
          <SubContent>Fortify your business assets using the cap table management tool. Enjoy superior equity and asset management.</SubContent>
          <SubHead>Equa Transfer</SubHead>
          <SubContent>Secure your financial records and accounts using our in-house transfer agent relationships.</SubContent>
          <SubHead>Employee Stock Ownership Plans</SubHead>
          <SubContent>Manage your ESOP using our platform. Stop using outdated and error-prone ESOP systems.</SubContent>
        </SliderSection>
        <SliderSection>
          <SubHead>Structural Efficiency</SubHead>
          <SubContent>
            Convert your company's structural agreements into actionable living agreements. Minimize excessive legal fees by adding your
            legal team for direct approval.
          </SubContent>
          <SubHead>Formation Documents</SubHead>
          <SubContent>
            Form your business entity directly into your Equa account for immediate integration with your organizations. No more wasted time
            doing your own filings.
          </SubContent>
          <SubHead>Business Agreements</SubHead>
          <SubContent>
            Facilitate your operational and legal agreements using our software as a central source of truth. Never lose sleep over possible
            document errors.
          </SubContent>
        </SliderSection>
        <SliderSection>
          <SubHead>Permission-Based Access</SubHead>
          <SubContent>
            Keep your documents organized and customized without fear of security risks. Grant different levels of access to individual
            users.
          </SubContent>
          <SubHead>Data Rooms</SubHead>
          <SubContent>Access a secure investor data room. Make your investors happy with easily accessible information.</SubContent>
          <SubHead>Notification System</SubHead>
          <SubContent>
            Interact with your organization using our communication system. Don't fret about getting bogged down with multiple chat
            platforms.
          </SubContent>
        </SliderSection>
      </Slider>
      </StyledSignInBackground>


    
    </StyledCarousel>
  )
}

export default Carousel
