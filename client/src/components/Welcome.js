import React from 'react'
import Alerts from './Alert'

const Welcome = (props) => {
  const { alertClose, alert } = props

  return (
    <>
      <div>Welcome</div>
      {alert === "" ? "" : <Alerts alertClose={alertClose} />}
    </>
  )
}

export default Welcome