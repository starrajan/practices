import * as React from 'react'
import { Fragment } from 'react'
import loading from '../../assets/image/loading.gif'
import styled from 'styled-components'


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
