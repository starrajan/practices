import * as React from 'react'
import {
    TabsContainer,
    Tab,
    WhiteBar
} from './style'

interface Props{
    activeTab: number
    switchTab: (tab: number) => void
}

const Tabs = (props: Props) => {
    const { activeTab, switchTab } = props

    return (
        <TabsContainer>
            <Tab 
                onClick={() => switchTab(1)} 
                isActive={activeTab === 1}
            >
                Documents (6)
            </Tab>
            <Tab 
                onClick={() => switchTab(2)} 
                isActive={activeTab === 2}
            >
                Access (3)
            </Tab>
            <WhiteBar activeTab={activeTab}/>
        </TabsContainer>
    )
}

export default Tabs