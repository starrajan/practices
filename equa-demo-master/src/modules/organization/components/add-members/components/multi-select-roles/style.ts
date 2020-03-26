import styled from 'styled-components'

export const MultiSelectDropDown = styled.div`
  padding-bottom: 1rem;

  .input-btn-grp {
    display: flex;
    border: 1px solid #8b9296;
  }
`

export const CustomRoleInput = styled.input`
  margin-bottom: 0;
  border: 1px solid #898989;
  border-radius: 2px;
`

export const DropdownStyle = styled.div`
  border: 1px solid #d8d8d8;
  padding: 10px;
  border-radius: 2px;
`

export const OutputField = styled.div`
  width: 90%;
  min-height: 50px;
  margin: 0;
  padding: 13px;
  display: flex;
  flex-wrap: wrap;
  background: #ffffff;
  border-right: 0px solid transparent !important;
`

export const ToggleBtn = styled.button`
  width: 10%;
  margin: 0px !important;
  background: transparent;
  border: 0;
  outline: 0;

  .caret-down,
  .caret-up {
    width: 12px;
    height: 12px;
    transition: 300ms linear all;
  }

  .caret-up {
    transform: rotate(180deg);
  }
`

interface RolesOptionsProps {
  greyOut: boolean
}

export const RolesOptions = styled.div<RolesOptionsProps>`
  border-bottom: 1px solid #d9e2da;
  display: flex;
  align-items: center;
  padding: 1rem 0;
  background-color: ${props => (props.greyOut ? '#cccccc' : '#ffffff')} .is-selected {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const RoleDesignation = styled.div<any>`
  font-size: 18px;
  color: #02160f;
  font-weight: ${props => (props.isSelected ? 'bold' : 300)};
`

export const RoleDesc = styled.div`
  margin-top: 8px;
  font-size: 12px;
  width: 580px;
  color: rgba(62, 62, 62, 0.7);
  font-weight: normal;
  line-height: 16px;
`

interface SelectBtnProps {
  isSelected: boolean
}

export const SelectBtn = styled.button<SelectBtnProps>`
  width: 18px !important;
  height: 18px !important;
  border-radius: 50% !important;
  padding: 0;
  border: 1px solid ${props => (props.isSelected ? '#33BB40' : 'gray')};
  margin: 0 !important;
  background: ${props => (props.isSelected ? '#33BB40' : 'transparent')};
  outline: 0;
  transition: 300ms background;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  cursor: pointer;
`

export const AddNewRoleBtn = styled.button`
  padding: 1rem 0 0 0;
  margin: 0 !important;
  border: 0;
  background: transparent;
  outline: 0;
  color: #3e3e3e;
  letter-spacing: 1px;
  font-size: 14px;
  font-weight: bold;
`

export const SelectAllBtn = styled.div`
  display: flex;
  justify-content: flex-end;

  button {
    margin: 0 !important;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: rgba(62, 62, 62, 0.5);
    font-size: 14px;
  }
`

export const SelectPermission = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  align-items: center;
  padding: 1rem 0;

  .is-selected {
    margin-left: auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const PermissionType = styled.div`
  color: #02160f;
  font-size: 18px;
  font-weight: normal;
`

export const PermissionBtnGrp = styled.div`
  margin-top: 2rem;

  button {
    width: 30%;
    margin: 0 !important;
  }

  .cancel-addNewRole-btn {
    margin-left: 1rem !important;
  }
`

export const SelectAllRoles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;

  span {
    font-size: 18px;
    color: #02160f;
    font-weight: bold;
  }

  button {
    margin: 0 !important;
    padding: 0;
    border: 0;
    outline: 0;
    background: transparent;
    color: rgba(62, 62, 62, 0.5);
    font-size: 14px;
  }
`

export const SelectedRole = styled.div`
  padding: 7px;
  background: #e7e7e7;
  border-radius: 2px;
  margin: 5px;
  color: #02160f;
  font-size: 14px;
  height: 26px;
  display: flex;
  align-items: center;
`

export const DeleteRoleBtn = styled.button`
  margin: 0 !important;
  margin-left: 10px !important;
  padding: 0;
  border: 0;
  outline: 0;
  cursor: pointer;
`
