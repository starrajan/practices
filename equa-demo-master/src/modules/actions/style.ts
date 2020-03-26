import styled from 'styled-components'
import { colors, screenSizes } from '../../shared/styles/theme'
import { Button } from '../../shared/components/button'

export const Container = styled.div``

export const ActionTopContainer = styled.div`
  margin: 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 2% 18% 5% 18%;
  }
`
export const Topics = styled.div`
  margin: 20px;
  border-top: 1px solid;
  border-color: ${colors.grey};
  padding-top: 50px;
  @media (min-width: ${screenSizes.mediaL}px) {
    margin: 4% 18% 5% 18%;
  }
`

export const ActionCard = styled.div`
  background: ${colors.basicCard};
  padding: 20px;
`
export const ActionCardHead = styled.div`
  font-size: 24px;
  color: ${colors.white};
  font-family: Regular;
  margin-left: 10px;
`

export const ActionRows = styled.div`
  margin-top: 30px;
`

export const ActionRow = styled.div`
  justify-content: space-between;
  margin: 15px 0;
  padding: 15px;
  border-radius: 3px;
`
export const ActionRowText = styled.div`
  font-size: 16px;
  color: ${colors.white};
  font-family: Bold;
  text-decoration: underline;
`

export const ActionSearch = styled.div`

`
export const ActionHeading = styled.div`
  font-size: 32px;
  line-height: 44px;
  font-family: Regular;
  color: ${colors.white};
  margin-bottom: 30px;
`
export const ActionButton = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  letter-spacing: 2px;
  padding: 15px 1rem;
  outline: none !important;
  border-radius: 2px;
  font-family: Bold;
`

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  flex-direction: column;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 5px;
    flex-direction: row;
  }
`

export const Column = styled.div`
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 5px;
  }
`
export const NoPadColumn = styled.div`
  flex-basis: 100%;
  @media (min-width: ${screenSizes.mediaL}px) {
    flex: 1;
    margin: 0px;
  }
`

export const ActionLink = styled.div`
  font-size: 24px;
  font-family: Light;
  color: ${colors.white};
  padding: 15px 0;
`
export const SearchResult = styled.div`
  padding-top: 30px;
`

export const ActionGrid = styled.div`
  display: block;
  padding: 15px;
  @media (min-width: ${screenSizes.mediaL}px) {
    display: grid;
    margin-bottom: 0px;
    grid-template-columns: auto auto auto auto;
    grid-gap: 25px;
  }
`
export const ActionGridItem = styled.div`
text-align: center;
font-size: 30px;
background-color: ${colors.basicCard};
border-radius:3px
padding: 10px;
display: flex;
height: 145px;
cursor:pointer;
margin: 15px 0;
&:hover{
  border: 3px solid;
  border-color: ${colors.green}
  margin-bottom: 15px;
  }
@media (min-width: ${screenSizes.mediaL}px) {
  margin: 15px;
}


`
export const ActionGridText = styled.p`
  font-size: 16px;
  font-family: Regular;
  color: ${colors.white};
  text-align: center;
  margin: 0;
`

export const ActionGridContent = styled.div`
  padding: 30px 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 30px 60px;
  }
`

export const ActionImage = styled.img`
  height: 50px;
  margin: 20px 5px;
`
export const RequestContainer = styled.div`
  padding: 50px 20px;
  @media (min-width: ${screenSizes.mediaL}px) {
    padding: 30px 60px;
  }
`
export const HeaderLink = styled.p`
  margin: 0px 10px;
  font-size: 24px;
  cursor: pointer;
  font-family: Light;
  color: ${colors.white};
  @media (min-width: ${screenSizes.mediaL}px) {
    font-size: 2em;
  }
`
export const HeaderSubLink = styled.p`
  margin: 0px 10px;
  font-size: 16px;
  cursor: pointer;
  font-family: Light;
  color: ${colors.grey};
`

export const RequestFeatureForm = styled.div`
  width: 100%;
  margin: 20px 0;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 50%;
    margin: 20px auto;
  }
`

export const InputLabel = styled.p`
  font-family: Light;
  color: ${colors.white};
  font-size: 16px;
  text-transform: capitalize;
  margin: 5px 0;
`

export const err = styled.p`
  color: ${colors.errColor};
  font-size: 14px;
  margin: 2px 0 0 0;
  font-family: Light;
`
export const ButtonAction = styled(Button)`
  font-weight: 800;
  font-size: 14px;
  padding: 12px 25px;
  letter-spacing: 2px;
  width: 40%;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  font-family: Regular;
  @media (max-width: ${screenSizes.mediaS}px) {
    width: 100%;
  }
`
export const DetailsButton = styled(Button)`
  font-weight: 800;
  font-size: 12px;
  padding: 7px 25px;
  letter-spacing: 2px;
  width: 50%;
  outline: none !important;
  margin-top: 20px;
  border-radius: 2px;
  margin-right: 20px;
  font-family: Regular;
  @media (min-width: ${screenSizes.mediaL}px) {
    width: 25%;
    font-size: 14px;
    padding: 12px 25px;
  }
`

export const ActionDetailCard = styled.div`
  margin: 30px auto;
`
export const ActionButtonWrapper = styled.div`
  display: flex;
  margin: 40px 0;
`

export const ActionCardHeader = styled.div`
background:${colors.ActionCardColor}
padding: 32px;
display: flex;
height:100%

`
export const ActionDetailContent = styled.div`
  padding: 40px;
  font-size: 20px;
  line-height: 36px;
  font-family: Light;
  color: ${colors.white};
  background: ${colors.basicCard};
  height: 500px;
  overflow: auto;
`
export const ActionHead = styled.div`
margin: 35px 30px;
  color: white;
  display:flex;
  justify-content:space-between
  .dashboard {
    font-size: 32px;
    line-height: 44px;
  }
  .org-name {
    font-size: 16px;
    line-height: 22px;
    opacity: 0.6;
  }
`
export const PendingActions = styled.div`
padding: 30px;
`
