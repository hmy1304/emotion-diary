import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Header from '../components/Header'
import Button from '../components/Button'
import Viewer from '../components/Viewer'
import { getStringedDate } from '../util/getStringedDate'
import useDiary from '../hooks/useDiary'
import useTitle from '../hooks/useTitle'

const Diary = () => {
  const nav = useNavigate()
  const {id} = useParams()

  const curDiaryItem = useDiary({id})

  useTitle(`${id}번의 일기 보기`)

  if(!curDiaryItem){
    return<div>불러오는 중...</div>
  }

  const {createdDate, emotionId, content} = curDiaryItem
  const title = getStringedDate(new Date(createdDate))

  return (
    <div>
      <Header 
      leftChild={<Button
        onClick={()=>nav(-1)} 
        text={"뒤로가기"}/>}
      title={title}
      rightChild={<Button
        onClick={()=>nav(`/edit/${id}`)}
        text={"수정하기"} 
        type={"POSITIVE"}/>}/>
      <Viewer emotionId={emotionId} content={content}/>
    </div>
  )
}

export default Diary