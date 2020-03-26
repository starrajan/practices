import * as React from 'react'
import {
  ProfileCardWrapper,
  ProfileCardTitle,
  ProfileCard,
  BillingWrapper,
  GridPortfolio,
  GridItemPortfolio,
  SubscriptionHeadLight,
  GreenLink,
  PortfolioTitle,
  PortfolioWrapper,
  SubscriptionInfo,
  StyledRow,
  SubscriptionInfoHead,
  SubscriptionInfoText,
  PortfolioRow,
  PortfolioShareBlock,
  PortfolioShareHead,
  ChartValues,
  FilledLabel,
  ChartValuesWrap,
  PortfolioSubTitle,
  WrapShareChart
} from './style'
import { colors} from '../../shared/styles/theme'
import ShareChart from './components/ShareChart'
// import BalanceChart from './components/BalanceChart'

const Portfolio = (props: any) => {
  const array = [{ label: 'Cognition, Inc' }, { label: 'InSync, Inc' }, { label: 'GJJ Express' }, { label: 'CoSeed' }]
  const votes = [
    { label: 'Cognition, Inc', status: 'Accepted' },
    { label: 'InSync, Inc', status: 'Pending' },
    { label: 'GJJ Express', status: 'Declined' },
    { label: 'CoSeed', status: 'Pending' },
  ]
  const transfer = [
    { label: 'Cognition, Inc', status: 'increase' },
    { label: 'InSync, Inc', status: 'decrease' },
    { label: 'GJJ Express', status: 'decrease' },
    { label: 'CoSeed', status: 'increase' },
  ]

  return (
    <div>
      <PortfolioWrapper>
        <ProfileCardTitle>Custom Portfolio Name</ProfileCardTitle>
        <GridPortfolio>
          <GridItemPortfolio>
            <ProfileCard>
              <PortfolioTitle> My Shares</PortfolioTitle>
              <StyledRow>
                {array.map((char: any, i: any) => (
                  <PortfolioRow key={i} style={{ backgroundColor: i % 2 == 0 ? colors.basicCard2 : 'transparent' }}>
                    <div style={{ textAlign: 'left' }}>
                      <SubscriptionInfoHead>{char.label}</SubscriptionInfoHead>
                      <SubscriptionInfoText>Common Shares</SubscriptionInfoText>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <SubscriptionInfoHead>759</SubscriptionInfoHead>
                      <SubscriptionInfoText>$5000000</SubscriptionInfoText>
                    </div>
                  </PortfolioRow>
                ))}
              </StyledRow>
            </ProfileCard>
          </GridItemPortfolio>

          <GridItemPortfolio>
            <ProfileCard>
              <PortfolioTitle> My Shares by classes</PortfolioTitle>
              <WrapShareChart>
              <ShareChart />
              </WrapShareChart>
              <ChartValuesWrap>
                <ChartValues>
                  <div style={{ display: 'flex' }}>
                    <FilledLabel style={{ background: colors.chartColor1 }}></FilledLabel>
                    <SubscriptionInfoHead>Common Shares</SubscriptionInfoHead>
                  </div>
                  <SubscriptionInfoHead>70%</SubscriptionInfoHead>
                </ChartValues>
                <ChartValues>
                  <div style={{ display: 'flex' }}>
                    <FilledLabel style={{ background: colors.chartColor2 }}></FilledLabel>
                    <SubscriptionInfoHead>A class</SubscriptionInfoHead>
                  </div>
                  <SubscriptionInfoHead>20%</SubscriptionInfoHead>
                </ChartValues>
                <ChartValues>
                  <div style={{ display: 'flex' }}>
                    <FilledLabel style={{ background: colors.chartColor3 }}></FilledLabel>
                    <SubscriptionInfoHead>B class</SubscriptionInfoHead>
                  </div>
                  <SubscriptionInfoHead>10%</SubscriptionInfoHead>
                </ChartValues>
              </ChartValuesWrap>
            </ProfileCard>
          </GridItemPortfolio>

          <GridItemPortfolio>
            <ProfileCard>
              <PortfolioTitle> Total Shares</PortfolioTitle>
              <PortfolioShareBlock style={{ borderBottom: '1px solid', borderColor: colors.grey }}>
                <PortfolioShareHead>112,5K</PortfolioShareHead>
                <SubscriptionInfoHead># of Shares</SubscriptionInfoHead>
              </PortfolioShareBlock>
              <PortfolioShareBlock>
                <PortfolioShareHead>5,59M</PortfolioShareHead>
                <SubscriptionInfoHead>Total Worth(USD)</SubscriptionInfoHead>
              </PortfolioShareBlock>
            </ProfileCard>
          </GridItemPortfolio>
        </GridPortfolio>

        <GridPortfolio>
          <GridItemPortfolio>
            <ProfileCard>
              <PortfolioTitle> Portfolio balance</PortfolioTitle>
              <PortfolioSubTitle>USD$ 5,59M</PortfolioSubTitle>
            </ProfileCard>
          </GridItemPortfolio>
          <GridItemPortfolio>
            <ProfileCard>
              <PortfolioTitle> My votes</PortfolioTitle>
              <StyledRow>
                {votes.map((char: any, i: any) => (
                  <PortfolioRow key={i} style={{ backgroundColor: i % 2 == 0 ? colors.basicCard2 : 'transparent' }}>
                    <div style={{ textAlign: 'left' }}>
                      <SubscriptionInfoHead>{char.label}</SubscriptionInfoHead>
                      <SubscriptionInfoText>Operating Agreement</SubscriptionInfoText>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      {char.status === 'Accepted' ? (
                        <SubscriptionInfoHead style={{ color: colors.accepted }}>{char.status}</SubscriptionInfoHead>
                      ) : null}
                      {char.status === 'Pending' ? (
                        <SubscriptionInfoHead style={{ color: colors.pending }}>{char.status}</SubscriptionInfoHead>
                      ) : null}
                      {char.status === 'Declined' ? (
                        <SubscriptionInfoHead style={{ color: colors.declined }}>{char.status}</SubscriptionInfoHead>
                      ) : null}
                      <SubscriptionInfoText>2019/07/21</SubscriptionInfoText>
                    </div>
                  </PortfolioRow>
                ))}
              </StyledRow>
            </ProfileCard>
          </GridItemPortfolio>
          <GridItemPortfolio>
            <ProfileCard>
              <PortfolioTitle> Share transfers</PortfolioTitle>
              <StyledRow>
                {transfer.map((char: any, i: any) => (
                  <PortfolioRow key={i} style={{ backgroundColor: i % 2 == 0 ? colors.basicCard2 : 'transparent' }}>
                    <div style={{ textAlign: 'left' }}>
                      <SubscriptionInfoHead>{char.label}</SubscriptionInfoHead>
                      <SubscriptionInfoText>Common Shares</SubscriptionInfoText>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      {char.status === 'increase' ? (
                        <SubscriptionInfoHead style={{ color: colors.accepted }}>+400</SubscriptionInfoHead>
                      ) : null}
                      {char.status === 'decrease' ? (
                        <SubscriptionInfoHead style={{ color: colors.declined }}>-300</SubscriptionInfoHead>
                      ) : null}
                      <SubscriptionInfoText>2019/07/05</SubscriptionInfoText>
                    </div>
                  </PortfolioRow>
                ))}
              </StyledRow>
            </ProfileCard>
          </GridItemPortfolio>
        </GridPortfolio>
      </PortfolioWrapper>
    </div>
  )
}

export default Portfolio
