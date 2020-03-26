import * as React from 'react'
import { MultiSelectDropDown } from './style'
import caretDown from 'assets/image/select-down-arrow.svg'
import { rolesPermissions } from 'shared/helpers/constants'
import { Button } from 'shared/components/button'
//@ts-ignore
import uuidv1 from 'uuid/v1'

import {
  RolesOptions,
  RoleDesignation,
  RoleDesc,
  SelectBtn,
  ToggleBtn,
  AddNewRoleBtn,
  SelectAllBtn,
  SelectPermission,
  PermissionType,
  PermissionBtnGrp,
  SelectAllRoles,
  SelectedRole,
  OutputField,
  DeleteRoleBtn,
  DropdownStyle,
  CustomRoleInput,
} from './style'

interface Props {
  roles: any
  values: any
  type: any
  name: any
  value: any
  index: any
  selectedRoles: any
  editId: number
  rolesLLC: Array<any>
  rolesCorp: Array<any>
  rolesOther: Array<any>
  addCustomRole?: (type: number, customRole: any) => void
}

interface Options {
  id: string
  designation: string
  description: string
  isSelected: boolean
}

interface State {
  openDropDown: boolean
  options: Array<Options>
  permissions: Array<any>
  renderRolesOrPermission: boolean
  position: number
}

class MultiSelectRole extends React.Component<Props, State> {
  state: State = {
    openDropDown: false,
    options: [],
    permissions: [],
    renderRolesOrPermission: true,
    position: -1,
  }

  isRolePresent = (id: string, availableOptions: Options[]): boolean => {
    let row = availableOptions.filter(v => v.id === id)

    if (row.length === 0) return false

    return true
  }

  componentDidMount() {
    const { type, selectedRoles, editId, index, rolesLLC, rolesCorp, rolesOther } = this.props

    let options = type === 1 ? [...rolesLLC] : type === 2 ? [...rolesCorp] : [...rolesOther]

    let availableOptions: Options[] = options.map(v => ({
      id: v.id,
      designation: v.designation,
      description: v.description,
      isSelected: false,
    }))

    let permissions = rolesPermissions.map(v => ({
      type: v.type,
      isSelected: false,
    }))

    let position = editId >= 0 ? editId : index - 1

    if (selectedRoles.length > 0) {
      for (let i = 0; i < selectedRoles.length; i++) {
        if (this.isRolePresent(selectedRoles[i].id, availableOptions)) {
          availableOptions = availableOptions.map(v => {
            if (v.id === selectedRoles[i].id) {
              return {
                ...v,
                isSelected: true,
              }
            }
            return v
          })
        } else {
          availableOptions.push(selectedRoles[i])
        }
      }
    }

    this.setState({
      options: availableOptions,
      permissions: permissions,
      position: position,
    })
  }

  handleDropDownToggle = () => {
    this.setState({
      openDropDown: !this.state.openDropDown,
      renderRolesOrPermission: true,
    })
  }

  disableOption = (designation: string): boolean => {
    const { values } = this.props

    if (designation === 'Signatory' && values.members.length >= 2) {
      const { members } = values

      let count = 0
      for (let j = 0; j < members.length; j++) {
        if (!members[j]) return false
        for (let k = 0; k < members[j].roles.length; k++) {
          if (members[j].roles[k].designation === 'Signatory') {
            count = count + 1
          }
        }
      }

      if (count >= 2) return true
      return false
    }
    return false
  }

  renderOptions = () => {
    const { options, renderRolesOrPermission, permissions } = this.state

    if (renderRolesOrPermission) {
      return options.map(v => (
        <RolesOptions key={v.id} greyOut={this.disableOption(v.designation)}>
          <div>
            <RoleDesignation isSelected={v.isSelected}>{v.designation}</RoleDesignation>
            <RoleDesc>{v.description}</RoleDesc>
          </div>
          <div className="is-selected">
            <SelectBtn
              type="button"
              isSelected={v.isSelected}
              onClick={() => {
                this.selectOptions(v.id)
              }}
              disabled={this.disableOption(v.designation)}
            >
              {v.isSelected && <>&#x2713;</>}
            </SelectBtn>
          </div>
        </RolesOptions>
      ))
    } else {
      return permissions.map((v, k) => (
        <SelectPermission key={k}>
          <PermissionType>{v.type}</PermissionType>
          <div className="is-selected">
            <SelectBtn type="button" isSelected={v.isSelected} onClick={() => this.toggleAddPermission(k)}>
              {v.isSelected && <>&#x2713;</>}
            </SelectBtn>
          </div>
        </SelectPermission>
      ))
    }
  }

  toggleAddPermission = (k: number) => {
    let { permissions } = this.state

    permissions[k].isSelected = !permissions[k].isSelected

    this.setState({
      permissions: permissions,
    })
  }

  renderDropDownBtns = () => {
    const { renderRolesOrPermission } = this.state

    if (renderRolesOrPermission) {
      return (
        <AddNewRoleBtn type="button" onClick={this.toggleAddNewRole}>
          + ADD NEW ROLE
        </AddNewRoleBtn>
      )
    } else {
      return (
        <PermissionBtnGrp>
          <Button type="button" onClick={this.saveCustomRole}>
            SAVE
          </Button>

          <Button priority="tertiary" type="button" onClick={this.toggleAddNewRole} className="cancel-addNewRole-btn">
            cancel
          </Button>
        </PermissionBtnGrp>
      )
    }
  }

  saveCustomRole = () => {
    const { values, type, addCustomRole } = this.props

    //@ts-ignore
    let role = document.getElementsByName('custom-role')[0].value
    let { options, permissions, position } = this.state

    permissions = permissions.filter(v => v.isSelected === true)

    let description: string = ''

    if (permissions.length) {
      for (let i = 0; i < permissions.length; i++) {
        if (permissions.length === 1) {
          description = `${permissions[i].type}.`
        } else if (i === permissions.length - 1 && permissions.length >= 2) {
          description = description.slice(0, description.length - 2)

          description += ` and ${permissions[i].type}.`
        } else {
          description += `${permissions[i].type}, `
        }
      }
    } else {
      description = 'User has no permission'
    }

    if (!!role) {
      let customRole = {
        id: uuidv1(),
        designation: role,
        description: description,
        isSelected: true,
      }

      /*  addCustomRole(type, {
        id: customRole.id,
        designation: customRole.designation,
        description: customRole.description,
      }) */

      options.push(customRole)

      values.members[position].roles.push({ id: customRole.id, designation: customRole.designation, description: customRole.description })

      this.setState({
        options: options,
      })

      this.toggleAddNewRole()
    }
  }

  renderDropDownFields = () => {
    const { openDropDown } = this.state

    if (openDropDown) {
      return (
        <>
          <DropdownStyle>
            {this.renderSelectBtn()}
            {this.renderOptions()}
            {this.renderDropDownBtns()}
          </DropdownStyle>
        </>
      )
    } else {
      return null
    }
  }

  renderSelectBtn = () => {
    const { renderRolesOrPermission } = this.state

    if (renderRolesOrPermission) {
      return (
        <SelectAllBtn>
          <div>
            <button type="button" onClick={this.selectAllRoles}>
              Select all
            </button>
          </div>
        </SelectAllBtn>
      )
    } else {
      return (
        <SelectAllRoles>
          <span>Permissions:</span>
          <div>
            <button type="button" onClick={this.selectAllPermissions}>
              Select all
            </button>
          </div>
        </SelectAllRoles>
      )
    }
  }

  selectOptions = (id: string) => {
    let { options, position } = this.state
    const { values } = this.props

    let role = options.filter(v => v.id === id)

    if (!role[0].isSelected) {
      values.members[position].roles.push({ id: role[0].id, designation: role[0].designation, description: role[0].description })
    } else {
      values.members[position].roles = values.members[position].roles.filter((v: Options) => v.id !== id)
    }

    options = options.map(v => {
      if (v.id === id) {
        return {
          ...v,
          isSelected: !v.isSelected,
        }
      }
      return v
    })

    this.setState({
      options: options,
    })
  }

  handleDeleteRole = (id: string) => {
    const { values } = this.props

    let { options, position } = this.state

    options = options.map(v => {
      if (v.id === id) {
        return {
          ...v,
          isSelected: false,
        }
      }
      return v
    })

    this.setState({
      options: options,
    })

    values.members[position].roles = values.members[position].roles.filter((v: Options) => v.id !== id)
  }

  selectAllRoles = () => {
    let { options, position } = this.state

    const { values } = this.props

    for (let i = 0; i < options.length; i++) {
      if (!options[i].isSelected) {
        options[i].isSelected = true
        values.members[position].roles.push({ id: options[i].id, designation: options[i].designation, description: options[i].description })
      }
    }

    this.setState({
      options: options,
    })
  }

  selectAllPermissions = () => {
    let { permissions } = this.state

    for (let i = 0; i < permissions.length; i++) {
      permissions[i].isSelected = true
    }

    this.setState({
      permissions: permissions,
    })
  }

  toggleAddNewRole = () => {
    this.setState({
      renderRolesOrPermission: !this.state.renderRolesOrPermission,
    })
  }

  renderOutput = () => {
    let { options } = this.state

    if (options.length) {
      return options.map(v => {
        if (v.isSelected) {
          return (
            <SelectedRole key={v.id}>
              {v.designation}
              <DeleteRoleBtn type="button" onClick={() => this.handleDeleteRole(v.id)}>
                x
              </DeleteRoleBtn>
            </SelectedRole>
          )
        }
        return null
      })
    }
    return null
  }

  renderInputFields = () => {
    const { renderRolesOrPermission, openDropDown } = this.state

    if (renderRolesOrPermission) {
      return (
        <div className="input-btn-grp">
          <OutputField>{this.renderOutput()}</OutputField>
          <ToggleBtn type="button" onClick={this.handleDropDownToggle}>
            {openDropDown ? <img src={caretDown} className="caret-up" /> : <img src={caretDown} className="caret-down" />}
          </ToggleBtn>
        </div>
      )
    } else {
      return <CustomRoleInput type="text" name="custom-role" />
    }
  }

  render() {
    return (
      <div>
        <MultiSelectDropDown>
          {this.renderInputFields()}
          {this.renderDropDownFields()}
        </MultiSelectDropDown>
      </div>
    )
  }
}

export default MultiSelectRole
