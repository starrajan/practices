import * as React from 'react'
import { TeamMemberTables } from '../style'
import CertificateImage from '../../../../../assets/image/certificate.png'
import * as moment from 'moment'

interface Props {
  data: any
}


const ShareTable = (props: Props) => {
  const showCertificate = () => {
    window.open(CertificateImage, 'Image')
  }

  const { data } = props
  if (data.length) {
    return (
      <TeamMemberTables>
        <thead>
          <tr>
            <td> ID </td>
            <td> ISSUE DATE </td>
            <td> SHARE </td>
            <td> PRICE </td>
          </tr>
        </thead>

        <tbody>
          {data.map((v: any, k: any) => {
            return (
              <tr key={k}>
                <td data-type="certificate-id" onClick={() => showCertificate()}>
                  {v.certificateNum}
                </td>
                <td> {v.date} </td>
                <td> {v.shares} </td>
                <td> {`$ ${v.capitalContribution.toFixed(2)}`} </td>
              </tr>
            )
          })}
        </tbody>
      </TeamMemberTables>
    )
  }

  return <div>no shares found</div>
}

export default ShareTable
