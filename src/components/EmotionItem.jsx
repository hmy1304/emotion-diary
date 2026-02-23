import React from 'react'
import "./EmotionItem.css"
import { getEmotionImages } from '../util/getEmotionImages'

const EmotionItem = ({emotionId, emotionName, isSelected, onClick}) => {
  return (
    <div 
    onClick={onClick}
    className={`EmotionItem ${isSelected? `item_on_${emotionId}`:''}`}>
        <img src={getEmotionImages(emotionId)} 
        alt={emotionName} />
        <div>
            {emotionName}
        </div>
    </div>
  )
}

export default EmotionItem