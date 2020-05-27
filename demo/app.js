import React from 'react'
import { GoogleLogout, GoogleLogin } from '../src/index'

const clientId = '376684017659-91qgnhjh5csomqi588im3arm18vijfd0.apps.googleusercontent.com'

const success = response => {
  console.log(response.profileObj) // eslint-disable-line
}

const error = response => {
  console.error(response) // eslint-disable-line
}

const logout = () => {
  console.log('logout') // eslint-disable-line
}

export default () => (
  <div>
    <GoogleLogin theme="dark" style={{ background: 'blue' }} onSuccess={success} onFailure={error} clientId={clientId} />
    <br />
    <br />
    <GoogleLogout buttonText="Logout" onLogoutSuccess={logout} />
  </div>
)
