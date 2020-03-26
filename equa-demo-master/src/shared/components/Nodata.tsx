import * as React from 'react'
import { Fragment } from 'react'

function Nodata() {
  return (
    <Fragment>
      <div>
        <img src={require('assets/icons/nodata.png')} alt="" />
        <p>No data found!</p>
      </div>
    </Fragment>
  )

}

export default Nodata
