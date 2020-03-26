import * as React from 'react'
import { Fragment } from 'react'
import loading from '../../assets/image/loading.gif'


const Loading = ({ width = '200px' }) => (
  <Fragment>
    <img 
      src={loading}
      style= {{ width, margin: 'auto', display: 'block' }}
      alt='Loading...'
    />
  </Fragment>
 )


export default Loading
