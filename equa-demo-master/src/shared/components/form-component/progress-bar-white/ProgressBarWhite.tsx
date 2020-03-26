import React from 'react'

import { Container, Background, Progress } from './style'

const ProgressBarWhite = (props: any) => {
  const { percent } = props
  return (
    <Container>
      <Background />
      <Progress percent={percent} />
    </Container>
  )
}

export default ProgressBarWhite
