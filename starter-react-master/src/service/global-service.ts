import { useState, useEffect } from 'react'
import axios from 'axios'
import { apiBaseUrl } from './global-variables'

const authToken: string | null = localStorage.getItem('token')
axios.defaults.baseURL = apiBaseUrl

export enum ResponseErrorCode {
  badRequest = '400',
  needsLogin = '401',
  notFound = '404',
  serverError = '500',
  other = '0',
}

export class HttpError {
  code: ResponseErrorCode
  key?: string
  message?: string

  constructor(code: ResponseErrorCode, key?: string, message?: string) {
    this.code = code
    this.key = key
    this.message = message
  }
}

const handleError = async (response: any): Promise<HttpError> => {
  const status = response.status.toString()
  switch (status) {
    case ResponseErrorCode.badRequest:
      const responseBody = response.data ? response.data : await response.clone().json()
      return new HttpError(ResponseErrorCode.badRequest, responseBody.key, responseBody.message)
    case ResponseErrorCode.needsLogin:
      // dispatch(logout())
      console.log('user logs out')
      localStorage.clear()
      return new HttpError(ResponseErrorCode.needsLogin)
    case ResponseErrorCode.notFound:
      return new HttpError(ResponseErrorCode.notFound)
    case ResponseErrorCode.serverError:
      return new HttpError(ResponseErrorCode.serverError)
    default:
      return new HttpError(ResponseErrorCode.other)
  }
}

// use methods for the authenticated API with token append on headers

export const useHttpGet = (url: string, dependencies: any[]) => {
  const [loading, setLoading] = useState<boolean>(false)
  const [data, setData] = useState<any>(null)
  useEffect(() => {
    setLoading(true)
    fetchData(url)
  }, dependencies)
  const fetchData = async (url: string) => {
    const res: any = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    })
    try {
      if (res.data) {
        setLoading(false)
        setData(res.data)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  return [loading, data]
}

export const useHttpGetsimpleauth = async (url: any) => {
  try {
    const response: any = await axios.get(url, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    })
    if (response.data) {
      const data = { loading: false, data: response.data }
      return data
    }
  } catch (err) {
    const data = { loading: false }
    return data
  }
}

export const useHttpPostauth = async (url: any, data: any) => {
  console.log('TCL: useHttpPost -> data', data)
  try {
    const response: any = await axios.post(url, data, {
      headers: {
        Authorization: `Bearer +${authToken}`,
      },
    })
    if (response.data) {
      const data = { loading: false, status: response.status }
      return data
    }
  } catch (err) {
    const data = { loading: false }
    return data
  }
}

export const useHttpDelete = async (url: any) => {
  try {
    const response: any = await axios.delete(url, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    })
    if (response.data) {
      const data = { loading: false, status: response.status }
      return data
    }
  } catch (err) {
    const data = { loading: false }
    return data
  }
}

export const useHttpPut = async (url: any, data: any) => {
  console.log('TCL: useHttpPut -> data', data)
  try {
    const response: any = await axios.put(url, data, {
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    })
    if (response.data) {
      const data = { loading: false, status: response.status }
      return data
    }
  } catch (err) {
    const data = { loading: false }
    return data
  }
}
// use methods for the authenticated API with token append on headers

// Unauthorized request when user is not logged in and token is not sent
export const useHttpGetsimpleunauth = async (url: any) => {
  try {
    const response: any = await axios.get(url)
    if (response.data) {
      const data = { loading: false, data: response.data }
      return data
    }
  } catch (err) {
    console.log('TCL: err.response', err.response)
    return handleError(err.response)
  }
}
export const useHttpPostunauth = async (url: any, data: any) => {
  console.log('TCL: useHttpPost -> data', data)
  try {
    const response: any = await axios.post(url, data)
    if (response.data) {
      const data = { loading: false, status: response.status }
      return data
    }
  } catch (err) {
    return handleError(err.response)
  }
}
// Unauthorized request when user is not logged in and token is not sent
