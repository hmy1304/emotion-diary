import React from 'react'
import { useParams } from 'react-router-dom'

const Diary = () => {
  const param = useParams()
  console.log(param)

  return (
    <div>{param.id} Diary</div>
  )
}

export default Diary