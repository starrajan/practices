import * as React from 'react'
import { useState, useEffect } from 'react'
import { OrganizationContainer, OrganizationContent } from './style'
import { CreateOrganization, ImportOrganization, OrganizationDescription } from './components'

import history from '../app/components/history'

const Organization = (props: any) => {
  const [state, setState] = useState('create')
  const [step, setStep] = useState(1)

  useEffect(() => {
    const orgPath = history.location.pathname.split('-')[1]
    setState(orgPath)
  }, [])
  return (
    <OrganizationContainer>
      <OrganizationContent>
        {state === 'create' && step <= 4 && <OrganizationDescription />}
        {state === 'import' && step <= 3 && <OrganizationDescription />}
        {state === 'create' ? <CreateOrganization step={step} setStep={setStep} /> : <ImportOrganization step={step} setStep={setStep} />}
      </OrganizationContent>
    </OrganizationContainer>
  )
}

export default Organization
