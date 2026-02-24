import React from 'react'
import "./Viewer.css"
import {emotionList} from "../util/constants"
import {getEmotionImages} from "../util/getEmotionImages"

const Viewer = ({emotionId, content}) => {

    const emotionItem=emotionList.find(
        (item) => String(item.emotionId)===String(emotionId)
    )

     return (
        <div className='Viewer'>
            <section className="viewer-image-section">
                <h4>오늘의 감정</h4>
                 <div className={`emotion-img-wrapper img-${emotionId}`}>
                    <img src={getEmotionImages(emotionId)} alt="icon" />
                    <div>
                        {emotionItem.emotionName}
                    </div>
                 </div>
            </section>
            <section className="content-section">
                <h4>오늘의 일기</h4>
                <p className="content-wrapper">
                    {content}
                </p>
            </section>
        </div>
    )
}

export default Viewer