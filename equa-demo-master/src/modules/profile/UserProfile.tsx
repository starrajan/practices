import * as React from 'react'
import { useState ,useEffect} from 'react'
import EditProfile from './EditProfile'
import UserSettings from './UserSettings'
import Subscription from './Subscription'
import MyReferrals from './my-referrals'
import { withRouter, RouteComponentProps } from 'react-router'


import {
  Banner,
  BannerText,
  ProfileCardWrapper,
  ProfileCard,
  SubscriptionButton,
  ProfileCardTitle,
  ProfileCardSubTitle,
  ProfileCardText,
  ProfileCardHeader,
  ProfileCardContent,
  UserInfo,
  EditProfileBut,
  TabsContainer,
  TabsContainerLink,
  TabPanelDisplay,
  ProfileWrapper,
} from './style'
import { colors, screenSizes } from '../../shared/styles/theme'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'




function UserProfile(props:any) {
  const [edit, setEdit] = useState(false)
  const tabsData = [
    { label: 'Profile',value:'Profile' },
    { label: 'portfolio',value:'portfolio' },
    { label: 'Referrals',value:'Referrals' },
    { label: 'Subscriptions',value:'Subscriptions' },
    { label: 'My Settings',value:'settings' },
  ]
  const [activeTab, setActiveTab] = useState('Profile')
  const selectTab = (val: any) => {
    setActiveTab(val)
    if (val === 'portfolio') {
      history.push('/portfolio')
    }
    else{
      history.push(`${Paths.userProfile}/${val}`)
    }

  }
  useEffect(() => {
    let data = props.match.params.tabOption
    console.log("UserProfile -> data", data)
    setActiveTab(data)
  }, [props.match.params.tabOption])

  const userImg = {
    borderRadius: '50%',
    height: '100px',
    width: '100px',
  }
  const EditIcon = {
    height: '100%',
    cursor: 'pointer',
  }

  const editProfile = () => {
    setEdit(true)
  }

  const toCart =()=>{
    history.push(Paths.NewSubscription)
  }

  return (
    <ProfileWrapper>
      <TabsContainer>
        {tabsData.map((item: any, i: any) => (
          <TabsContainerLink
            key={i}
            onClick={() => selectTab(item.value)}
            style={{
              borderBottom: activeTab === item.value ? '2px solid #ffffff' : 'none',
              color: activeTab === item.value ? colors.white : colors.grey,
            }}
          >
            {item.label}
          </TabsContainerLink>
        ))}
      </TabsContainer>

      <TabPanelDisplay
        style={{
          display: activeTab === 'Profile' ? 'block' : 'none',
        }}
      >
        <Banner>
          <img src={require('assets/image/rocket.png')} alt="" />
          <BannerText>get full access to equa start now!</BannerText>
          <SubscriptionButton  onClick={toCart} >Purchase a subscription</SubscriptionButton>
        </Banner>
        {edit ? (
          <div>
            <EditProfile />
          </div>
        ) : (
          <ProfileCardWrapper>
            <div style={{ textAlign: 'right', margin: '30px 0' }}>
              <EditProfileBut onClick={editProfile}>Edit Profile </EditProfileBut>
            </div>
            <ProfileCard>
              <ProfileCardHeader>
                <ProfileCardTitle>Personal Information</ProfileCardTitle>
                <img style={EditIcon} src={require('assets/image/editprofile.png')} alt="" />
              </ProfileCardHeader>

              <ProfileCardContent>
                <UserInfo>
                  <img style={userImg} src={require('assets/image/profile.png')} alt="" />
                  <div style={{ marginLeft: '25px' }}>
                    <ProfileCardTitle>Ann Jurek</ProfileCardTitle>
                    <ProfileCardText>annjurek@gmail.com</ProfileCardText>
                    <ProfileCardText>+12 34566777</ProfileCardText>
                  </div>
                </UserInfo>
              </ProfileCardContent>
            </ProfileCard>

            <ProfileCard>
              <ProfileCardHeader>
                <ProfileCardTitle>Payment Options</ProfileCardTitle>
                <img style={EditIcon} src={require('assets/image/editprofile.png')} alt="" />
              </ProfileCardHeader>

              <ProfileCardContent>
                <ProfileCardSubTitle>Default</ProfileCardSubTitle>
                <ProfileCardText>Equa Cash</ProfileCardText>
              </ProfileCardContent>

              <ProfileCardContent>
                <ProfileCardSubTitle> Credit Card</ProfileCardSubTitle>
                <ProfileCardText>Visa Ending in 9938</ProfileCardText>
              </ProfileCardContent>
            </ProfileCard>

            <ProfileCard>
              <ProfileCardHeader>
                <ProfileCardTitle>Physical Address</ProfileCardTitle>
                <img style={EditIcon} src={require('assets/image/editprofile.png')} alt="" />
              </ProfileCardHeader>

              <ProfileCardContent>
                <ProfileCardSubTitle> Country</ProfileCardSubTitle>
                <ProfileCardText>United States of America (USA)</ProfileCardText>
              </ProfileCardContent>

              <ProfileCardContent>
                <ProfileCardSubTitle> Street Address</ProfileCardSubTitle>
                <ProfileCardText>123 Moose Lane</ProfileCardText>
              </ProfileCardContent>

              <ProfileCardContent>
                <ProfileCardSubTitle> State</ProfileCardSubTitle>
                <ProfileCardText>Delaware</ProfileCardText>
              </ProfileCardContent>

              <ProfileCardContent>
                <ProfileCardSubTitle> Postal Code</ProfileCardSubTitle>
                <ProfileCardText>123456</ProfileCardText>
              </ProfileCardContent>
            </ProfileCard>
          </ProfileCardWrapper>
        )}
      </TabPanelDisplay>

      <TabPanelDisplay
        style={{
          display: activeTab === 'portfolio' ? 'block' : 'none',
        }}
      ></TabPanelDisplay>

      <TabPanelDisplay
        style={{
          display: activeTab === 'Referrals' ? 'block' : 'none',
        }}
      >
        <MyReferrals />
      </TabPanelDisplay>

      <TabPanelDisplay
        style={{
          display: activeTab === 'Subscriptions' ? 'block' : 'none',
        }}
      >
        <Subscription />
      </TabPanelDisplay>
      <TabPanelDisplay
        style={{
          display: activeTab === 'settings' ? 'block' : 'none',
        }}
      >
        <ProfileCardWrapper>
          <UserSettings />
        </ProfileCardWrapper>
      </TabPanelDisplay>
    </ProfileWrapper>
  )
}

export default withRouter(
  (UserProfile)
)

