import styled from 'styled-components'
import { colors } from '../../../../shared/styles/theme'

export const TabsContainer = styled.div`
    position: relative;
    display: flex;
`

interface TabProps{
    isActive: boolean
}

export const Tab = styled.div<TabProps>`
    padding-bottom: 20px;
    font-family: Regular;
    font-weight: ${props => props.isActive ? '800': '400'};
    font-size: 18px;
    color: ${props => props.isActive ? colors.white : '#9DA8AE'};
    padding-right: 35px;
    cursor: pointer;
    transition: all 300ms;
`
interface WhiteBarProps{
    activeTab: number
}

export const WhiteBar = styled.div<WhiteBarProps>`
    position: absolute;
    width: 137px;
    height: 4px;
    bottom: 0;
    left: 0;
    background: ${colors.white};
    transform: ${props => props.activeTab === 1 ? 'translateX(0)': 'translateX(100%)'};
    transition: transform 300ms;
`