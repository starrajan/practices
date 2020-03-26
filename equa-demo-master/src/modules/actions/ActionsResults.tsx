import * as React from 'react'
import { useState } from 'react'

import {
  Container,
  ActionTopContainer,
  ActionButton,
  ActionCard,
  ActionCardHead,
  ActionRows,
  ActionRow,
  ActionRowText,
  ActionSearch,
  ActionHeading,
  Row,
  Column,
  Topics,
  ActionLink,
  SearchResult,
} from './style'
import { colors } from '../../shared/styles/theme'
import { inputStyleFilled } from '../../shared/styles/theme'

const ActionsResults = (props: any) => {
  const [showSearch, setShowSearch] = useState(false)
  const actions = [{ name: 'Add New Team Member' }, { name: 'Update Cap Table' }, { name: 'Add New Organization' }]
  const searchAction = () => {
    setShowSearch(true)
  }

  return (
    <Container>
      <ActionTopContainer>
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
        <ActionSearch>
          <ActionHeading> Actions</ActionHeading>
          <div style={{ display: 'flex' }}>
            <input style={inputStyleFilled} type="text" name="search" placeholder="search" />
            <ActionButton onClick={searchAction}> search</ActionButton>
          </div>
        </ActionSearch>

        {showSearch ? (
          <SearchResult>
            <ActionHeading> Search Results</ActionHeading>
            <ActionLink>Create Operating Agreement</ActionLink>
            <ActionLink>Edit Operating Agreement</ActionLink>
            <ActionLink>Sign Operating Agreement</ActionLink>
            <ActionLink>Upload Operating Agreement</ActionLink>
          </SearchResult>
        ) : null}
      </ActionTopContainer>

      <Topics>
        <ActionHeading> Topics</ActionHeading>
        <Row>
          <Column>
            <ActionLink>Recent Actions</ActionLink>
            <ActionLink>Organizational Matters</ActionLink>
            <ActionLink>Capitalization</ActionLink>
            <ActionLink>Member Voting & Voting Rights</ActionLink>
            <ActionLink>Dissolution and Liquidation</ActionLink>
          </Column>

          <Column>
            <ActionLink>Member Units</ActionLink>
            <ActionLink>Distributions</ActionLink>
            <ActionLink>Member Meetings & Notice</ActionLink>
            <ActionLink>Resolving Deadlock</ActionLink>
          </Column>
        </Row>
      </Topics>
    </Container>
  )
}

export default ActionsResults
