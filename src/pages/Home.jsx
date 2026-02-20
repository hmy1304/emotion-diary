import React, {useState, useContext} from 'react'
import Header from "../components/Header"
import Button from "../components/Button"
import DiaryList from "../components/DiaryList"
import { DiaryStateContext } from '../App'

const Home = () => {
  const data = useContext(DiaryStateContext)

  const [pivotDate, setPivotDate] = useState(new Date())
  const onIncreamentNonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth()+1)
    )
  }
  const onDecreamentNonth = () => {
    setPivotDate(
      new Date(pivotDate.getFullYear(), pivotDate.getMonth()-1)
    )
  }

  const getMonthlyDate = (pivotDate, data) => {
    const beginTime = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth(),
      1,0,0,0
    ).getTime()
    const endTime = new Date(
      pivotDate.getFullYear(),
      pivotDate.getMonth()+1,
      0,23,59,59,
    ).getTime()

    return data.filter(
      (item)=>beginTime<=item.createdDate && item.createdDate<=endTime
    )
  }

  const monthlyData = getMonthlyDate(pivotDate,data)

  return (
    <div>
      <Header 
      leftChild={<Button text={'<'} onClick={onDecreamentNonth}/>}
      title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth()+1}월`}
      rightChild={<Button text={'>'} onClick={onIncreamentNonth}/>}
      />
      <DiaryList data={monthlyData}/>
    </div>
  )
}

export default Home