import { createGlobalStyle } from 'styled-components'
import { rgba } from 'polished'
import styled from 'styled-components'

import SemiBold from '../../assets/nunito/NunitoSans/NunitoSans-SemiBold.ttf'
import Light from '../../assets/nunito/NunitoSans/NunitoSans-Light.ttf'
import Regular from '../../assets/nunito/NunitoSans/NunitoSans-Regular.ttf'
import Bold from '../../assets/nunito/NunitoSans/NunitoSansBold.ttf'

export interface Colors {
  //equa
  themeBackground: string
  cancelButton: string
  white: string
  basicCard: string
  basicCard2:string
  yellow: string
  red: string
  sideNav: string
  grey: string
  titleColor: string
  labelColor: string
  primary: string
  secondary: string
  greyBorder: string
  greyLight1: string
  greyLight2: string
  greyLight3: string
  greyBackground: string
  greyLine: string
  primaryLight: string
  secondaryLight: string
  error: string
  errorBackground: string
  black: string
  green: string
  purple: string
  blue: string
  blueMed: string
  blueDark: string
  blueLight: string
  checkMarkColor: string
  checkMarkDotColor: string
  successGreen: string
  green2: string
  green3: string
  grey2: string
  grey3: string
  grey4: string
  errColor: string
  subscriptionColor: string
  DarkNav:string
  PaymentInput:string,
  infoGray:string,
  accepted:string,
  declined:string,
  pending:string,
  chartColor1:string,
  chartColor2:string,
  chartColor3:string,
  ActionCardColor:string,
  greyButton:string
}

export const colors: Colors = {
  //equa
  green: '#33BB40',
  themeBackground: '#394E5B',
  cancelButton: '#394E5B',
  white: '#FFFFFF',
  basicCard: '#4E6370',
  yellow: '#E1BB41',
  red: '#C06167',
  sideNav: '#363636',
  greyBorder: '#dbdbdb',
  titleColor: '#30424D',
  labelColor: '#5A6872',
  primary: '#30424D',
  primaryLight: '#394E5B',
  secondary: '#33BB40',
  secondaryLight: '#4AEA59',
  grey: '#8b9296',
  purple: '#9B51E0',
  black: '#000',
  greyLight1: '#B1B9BE',
  greyLight2: '#E8F1F0',
  greyLight3: '#F7FBFC',
  greyBackground: rgba(255, 255, 255, 0.05),
  greyLine: '#000',
  error: '#D0021B',
  errorBackground: '#FFC6CC',
  blue: '#00A1FB',
  blueLight: '#5BC0F7',
  blueMed: '#212F3F',
  blueDark: '#2C3E50',
  checkMarkColor: rgba(255, 255, 255, 0.1),
  checkMarkDotColor: rgba(0, 0, 0, 0.2),
  successGreen: '#A9F3B0',
  green2: '#33bb3f',
  green3: '#86E45B',
  grey2: '#4e6472',
  grey3: '#8c9aa3',
  grey4: '#596e7a',
  errColor: '#DA1E28',
  subscriptionColor: '#42A68E',
  DarkNav:'#2C3E50',
  PaymentInput:'#898989',
  basicCard2:'#566C77',
  infoGray:'#bac1c5',
  accepted:'#56C19F',
  declined:'#ED485A',
  pending:'#F39A3E',
  chartColor1:'#57BB41',
  chartColor2:'#EF6651',
  chartColor3:'#50C4ED',
  ActionCardColor:"#2F4654",
  greyButton:'#5A6E7B'
}

export interface ThemeStarter {
  [propName: string]: string | undefined
  green: string
  themeBackground: string
  cancelButton: string
  white: string
  basicCard: string
  yellow: string
  red: string
  sideNav: string
  greyBorder: string
  titleColor: string
  labelColor: string

  primary: string
  secondary: string
  background: string
  backgroundDark: string
  action?: string
  actionActive: string
  second: string
  secondActive: string
  tertiary: string
  tertiaryActive: string
  error: string
  errorActive: string
  boxShadow: string
}

export const theme: ThemeStarter = {
  green: colors.green,
  themeBackground: colors.themeBackground,
  cancelButton: colors.cancelButton,
  white: colors.white,
  basicCard: colors.basicCard,
  yellow: colors.yellow,
  red: colors.red,
  sideNav: colors.sideNav,
  greyBorder: colors.grey,
  titleColor: colors.titleColor,
  labelColor: colors.labelColor,
  primary: colors.primary,
  secondary: colors.secondary,
  background: colors.greyLight3,
  backgroundDark: colors.primaryLight,
  action: colors.secondary,
  actionActive: colors.secondaryLight,
  second: rgba(255, 255, 255, 0.1),
  secondActive: rgba(255, 255, 255, 0.2),
  tertiary: colors.primary,
  tertiaryActive: colors.primaryLight,
  accent: colors.white,
  accentActive: rgba(255, 255, 255, 0.9),
  error: colors.error,
  errorActive: `${rgba(colors.error, 0.8)}`,
  boxShadow: `${rgba(0, 0, 0, 0.1)} 0px 0px 5px 0px;`,
}

export interface ScreenSizes {
  mediaS: number
  mediaM: number
  mediaL: number
  mediaXL: number
  mediaXXL:number
}
export const screenSizes: ScreenSizes = {
  mediaS: 640,
  mediaM: 800,
  mediaL: 1024,
  mediaXL: 1280,
  mediaXXL: 1480,
}

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: Bold;
  src: url(${Bold});
}

@font-face {
  font-family: Light;
  src: url(${Light});
}

@font-face {
  font-family: Regular;
  src: url(${Regular});
}

@font-face {
  font-family: SemiBold;
  src: url(${SemiBold});
}
body {
  background: ${colors.themeBackground} !important
  
}
.slick-prev, .slick-next{
  visibility: hidden;
}
.slick-active {
  button {
    background-color: ${colors.green} !important;
  }
  .slick-active button {
    background-color: rgb(51, 187, 64) !important;
}

}

`
//Global styled 

export const authInputStyle = {
  width: '100%',
  padding: '10px',
  border: 'none',
  borderRadius: '3px',
  fontSize: '14px',
  color: colors.white,
  fontFamily: Regular,
  outline: 'none',
  background:'#202F40'
}

export const inputStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid',
  borderColor: colors.greyBorder,
  borderRadius: '3px',
  fontSize: '14px',
  color: colors.grey,
  fontFamily: Regular,
  outline: 'none',
}

export const inputStylePayment = {
  width: '100%',
  padding: '10px',
  border: '1px solid',
  borderColor: colors.PaymentInput,
  borderRadius: '3px',
  fontSize: '14px',
  color: colors.black,
  fontFamily: Regular,
  outline: 'none',
}


export const inputStyleFilled = {
  width: '100%',
  padding: '10px',
  border: '1px solid',
  borderColor: colors.white,
  borderRadius: '3px',
  fontSize: '14px',
  color: colors.black,
  fontFamily: Regular,
  outline: 'none',
  background: colors.white,
}

export const inputStyleModal = {
  width: '100%',
  padding: '10px',
  border: '1px solid',
  borderColor: colors.grey,
  borderRadius: '3px',
  fontSize: '16px',
  color: colors.black,
  fontFamily: Regular,
  outline: 'none',
  background: colors.white,
}

export const errorStyle = {
  color: colors.red,
  fontSize: '12px',
}

export const inputStyleSearch = {
  width: '100%',
  padding: '10px',
  border: 'none',
  borderRadius: '3px',
  fontSize: '16px',
  color: colors.white,
  fontFamily: Regular,
  outline: 'none',
  background: colors.basicCard2,
}