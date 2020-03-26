import * as React from 'react'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { withRouter, RouteComponentProps } from 'react-router'
import {
  ConnectToGoogleWrapper,
  AddFriendsCont,
  InviteFriendsCont,
  AddContactText,
  AddContactDesc,
  SelectFriendsTxt,
  DisconnectedImgCont,
  DisconnectedGoogleText,
  ConnectedGoogle,
  DisconnectBtnCont,
  DisconnectBtn,
  SelectAllCont,
  SelectAllBtn,
  ContactListCont,
  Connect,
  ContactListItem,
  ContactListItemPic,
  ContactNameAndEmail,
  InviteControl

} from './style'

import GmailPic from '../../../../../assets/image/gmail.png'
import profile from '../../../../../assets/image/profile.png'

import FallBackDp from '../../../../../assets/image/fallBackDp.png'
import DisconnectedGoogleImg from '../../../../../assets/image/DisconnectedGoogle.png'
import CrossImg from '../../../../../assets/image/cross-sign2.png'
import GoogleSignIn from '../google-sign-in/google-sign-in'

interface Props extends RouteComponentProps<any> {
  isConnectedToGoogle: boolean
  toggleDisconnectGoogleModal: () => void
  toggleGoogleConnection: () => void
  invitedFriendList: any[]
  invitedFriends: any
  userId: any
}
interface StateProps {
  user: any
  // googleContactList: any
}

interface Contact {
  name?: string
  email: string
  imgSrc: string
  isInvited: boolean
  id: number
  contactId: string
}
interface State {
  contactList: Contact[]
}
const ConnectToGoogle = (props: Props & StateProps) => {
  // const [contactList, setContactList] = useState<any>([])
  const removedEmails: any = localStorage.getItem('removedEmails')
  const [removedList, setRemovedList] = useState<any>(removedEmails ? removedEmails.split(',') : [])

  useEffect(() => {
    const googleToken: any = localStorage.getItem('googleToken')
    if (googleToken) {
      // props.getGoogleContact(googleToken)
    }
  }, [localStorage.getItem('googleToken')])

  const handleDisconnectGoogle = () => {
    const { toggleDisconnectGoogleModal } = props
    toggleDisconnectGoogleModal()
  }

  const renderConnectToGoogle = () => {
    const { isConnectedToGoogle, toggleGoogleConnection } = props
    if (!isConnectedToGoogle) {
      return (
        <>
          <div className="gmail-img">
            <img src={GmailPic} alt="gmail" />
          </div>
          <AddContactText>Add Your Contacts</AddContactText>
          <AddContactDesc>
            Import your contacts to get started. Only selected people receive a notification. We currently only support Gmail.
          </AddContactDesc>
          {/* <GoogleSignIn toggleGoogleConnection={toggleGoogleConnection} /> */}
          <div style={{ textAlign: 'center' }}>
            <Connect onClick={toggleGoogleConnection}>CONNECT </Connect>
          </div>
        </>
      )
    } else {
      return (
        <>
          <ConnectedGoogle>
            <img src={GmailPic} alt="gmail" />
            <div className="text">Gmail account connected</div>
          </ConnectedGoogle>

          <DisconnectBtnCont>
            <DisconnectBtn priority="tertiary" onClick={() => handleDisconnectGoogle()}>
              disconnect
            </DisconnectBtn>
          </DisconnectBtnCont>
        </>
      )
    }
  }

  const renderContactListContent = () => {
    const { isConnectedToGoogle } = props
  
    if (!isConnectedToGoogle) {
      return (
        <>
          <SelectFriendsTxt>Select Friends to Invite</SelectFriendsTxt>
          <DisconnectedImgCont>
            <img src={DisconnectedGoogleImg} alt="disconnected google" />
          </DisconnectedImgCont>
          <DisconnectedGoogleText>Connect your Google account to start.</DisconnectedGoogleText>
        </>
      )
    } else {
      return (
        <>
          <SelectAllCont>
            <span>Select Friends to Invite</span>
            <SelectAllBtn type="button" onClick={() => handleInviteAll()}>
              invite all
            </SelectAllBtn>
          </SelectAllCont>
          <ContactListCont>{renderContactList()}</ContactListCont>
        </>
      )
    }
  }

  

  // const addDefaultSrc = (e: any) => {
  //   e.target.src = FallBackDp
  // }

  const renderContactList = () => {
    const friendData = [
      { name: 'Austin Lloyd', email: 'Austin123@gmail.com', invited: 'false' },
      { name: 'Jack Wells', email: 'Jack@gmail.com', invited: 'false' },
      { name: 'Francisco ', email: 'Francisco@gmail.com', invited: 'true' },
      { name: 'Henery Norris', email: 'Henery@gmail.com', invited: 'false' },
      { name: 'Kyline Lloyd', email: 'Kyline@gmail.com', invited: 'true' },
    ]
    if (friendData) {
      return friendData.map((data: any, i: any) => {
          return (
            <ContactListItem key={i}>
              <ContactListItemPic>
                <img src={profile} width="36px" height="36px" />
              </ContactListItemPic>
              <ContactNameAndEmail>
             <div className="contact-name"> {data.name} </div>
                <div className="contact-email"> {data.email} </div>
              </ContactNameAndEmail>

              <InviteControl>
                {data.invited==='true' ? (
                  <div className="invite-sent-contact">Invite sent</div>
                ) : (
                  <button className="invite-contact">
                    Invite
                  </button>
                )}
                <button type="button" style={{ cursor: 'pointer' }}>
                  <img src={CrossImg} />
                </button>
              </InviteControl>
            </ContactListItem>
          )
      })
    }

    return <div>no contacts</div>
  }

  // send email and change nothing about list
  const handleContactInvite = async (e: any, id: number) => {
    // const button = e.currentTarget
    // button.classList.toggle('disable-btn')
    // const emailData: any = []
    // if (props.user) {
    //   const contact = props.googleContactList.find((listContact: any) => listContact.id === id)
    //   emailData.push(contact.email)
    //   const data = { emailArray: emailData }
    //   await props.sendInvitation(data)
    //   props.invitedFriends(props.userId)
    //   // button.classList.toggle('disable-btn')
    //   const googleToken = localStorage.getItem('googleToken')
    //   if (googleToken) props.getGoogleContact(googleToken)
    // }
  }

  const removeContactFromContactList = (id: number) => {
    const removeEmails: any = [...removedList, id]
    localStorage.setItem('removedEmails', removeEmails)
    setRemovedList(removeEmails)
  }

  const handleInviteAll = async () => {
    // const emailData: any = []
    // const list = props.googleContactList
    // if (props.user) {
    //   for (const contact of list) {
    //     const removed = removedList.find((id: any) => id === contact.id)
    //     if (!removed) {
    //       const invited = props.invitedFriendList.find((listContact: any) => listContact.email === contact.email)
    //       if (!invited) {
    //         emailData.push(contact.email)
    //       }
    //     }
    //   }
    //   const data = { emailArray: emailData }
    //   await props.sendInvitation(data)
    //   props.invitedFriends(props.userId)
    //   const googleToken = localStorage.getItem('googleToken')
    //   if (googleToken) props.getGoogleContact(googleToken)
    // }
  }

  return (
    <div>
      <ConnectToGoogleWrapper>
        <AddFriendsCont>{renderConnectToGoogle()}</AddFriendsCont>
        <InviteFriendsCont>{renderContactListContent()}</InviteFriendsCont>
      </ConnectToGoogleWrapper>
    </div>
  )
}

const mapStateToProps = (state: any) => ({
  user: state.user,
  // googleContactList: state.myReferral.googleContacts,
})
export default withRouter(connect(mapStateToProps, {})(ConnectToGoogle))
