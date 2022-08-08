import React from 'react'
import {SpinnerCircularFixed} from 'spinners-react'

const Loader = ({size}) => {
  return (
    <SpinnerCircularFixed size={size}
     thickness={100} speed={100}
    color="rgba(255, 255, 255, 1)"
     secondaryColor="rgba(0, 0, 0, 0.44)" />
  )
}

export default Loader