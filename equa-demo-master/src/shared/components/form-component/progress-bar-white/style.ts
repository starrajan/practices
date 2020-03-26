import styled from 'styled-components'

export const Container = styled.div`
  height: 8px;
  width: 100%;
  position: relative;
`

export const BaseBox = styled.div`
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 10px;
  transition: width 1s ease-in-out;
`

export const Background = styled(BaseBox)`
  background: #71dc76;
  width: 100%;
`

export const Progress = styled(BaseBox)<any>`
  background: #ffffff;
  width: ${({ percent }) => percent}%;
`
