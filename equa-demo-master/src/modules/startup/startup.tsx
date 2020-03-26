import * as React from 'react'
import {
  Container,
  Heading,
  CompanyName,
  TaskContainer,
  TaskNumber,
  TaskText,
  MarkCompleteBtn,
  CompleteContainer,
  RightContainer,
  AllTasksComplete,
  AllTasksCompleteMSg,
  AllTasksCompleteDesc,
  CompleteTaskContainer,
  CompletedTask,
  AllTasksCompleteImg,
} from './style'
import CompleteTask from '../../assets/image/complete-task.png'
import InProgress from '../../assets/image/inprogresstask.png'
import CompleteAllTasks from '../../assets/image/complete-all-tasks.png'
import history from '../app/components/history'
import { Paths } from '../app/components/routes/types'
const { useState, useEffect } = React

const Status = {
  notStarted: 1,
  started: 2,
  requested: 3,
  complete: 4,
}

const StartUp = () => {
  const [complete, setComplete] = useState(false)
  const [tasks, setTasks] = useState([
    {
      text: 'Complete your organization setup',
      id: 1,
      status: Status.started,
      buttonText: 'Create Or Import Organization',
    },
    {
      text: 'Upload all your company documents to our secure data room',
      id: 2,
      status: Status.notStarted,
      buttonText: 'Upload Documents',
    },
    {
      text: 'Schedule cap table setup call',
      id: 3,
      status: Status.notStarted,
      buttonText: 'schedule call',
    },
    {
      text: 'Confirm your cap table',
      id: 4,
      status: Status.notStarted,
      buttonText: 'Confirm cap table',
    },
    {
      text: 'Schedule a handoff call with one of our Success Managers',
      id: 5,
      status: Status.notStarted,
      buttonText: 'Schedule Call',
    },
  ])

  useEffect(() => {
    let complete = false
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].status < Status.complete) {
        complete = false
        break
      }
      complete = true
    }
    setComplete(complete)
  }, [tasks])

  const renderRightMostContent = (v: any) => {
    if (v.status === Status.complete) {
      return (
        <CompleteContainer>
          <img src={CompleteTask} alt="CompleteTask" /> Complete!
        </CompleteContainer>
      )
    }

    if ((v.id === 3 || v.id === 5) && v.status === Status.requested) {
      return (
        <CompleteContainer onClick={() => markRequestComplete(v)}>
          <img src={InProgress} alt="InProgress" /> Meeting Requested
        </CompleteContainer>
      )
    }

    return (
      <MarkCompleteBtn status={v.status} onClick={() => markComplete(v.id)}>
        {v.buttonText}
      </MarkCompleteBtn>
    )
  }

  const renderTasks = () => {
    return tasks.map(v => (
      <TaskContainer key={v.id}>
        <div>
          <TaskNumber status={v.status}>{`0${v.id}`}</TaskNumber>
        </div>
        <TaskText>{v.text}</TaskText>
        <RightContainer>{renderRightMostContent(v)}</RightContainer>
      </TaskContainer>
    ))
  }

  const markRequestComplete = (v: any) => {
    if (v.status === Status.requested) {
      const newTasks = tasks.map(ele => {
        if (ele.id === v.id) {
          return {
            ...ele,
            status: Status.complete,
          }
        }
        if (ele.id === v.id + 1) {
          return {
            ...ele,
            status: Status.started,
          }
        }
        return ele
      })
      setTasks(newTasks)
    }
  }

  const markComplete = (id: number) => {
    const status = id === 1 ? Status.started : tasks[id - 1].status
    if (status >= Status.started) {
      if (id === 3 || id === 5) {
        const newTasks = tasks.map(v => {
          if (v.id === id) {
            return {
              ...v,
              status: Status.requested,
            }
          }

          return v
        })
        setTasks(newTasks)
      } else {
        const newTasks = tasks.map(v => {
          if (v.id === id) {
            return {
              ...v,
              status: Status.complete,
            }
          }
          if (v.id === id + 1) {
            return {
              ...v,
              status: Status.started,
            }
          }
          return v
        })
        setTasks(newTasks)
      }
    }
  }

  const renderContent = () => {
    if (!complete) {
      return renderTasks()
    }

    return (
      <AllTasksComplete>
        <AllTasksCompleteImg src={CompleteAllTasks} alt="CompleteAllTasks" />
        <AllTasksCompleteMSg>Setup Complete!</AllTasksCompleteMSg>
        <AllTasksCompleteDesc>You’re now ready to start using Equa Start to help simplify your business!</AllTasksCompleteDesc>
        <CompleteTaskContainer>
          {tasks.map(v => (
            <CompletedTask key={v.id}>
              <div>
                <TaskNumber status={v.status}>{`0${v.id}`}</TaskNumber>
              </div>
              <TaskText>{v.text}</TaskText>
              <RightContainer>
                <CompleteContainer>
                  <img src={CompleteTask} alt="CompleteTask" /> Complete!
                </CompleteContainer>
              </RightContainer>
            </CompletedTask>
          ))}
        </CompleteTaskContainer>
      </AllTasksComplete>
    )
  }

  return (
    <Container>
      <Heading>
        <div>
          Complete Organization Setup
          <CompanyName>Cognition, Inc</CompanyName>
        </div>

        {complete && (
          <MarkCompleteBtn status={Status.started} onClick={() => history.push(Paths.Dashboard)}>
            Go To My Dashboard
          </MarkCompleteBtn>
        )}
      </Heading>
      {renderContent()}
    </Container>
  )
}

export default StartUp
