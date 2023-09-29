import React from 'react'
import { Toaster } from 'react-hot-toast'
function ToasterContainer() {
  return (
    <div><Toaster
    position="top-center"
    reverseOrder={true}
    /></div>
  )
}

export default ToasterContainer