import * as React from 'react'
import { Documents, Access, Tabs } from './components'
import { Container, DataRoomHeading, HeadingText, CreateDataRoomBtn } from './style'
import history from '../app/components/history'
import BackArrow from '../../assets/image/arrow.png'
const { Fragment, useState } = React

const DataRoom = () => {
  const [activeTab, setActiveTab] = useState(1)

  const switchTab = (tab: number) => {
    setActiveTab(tab)
  }

  const handleArrowClick = () => {
    history.goBack()
  }

  const renderTabs = () => {
    if (activeTab === 1) {
      return <Documents />
    }

    return <Access />
  }

  return (
    <Fragment>
      <Container>
        <DataRoomHeading>
          <HeadingText>
            <div onClick={handleArrowClick}>
              <img src={BackArrow} alt="BackArrow" />
            </div>
            Convertable Promissory Note
          </HeadingText>
          <CreateDataRoomBtn>{activeTab === 1 ? 'add document' : 'add member'}</CreateDataRoomBtn>
        </DataRoomHeading>
      </Container>
      <Container>
        <Tabs activeTab={activeTab} switchTab={switchTab} />
        {renderTabs()}
      </Container>
    </Fragment>
  )
}

export default DataRoom
