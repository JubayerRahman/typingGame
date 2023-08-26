import React, { useEffect, useState } from 'react'
const Timer = (props) => {
  const [counter,setCounter] = useState(60)
  const [textareaValue, setTextareaValue] =useState()

  //timet Function
  useEffect(()=>{
      let countPlus =0
     if (props.timerEnable) {
      if(counter>0 && counter<=60){
        setInterval(() => {
          countPlus += 1
          setCounter(counter-countPlus)
        }, 1000);
        } 
        setTimeout(() => {
          window.location.reload()
        }, 60000);
     }
    },[props.timerEnable])

    const [data, setData] = useState("")
     const getData =(data)=>{
      setData(data)
     }
     if(data!=""){
      const letters = "hbvjbvjsvbifgvfvjf"
     const array = letters.split("")
     console.log(array)
     }
  return (
    <div className='w-[90vw] flex flex-col gap-5'>
      <div className='counter flex items-center  '>
        <p className=' p-5  flex text-[orange] font-bold drop-shadow-xl cursor-pointer  font-Family text-left'>Time: {counter} Sec</p>
      </div>
    </div>
  )
}

export default Timer
