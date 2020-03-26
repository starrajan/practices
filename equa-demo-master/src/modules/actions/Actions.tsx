import * as React from 'react'
import { useState } from 'react'
import {
  ActionGridContent,
  ActionGrid,
  ActionGridItem,
  ActionGridText,
  ActionImage,
  ActionHead,
  ActionCard,
  ActionRow,
  ActionCardHead,
  ActionRowText,
  ActionRows,
  PendingActions,
  ActionSearch,
  ActionButton,
} from './style'
import { colors } from 'shared/styles/theme'
import { inputStyleSearch } from 'shared/styles/theme'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'

const Actions = (props: any) => {
  const [showSearch, setShowSearch] = useState(false)
  const actions = [{ name: 'Add New Team Member' }, { name: 'Update Cap Table' }, { name: 'Add New Organization' }]
  const searchAction = () => {
    setShowSearch(true)
  }
  const ActionIcon = {
    height: '50px',
    margin: '20px 5px',
  }
  const RequestIcon = {
    height: '35px',
    margin: '20px 5px',
  }
  const request = () => {
    history.push(`${Paths.ActionRequest}`)
  }

  const toDetails = (data: any) => {
    history.push(`${Paths.ActionDetails}/${data.path}`)
  }

  const ActionList = [
    { image: require('../../assets/image/actions/transfer.png'), name: 'Transfer', path: 'transfer' },
    { image: require('../../assets/image/actions/draft.png'), name: 'Draft', path: 'draft' },
    { image: require('../../assets/image/actions/capitalCall.png'), name: 'Capital Call', path: 'capitalCall' },
    { image: require('../../assets/image/actions/boardMeeting.png'), name: 'Board Meeting', path: 'boardMeeting' },
    { image: require('../../assets/image/actions/Union.png'), name: 'Update Governing Documents', path: 'updateDocuments' },
    { image: require('../../assets/image/actions/Vector.png'), name: 'Sign an Agreement', path: 'signAgreement' },
    { image: require('../../assets/image/actions/colab.png'), name: 'Collaborate', path: 'Collaborate' },
    { image: require('../../assets/image/actions/newdata.png'), name: 'Create a New Data Room', path: 'dataRoom' },
    { image: require('../../assets/image/actions/createOrg.png'), name: 'Create New Organization', path: 'createOrganization' },
    { image: require('../../assets/image/actions/org.png'), name: 'Import Existing Organization', path: 'importOrganization' },
  ]

  return (
    <ActionGridContent>
      <ActionHead>
        <div>
          <div className="dashboard">Actions</div>
          <div className="org-name">Cognition, Inc </div>
        </div>

        <ActionSearch>
          <div style={{ display: 'flex' }}>
            <input style={inputStyleSearch} type="text" name="search" placeholder="Search Actions..." />
            <ActionButton onClick={searchAction}> <img src={require('assets/image/searchIcon.png')} alt='' /></ActionButton>
          </div>
        </ActionSearch>
      </ActionHead>

      <PendingActions>
        <ActionCard>
          <div style={{ display: 'flex' }}>
            <img src={require('assets/image/actionicon.png')} alt="" />
            <ActionCardHead> Your Pending Actions</ActionCardHead>
          </div>

          <ActionRows>
            {actions.map((char: any, i: any) => (
              <ActionRow key={i} style={{ backgroundColor: i % 2 == 0 ? colors.basicCard2 : 'transparent' }}>
                <ActionRowText>{char.name} </ActionRowText>
              </ActionRow>
            ))}
          </ActionRows>
        </ActionCard>
      </PendingActions>

      <ActionGrid>
        {ActionList.map((item, i: any) => (
          <ActionGridItem key={i} onClick={() => toDetails(item)}>
            <div style={{ margin: 'auto' }}>
              <ActionImage src={item.image} alt="" />
              <ActionGridText>{item.name}</ActionGridText>
            </div>
          </ActionGridItem>
        ))}
        <ActionGridItem onClick={request} style={{ border: '3px dashed rgba(255, 255, 255, 0.4)' }}>
          <div style={{ margin: 'auto' }}>
            <img style={RequestIcon} src={require('../../assets/image/actions/requestActon.png')} alt="" />
            <ActionGridText>REQUEST A FEATURE</ActionGridText>
          </div>
        </ActionGridItem>
      </ActionGrid>
    </ActionGridContent>
  )
}

export default Actions
