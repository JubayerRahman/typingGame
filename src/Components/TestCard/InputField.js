import React, { useEffect, useState } from 'react'
import {faker} from "@faker-js/faker"
import { SocialMediaSharer } from 'social-media-link-sharer'
import html2canvas from 'html2canvas'

const InputField = () => {
    const [inputValue, setInputValue] = useState() 
    const [inputpara , setInputPara]  = useState()
    const [showpara , setShowPara] = useState()
    const [num , setNum] = useState(60)
    const[bigElement , getBigElement] = useState()
    const [wpm, setWpm] = useState("00")
    let arrayOfLetters =""
    let datas ="";

    const ConverAndDownload =()=>{
        const targetElement = document.getElementById("resultSummery")
        html2canvas(targetElement).then(canvas =>{
            const screenShotImg = canvas.toDataURL("image/png")
            const downloadLink = document.createElement("a")
            downloadLink.href = screenShotImg
            downloadLink.download = "your_typing_Score.png"
            downloadLink.click()
        })
    }

    const shere = new SocialMediaSharer();
    shere.url="https://jobayer-typing-game.netlify.app/";
    shere.title="typing test webApp";
    shere.text="Hey, I got ${wpm} form this website you also can check yours.";

   

    useEffect(()=>{
        let words =(faker.lorem.words(60))
                datas = words.split("")
                getBigElement(datas)
                setShowPara(
                    datas.map((char , index)=>(
                        <span key={index} id ={index} className= {index} >{char}</span>
                    ))
                )
                // console.log(datas)
                const result = document.getElementById("result").style.display= "none"
                const typeCard = document.getElementById("typeCard").style.display= "block"
    },[])
       
       useEffect(()=>{
        if(inputValue!==undefined){
            let letters = inputValue
            arrayOfLetters = letters.split("")
            setInputPara(arrayOfLetters)
            let Words = inputValue.split(" ")
            setWpm((Words.length)-1)
        }
        if(inputpara!==undefined){
                let time = 0;
                if(num>0){
                    setInterval(() => {
                    time++ 
                    let newTime = parseFloat(num)- parseFloat(time)
                    if(parseFloat(newTime)<10){
                        let smalTime = "0" + newTime
                        newTime = smalTime
                    }
                    setNum(newTime)
                    }, 1000);
                }
            setTimeout(() => {
                //another function will be append here
                const result = document.getElementById("result").style.display= "flex"
                const typeCard = document.getElementById("typeCard").style.display= "none"
            }, 60000);
            //lets try something new //
            for (let i = 0; i < inputpara.length; i++) {
                if(inputpara!==undefined){
                    let letter = document.getElementById(i)
                    console.log("My input " +letter.innerText)
                    const element = arrayOfLetters[i];
                    console.log("Element "+ element)
                if(element ===letter.innerText){
                    letter.style.color ="orange"
                    letter.style.textDecoration = "none"
                }
                else{
                    letter.style.color = "red"
                    letter.style.textDecoration = "line-through"
                }
                }
                
            }
            
        }
       },[inputValue])
       const reload =()=>{
        window.location.reload()
       }
  return (
    <div className='flex flex-col justify-center items-center'>
        <div className='my-[50px]' id="typeCard">
        <p className='text-[white] text-[50px] font-Family pb-10 text-center'>My Typ<span className='text-[red]'>ing</span> Game</p>
    <div className='flex gap-3'>
        <p className='text-[orange] font-Family text-2xl font-bold cursor-pointer'>Time: {num} sec</p>
        <p className='text-[white] font-Family text-2xl font-bold cursor-pointer'>|</p>
        <p className='text-[orange] font-Family text-2xl font-bold cursor-pointer'>{wpm} W.P.M</p>
    </div>
      <div className="card w-[90vw] my-auto shadow-xl">
        <div className='sm:h-[750px] md:h-[500px]'>
        <p className='absolute text-[gray] w-[100%] p-5 font-Family font-[600] text-[18px] md:text-4xl 
    tracking-[5px]   break-words'>
        {showpara}
    </p>
    </div>
  <div className="absolute m-0 p-0">
    <textarea autoFocus className='sm:h-[750px] md:h-[500px] bg-transparent outline-none w-[90vw] p-5 font-Family font-[600] text-transparent text-[18px] md:text-4xl resize-none text-left' value={inputValue} onChange={ (e)=>{setInputValue(e.target.value)}}></textarea>
  </div>
</div>
<div className="card-actions justify-center mt-[50px] ">
      <button className="text-[orange]" onClick={reload}><i className="fa-solid fa-rotate-left"></i></button>
    </div>
    </div>
    <div className='w-[65vw] bg-[#282c34] flex-col items-center gap-4 shadow-2xl p-[50px]'  id='result'>
        <div id="resultSummery" className= "bg-[#282c34] p-5">
        <p className='text-center text-[white] text-[50px]'>Your <span className='text-[orange] underline '>Result</span> </p>
        <p className='text-center text-[orange] text-3xl font-[600] font-Family'>Your typing speed is {wpm} words per minute.
        <br></br> I dont care about accuracy so I dont show that <i class="fa-solid fa-face-laugh-beam"></i></p>
        <p className='text-[ornage] text-5xl'></p>
        <p className='text-center py-[20px] font-Family font-[600] text-2xl text-[white]'>Developed By <a className='underline text-[green] font-bold' href='https://allmyprojects-jobayer.netlify.app/' target='_blank' rel="noreferrer">Jobayer Rahman</a> </p>
        </div>
        <div className='flex gap-4 justify-start items-end '>
        <button className="text-[orange] pb-[10px] text-[30px]" onClick={reload}><i className="fa-solid fa-rotate-left"></i></button>
        <button className="text-[orange] pb-[10px] text-[30px]" onClick={ConverAndDownload}><i class="fa-solid fa-download"></i></button>
        <div className='Share '>
        <p className=' text-[white] text-xl font-[600] font-Family'>Share:</p>
            <div className='flex gap-4 border-[2px] border-[white] rounded-[20px] p-[10px]'>
            <button className='text-[green] text-[30px]' onClick={() => shere.share("facebook")}>
        <i class="fa-brands fa-facebook"></i></button>
        <button className='text-[green] text-[30px]' onClick={() => shere.share("twitter")}>
            <i class="fa-brands fa-x-twitter"></i></button>
        <button className='text-[green] text-[30px]' onClick={() => shere.share("whatsapp")}>
            <i class="fa-brands fa-whatsapp"></i></button>
            </div>
        </div>
        </div>
    </div>
    </div>
  )
}

export default InputField
