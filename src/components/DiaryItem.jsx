import React from 'react'
import "./DiaryItem.css"
import {getEmotionImages} from "../util/getEmotionImages"
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const DiaryItem = ({id, emotionId, createdDate, content}) => {
  // const emotionId = 1
  const nav = useNavigate()

  return (
    <div className='DiaryItem'>
      <div 
      onClick={()=>nav(`/diary/${id}`)}
      className={`img-section bg-${emotionId}`}>
        <img src={getEmotionImages(emotionId)} alt="icon" />
      </div>
      <div 
      onClick={()=>nav(`/diary/${id}`)}
      className="info-section">
        <div className="created-date">{new Date(createdDate).toLocaleDateString()}</div>
        <div className="content">{content}</div>
      </div>
      <div 
      onClick={()=>nav(`/edit/${id}`)}
      className="button-section">
        <Button text={"수정하기"}/>
      </div>
    </div>
  )
}

export default DiaryItem