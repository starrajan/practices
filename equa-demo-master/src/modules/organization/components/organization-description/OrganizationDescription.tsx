import * as React from 'react'
import { OrgDescription, DescHeading, DescText } from './style'
import IdeaSvg from 'assets/image/idea.svg'

const OrganizationDescription = (props: any) => {
  return (
    <OrgDescription>
      <DescHeading>Let’s set your organization up on the Equa START platform.</DescHeading>
      <DescText>
        We’ll create a cap table and operating agreement for you automatically with this information - you’ll be able to edit it at any
        time.
      </DescText>
      <div>
        <img src={IdeaSvg} alt="idea" />
      </div>
    </OrgDescription>
  )
}

export default OrganizationDescription
