import styled from 'styled-components'
import { colors, screenSizes } from '../../shared/styles/theme'
import BannerImage from '../../assets/image/bg.png'
import { Button } from '../../shared/components/button'

export const Container = styled.div`

`
export const Banner = styled.div`
  display: none;
  @media (min-width: ${screenSizes.mediaL}px) {
    background-image: url(${BannerImage});
    display: flex;
    justify-content: space-between;
    padding: 0 100px;
  }
`
export const ProfileCardWrapper = styled.div`
  max-width: 600px;
  margin: 40px 0px;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 40px auto;
  }
`

export const ProfileCardWrapperPurchase = styled.div`
  max-width: 600px;
  margin: 40px 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 40px auto;
  }
`

export const ProfileCard = styled.div`
  background:${colors.basicCard}
  margin-bottom:40px;
  border-radius: 4px;
  padding:20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding:25px;
  }
`
export const ProfileCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`
export const ProfileCardContent = styled.div`
  margin-bottom: 30px;
`

export const ProfileCardTitle = styled.p`
  font-size: 24px;
  color: ${colors.white};
  font-family: Regular;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 24px;
  }
`
export const PSubs = styled.div`
 display:flex
 margin:50px 20px
  @media (min-width: ${screenSizes.mediaL}px) {
    display:flex
    margin:60px
  }
`

export const ProfileCardSubTitle = styled.p`
  font-size: 18px;
  color: ${colors.grey};
  font-family: Regular;
`
export const ProfileCardText = styled.p`
  font-size: 18px;
  color: ${colors.white};
  font-family: Light;
`

export const BannerText = styled.p`
 color:${colors.white}
 font-size: 34px;
 text-transform: uppercase;
 font-family: Bold;
 margin-top: 40px;
`

export const SubscriptionButton = styled.button`
background:${colors.white}
font-size:12px;
border-radius:2px;
color:${colors.subscriptionColor};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 6px 15px;
font-family: Bold;
height: 33px;
margin-top: 48px;
`

export const UserInfo = styled.div`
  display: flex;
`

export const EditProfileBut = styled.button`
background:${colors.basicCard}
font-size:16px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
padding: 8px 15px;
margin-left:20px
font-family: Bold;
`
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
export const AcceptButton = styled.button`
background:${colors.green}
font-size:12px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 12px 15px;
font-family: Bold;
letter-spacing:1px;
height: 40px;
`

export const CancelButton = styled.button`
background:${colors.cancelButton}
font-size:12px;
border-radius:2px;
color:${colors.white};
outline:none;
border:none;
cursor:pointer;
text-transform:uppercase;
padding: 12px 15px;
letter-spacing:1px;
width: 40%;
margin-left:20px
font-family: Bold;
@media (min-width: ${screenSizes.mediaL}px) {
  width: 25%;
}
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
`

export const Column = styled.div`
  flex-basis: 100%;
  margin: 5px;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 5px;
  }
`
//edit container

export const EditContainer = styled.div``
export const ProfileEdit = styled.div`
  display: flex;
  margin: 30px 0;
`
export const InputLabel = styled.p`
  font-family: Regular;
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
  margin: 4px 0;
`

export const InputLabelPayment = styled.p`
  font-family: Regular;
  color: ${colors.grey};
  font-size: 16px;
  text-transform: capitalize;
  margin: 4px 0;
`

export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Regular;
`
export const PaymentOpt = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0;
`

export const PaymentModalContainer = styled.div`
  padding: 5px 10px 30px 10px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 5px 30px 30px 30px;
  }
`
export const PaymentOptionWrapper = styled.div`
  margin: 20px 0;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 100px 0;
  }
`
export const PaymentOptionRow = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  border-radius: 4px;
`

export const SubscriptionRadioRow = styled.div`
  padding: 18px;
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
  border-radius: 4px;
  background: ${colors.basicCard};
`

export const CardsImages = styled.div`
  display: flex;
`
export const RadioText = styled.span`
  margin-left: 7px;
  font-family: Regular;
  font-size: 14px;
`

//Tabs style

export const TabsContainer = styled.div`
  padding: 15px 0;
  display: flex;
  justify-content: flex-start;
  margin: 20px auto;
  max-width: 600px;
  overflow: auto;
  @media (min-width: ${screenSizes.mediaL}px) {
    max-width: 600px;
    margin: 40px auto 30px auto;
  }
`

export const ProfileWrapper = styled.div`
  padding: 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 0;
  }
`

export const TabsContainerLink = styled.div`
  font-size: 12px;
  font-family: Regular;
  letter-spacing: 1px;
  color: ${colors.grey};
  text-transform: uppercase;
  margin-right: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: ${colors.white};
    border-bottom: 1px solid;
    border-color: ${colors.white};
  }
  @media (min-width: ${screenSizes.mediaL}px) {
    font-family: Bold;
    font-size: 14px;
  }
`
export const TabPanelDisplay = styled.div`
  margin: 20px 0;
`

//settings
export const SettingsContainer = styled.div`
  padding: 15px 0;
`

//subscription
export const SubscriptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    display: flex;
    flex-direction: row;
  }
`

export const SubscriptionMainSection = styled.div`
  width: 100%;
  margin: 0px;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 50%;
    margin: 50px;
  }
`

export const SubscriptionSideSection = styled.div`
  width: 100%;
  margin: 0px;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 50%;
    margin: 50px;
  }
`
export const SubscriptionProfileCard = styled.div`
  width: 100%;
  margin: 20px auto;
  padding: 25px;
  background: #4e6370;
  text-align: center;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 70%;
    margin: auto;
  }
`

export const SubscriptionSemiBold = styled.h1`
font-size: 14px;
font-family: Bold;
letter-spacing:1px;
color:${colors.white}
text-transform:uppercase
`
export const SubscriptionNumber = styled.span`
font-size: 26px;
font-family: Regular;
letter-spacing:1px;
color:${colors.white}
text-transform:uppercase
@media (min-width: ${screenSizes.mediaL}px) {
  font-size: 40px;
}
`

export const SubscriptionLightFont = styled.p`
  font-size: 14px;
  font-family: Regular;
  letter-spacing: 1px;
  color: ${colors.white};
`
export const SubscriptionLightSmall = styled.p`
  font-size: 12px;
  font-family: Regular;
  color: ${colors.white};
  margin: 5px 0;
`

export const SubscriptionInfoWrapper = styled.div`
margin:0 0 20px 0;
background:${colors.basicCard}
margin-bottom: 40px;
border-radius: 4px;

`
export const SubscriptionContainer = styled.div`
border-bottom:1px solid;
border-color:${colors.grey}
padding:40px
`
export const SubscriptionContainerBasic = styled.div`
  padding: 60px 40px 20px 40px;
`

export const SubscriptionInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`

export const SubscriptionInfoHead = styled.p`
  font-size: 18px;
  font-family: Bold;
  color: ${colors.white};
  margin: 0;
`
export const SubscriptionHeadLight = styled.p`
  font-size: 15px;
  font-family: Regular;
  color: ${colors.white};
  margin: 0;
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 18px;
  }
`
export const SubscriptionRadioText = styled.span`
  font-size: 18px;
  font-family: Regular;
  color: ${colors.white};
  margin: 0 0 0 10px;
`

export const SubscriptionInfoGreen = styled.p`
  font-size: 18px;
  font-family: Bold;
  color: ${colors.green};
  margin: 0;
`
export const GreenLink = styled.p`
  font-size: 14px;
  font-family: Regular;
  color: ${colors.green};
  margin: 0;
  cursor:pointer
  text-align:center;
`

export const SubscriptionInfoText = styled.p`
  font-size: 18px;
  font-family: Light;
  letter-spacing: 1px;
  color: ${colors.infoGray};
  margin: 5px 0;
`
export const SubscriptionInfoLight = styled.p`
  font-size: 18px;
  font-family: Light;
  letter-spacing: 1px;
  color: ${colors.white};
  margin: 5px 0;
`

export const SubscriptionButtonFull = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  width: 100%;
  padding: 15px 1rem;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  margin-bottom: 25px;
  font-family: Bold;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
`
export const PaymentHistory = styled.div`
 background:${colors.basicCard2}
 margin:20px 0;
`
export const PaymentHistoryHead = styled.div`
  padding: 18px;
  border-bottom: 1px solid;
  border-color: ${colors.grey};
`

export const PaymentHistoryContent = styled.div`
  padding: 18px;
  margin-top: 10px;
`

export const BillingCard = styled.div`
  margin-top: 30px;
  background: ${colors.basicCard};
`

export const BillingCardContent = styled.div`
  padding: 18px;
  margin-top: 10px;
`
export const BillingCardFooter = styled.div`
border-top:1px solid;
border-color:${colors.grey}
justify-content: space-around;
display:flex;
`
export const BillingCardFooterText = styled.div`
  font-size: 14px;
  font-family: Bold;
  color: ${colors.white};
  text-align: center;
  padding: 20px;
  width: 50%;
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: ${colors.basicCard};
  margin-top: 30px;
`

export const GridItem = styled.div`
  padding: 20px;
  font-size: 30px;
  text-align: center;
`

export const BillingWrapper = styled.div`
  margin: 70px 0;
`

export const SubscriptionHeading = styled.div`
display:flex
justify-content: space-between;
margin: 30px 0px;
@media (min-width: ${screenSizes.mediaL}px) {
  margin: 30px 60px;
}
`

export const SubscriptionHeadingCart = styled.div`
display:flex
justify-content: space-between;
margin: 50px 0px 30px 0px;
@media (min-width: ${screenSizes.mediaL}px) {
  margin: 80px 60px 30px 60px;
}
`

export const PortfolioTitle = styled.div`
font-size: 16px;
font-family: Bold;
color: ${colors.white};
text-align: center;
text-transform:uppercase
padding:20px 0;
`

export const GridPortfolio = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  margin-top: 30px;
  grid-column-gap: 0px;
  grid-template-columns: repeat(1, 1fr);
  @media (min-width: ${screenSizes.mediaL}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
  }
`

export const GridItemPortfolio = styled.div`
  font-size: 30px;
  text-align: center;
  width: 100%;
`
export const PortfolioWrapper = styled.div`
  margin: 50px 20px;
   @media (min-width: ${screenSizes.mediaL}px) {
    margin: 60px;
  }
`
export const StyledRow = styled.div`
  height: 450px;
  overflow-y: auto;
`

export const PortfolioRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
  padding: 8px;
  border-radius: 3px;
`

export const PortfolioShareBlock = styled.div`
  padding: 65px;
  text-align: center;
`
export const PortfolioShareHead = styled.div`
  font-size: 45px;
  font-family: Regular;
  color: ${colors.white};
`

export const ChartContainer = styled.div`
  position: relative;
  margin: auto;
`

export const AbsoulteText = styled.div`
  width: 100%;
  position: absolute;
  top: 35%;
  left: 0;
`

export const AbsoulteText1 = styled.p`
  font-size: 34px;
  color: white;
  font-family: Regular;
  margin: 0;
`

export const AbsoulteText2 = styled.p`
  font-size: 16px;
  color: white;
  font-family: Regular;
`
export const ChartValues = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
`
export const ChartValuesWrap = styled.div`
  padding: 56px 10px 20px 10px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 56px 0 20px 0;
  }
`
export const FilledLabel = styled.div`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const PortfolioSubTitle = styled.div`
  font-size: 35px;
  color: white;
  font-family: Regular;
  text-align: center;
`
export const WrapShareChart = styled.div`
width: 280px;
margin: auto;

@media (min-width: ${screenSizes.mediaL}px) {
  width: 100%;
  margin: auto;

}
`

