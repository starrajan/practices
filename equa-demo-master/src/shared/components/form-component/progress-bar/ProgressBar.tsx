import React from 'react'

import { Container, Background, Progress } from './style'

const ProgressBar = (props: any) => {
  const { percent } = props
  return (
    <Container>
      <Background />
      <Progress percent={percent} />
    </Container>
  )
}

export default ProgressBar
