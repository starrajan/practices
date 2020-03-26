import styled from 'styled-components'

const Status = {
  notStarted: 1,
  started: 2,
  requested: 3,
  complete: 4,
}

export const Container = styled.div`
  width: 90%;
  max-width: 1220px;
  margin: 0 auto;
  padding-bottom: 400px;
`

export const MarkCompleteBtn = styled.div<MarkCompleteBtnProps>`
  background: ${props => (props.status === Status.started ? '#33bb40' : 'rgba(51,187,64, 0.25)')};
  border-radius: 2px;
  padding: 18px 36px;
  font-size: 14px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: #ffffff;
  font-weight: 800;
  font-family: Bold;
  box-sizing: border-box;
  cursor: ${props => (props.status === Status.started ? 'pointer' : 'not-allowed')};
  transition: background 300ms;
  text-align: center;
`

export const Heading = styled.div`
  padding-top: 55px;
  font-size: 32px;
  color: #ffffff;
  display: flex;
  font-family: Regular;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;

    ${MarkCompleteBtn} {
      margin-top: 30px;
    }
  }
`

export const CompanyName = styled.div`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  font-family: Regular;
`

export const TaskContainer = styled.div`
  padding: 28px 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  margin-top: 50px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`

interface TaskNumberProps {
  status: number
}

interface MarkCompleteBtnProps extends TaskNumberProps {}

export const TaskNumber = styled.div<TaskNumberProps>`
  width: 90px;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 4px solid;
  border-color: ${props => (props.status === Status.complete ? '#33bb40' : '#394e5b')};
  box-sizing: border-box;
  
  font-size: 48px;
  color: #ffffff;
  border-radius: 50%;
  background: rgb(57, 78, 91, 0.85);
  transition: border-color 300ms;
  font-family: Regular;
`

export const TaskText = styled.div`
  font-size: 24px;
  color: #ffffff;
  margin-left: 43px;
  font-family: Light;

  @media (max-width: 900px) {
    text-align: center;
    margin-top: 30px;
    margin-left: 0;
  }
`

export const RightContainer = styled.div`
  margin-left: auto;

  @media (max-width: 900px) {
    margin-left: 0;
    margin-top: 30px;
  }
`

export const CompleteContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 300;
  font-size: 24px;
  color: #ffffff;
  font-family: Regular;

  img {
    margin-right: 25px;
  }
`

export const RequestContainer = styled.div`
  ${CompleteContainer}
`

export const AllTasksCompleteImg = styled.img``

export const AllTasksComplete = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 136px 0px 100px 0px;

  @media (max-width: 900px) {
    ${AllTasksCompleteImg} {
      width: 160px;
      height: 150px;
    }
  }
`
export const AllTasksCompleteMSg = styled.div`
  text-align: center;
  margin-top: 30px;
  font-size: 32px;
  color: #ffffff;
  font-family: Regular;
`

export const AllTasksCompleteDesc = styled.div`
  margin-top: 10px;
  text-align: center;
  font-size: 16px;
  color: #ffffff;
  font-family: Regular;
`

export const CompleteTaskContainer = styled.div`
  margin-top: 100px;
  width: 100%;
`

export const CompletedTask = styled.div`
  padding: 28px 40px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`
