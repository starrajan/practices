import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'

export const ModalContainer = styled.div`
    width: 1253px;
    padding: 80px 0px 44px 0px;
    background: ${colors.white};
    box-sizing: border-box;
`

export const ModalHeading = styled.div`
    font-size: 40px;
    text-align: center;
    font-family: Regular;
    color: ${colors.titleColor};
` 

export const Container = styled.div`
    padding: 78px 50px 60px 76px;
    display: flex;
`

export const UploadDocContainer = styled.div`

    width: 427px;
    img{
        width: 100%;
        height: 272px;
    }
`

export const SelectContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;

    select{
        width: 47%;
        padding: 10px;
    }
`

export const DocList = styled.div`
    padding-left: 47px;
    flex: 1;
    overflow-y: auto;
    height: 340px;

    ::-webkit-scrollbar {
        width: 6px;
      }
      
      
      ::-webkit-scrollbar-track {
        background: #eeeeee;
      }
      
      
      ::-webkit-scrollbar-thumb {
        background: #d9d9d9;
      }
`

export const DocListItem = styled.div`
    display: flex;
    align-items: center;
    padding-bottom: 24px;
`

export const UploadLabel = styled.label`
    margin: 0;
`

export const DocIcon = styled.div`
    width: 64px;
    height: 64px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    border: 3px solid #33BB40;
    box-sizing: border-box;
    font-size: 16px;
    font-family: Regular;
    color: #33BB40;
`

export const DocInfoContainer = styled.div`
    padding-left: 18px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;
`

export const DocName = styled.div`
    font-size: 16px;
    font-family: Regular;
    color: #30424D;
`

export const BarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    img{
        margin-right: 20px;
        cursor: pointer;
    }
`

export const GreenBar = styled.div`
    height: 7px;
    width: 80%;
    background: #33BB40;
`

export const StatusText = styled.div`
    font-size: 16px;
    color: #33BB40;
    font-family: Bold;
`

export const BtnContainer = styled.div`
    width: 434px;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
`

export const Buttons =  styled.div<any>`
    cursor: pointer;
    width: 205px;
    box-sizing: border-box;
    height: 52px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    letter-spacing: 2px;
    text-transform: uppercase;
    color: #FFFFFF;
    border-radius: 2px;
    background: ${props => props.type === "1" ? '#33BB40': '#475E6C'};
    font-weight: Bold;
`