import * as React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router'
import AuthForm from './components/auth-form'
import styled from 'styled-components'
import Carousel from './components/carousel'
import { colors, screenSizes } from '../../shared/styles/theme'
import { ServiceContext } from '../app/App'
// import { getWaitListStats, Service } from '@logic'
import { useEffect, useState } from 'react'

const StyledAuth = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  color: ${colors.white};
  position: fixed;
  top: 0;
  z-index: 1000000;
  width: 100%;
  label {
    font-size: 1.1em;
    color: ${colors.grey};
  }
  > div:first-child {
    @media (max-width: ${screenSizes.mediaL}px) {
      display: none;
    }
  }
  > div:nth-child(2) {
    @media (max-width: ${screenSizes.mediaL}px) {
      width: 100%;
    }
  }
`

interface Props {
  // service: Service
}

function Auth(props: Props) {
  const [isLoading, setLoading] = useState(true)
  const [isError, setError] = useState(false)
  const [result, setResult] = useState({ totalUsers: 0, activeUsers: 0 })

  // const getWaitListStats = async () => {
  //   try {
  //     setLoading(true)
  //     setError(false)
  //     const res = await props.service.getWaitListStats()
  //     setResult(res)
  //     setLoading(false)
  //   } catch (e) {
  //     setLoading(false)
  //     setError(true)
  //   }
  // }

  useEffect(() => {
    // getWaitListStats()
    setLoading(false)
  }, [])

  if (isLoading) {
    return <StyledAuth>...loading</StyledAuth>
  }

  if (isError) {
    return <StyledAuth>something went wrong</StyledAuth>
  }

  return (
    <StyledAuth>
      <Carousel totalUsers={result.totalUsers} activeUsers={result.activeUsers} />
      <AuthForm />
    </StyledAuth>
  )
}
const AuthWithServices = (props: any) => (
  <ServiceContext.Consumer>{service => <Auth {...props} service={service} />}</ServiceContext.Consumer>
)

export default connect(null)(withRouter(AuthWithServices as any))
