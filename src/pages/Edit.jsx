import React from 'react'
import { useParams } from 'react-router-dom'

const Edit = () => {
  const param = useParams()

  
  return (
    <div>{param.id} Edit</div>
  )
}

export default Edit