import styled from 'styled-components'

export const Container = styled.div<any>`
  margin: 26px 0 61px 0;
  box-sizing: border-box;
`
export const ChartContainer = styled.div<any>`
  @keyframes expand {
    from {
      width: 0%;
    }
    to {
      width: 100%;
    }
  }
  .chart {
    width: 0%;
    animation: expand 1.5s forwards;
    display: flex;
  }
`
export const ShareHolderChartBlock = styled.div<any>`
  height: 70px;
  background-color: ${(props: any) => props.color && props.color};
  overflow: hidden;
  opacity: 1;
  transition: opacity, 0.3s ease;
  cursor: pointer;
  width: ${(props: any) => props.width && props.width};
  transform: scaleY(1);
  &:hover {
    transform: scaleY(1.2);
  }
  &:first-child {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
  }
  &:last-child {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
  }
`
