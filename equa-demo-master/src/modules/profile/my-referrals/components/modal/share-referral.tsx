import * as React from 'react'
import styled from 'styled-components'

import FaceBookImg from '../../../../../assets/image/facebook.png'
import TwitterImg from '../../../../../assets/image/twitter.png'
import FbMessengerImg from '../../../../../assets/image/facebook-messenger.png'
import CopyBtnImg from '../../../../../assets/image/copy-button.png'
import { colors, screenSizes, theme } from '../../../../../shared/styles/theme'

const Heading = styled.div`
  width: 492px;
  font-weight: normal;
  font-size: 24px;
  font-family:'Regular'
  line-height: 33px;
  text-align: center;
  color: #2c3e50;
  max-width: 100%;
`

const ImgCont = styled.div`
  margin-top: 35px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    margin: 0 15px;
  }
`

const Instructions = styled.div`
  margin: 38px auto 0 auto;
  font-weight: 600;
  font-size: 16px;
  line-height: 27px;
  letter-spacing: 0.4px;
  color: #2c3e50;
  text-align: center;
  font-family:'Regular'
`
const LinkContainer = styled.div`
  width: 422px;
  margin: 6px auto 50px auto;
  background: #fafbfb;
  border: 1px solid #ebebeb;
  padding: 5px 40px 5px 9px;
  font-weight: normal;
  font-size: 10px;
  line-height: 24px;
  color: #898989;
  position: relative;
  max-width: 100%;
`

const CopyBtn = styled.button`
  width: 33px;
  display: flex;
  justify-content: center;
  space-between: center;
  position: absolute;
  right: 0;
  top: 0;
  outline: 0;
  padding: 0;
  height: 100%;
  background: #ebebeb;
  border: 1px solid #ebebeb;
  cursor: pointer;
`

interface Props {
  referralLink: string
  copyReferralLink: () => void
}

class ShareReferral extends React.Component<Props> {
  render() {
    const { referralLink, copyReferralLink } = this.props

    const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${referralLink}`

    const url = 'http://google.com'

    const twitterLink = `http://twitter.com/share?url='+encodeURIComponent(${url})&text=${referralLink}`

    const messengerLink = `fb-messenger://share?link=${referralLink}`

    return (
      <>
        <Heading>Share your referral link</Heading>

        <ImgCont>
          <a href={twitterLink} target="_blank">
            <img src={TwitterImg} alt="twitter" />
          </a>

          <a href={facebookLink} target="_blank">
            <img src={FaceBookImg} alt="facebook" />
          </a>

          <a href={'https://m.me'} target="_blank">
            <img src={FbMessengerImg} alt="facebook messenger" />
          </a>
        </ImgCont>

        <Instructions>Or copy this link to share</Instructions>

        <LinkContainer>
          {referralLink}
          <CopyBtn type="button" onClick={copyReferralLink}>
            <img src={CopyBtnImg} />
          </CopyBtn>
        </LinkContainer>
      </>
    )
  }
}

export default ShareReferral
