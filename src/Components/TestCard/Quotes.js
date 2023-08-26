import React, { useEffect, useState } from 'react'
import {faker} from "@faker-js/faker"

const Quotes = (props) => {
    const [words, setWords] = useState()
    const [letters, setLetters] = useState()
    let inputLetters = "";
    let array = ""
    props.getData(words)
    useEffect(()=>{
      setWords(faker.lorem.words(60))
    },[])
    if(words!== undefined){
      array = words
      const letters = array.split("")
      // props.getData(letters)
    }
    const inputs = props.inputs
    if(inputs!== undefined){
      inputLetters = inputs.split("")
      // setLetters(letters)
    }

  return (
    <div className='sm:h-[750px] md:h-[500px]'>
      <p id='wordsP' value="{words}" className='tracking-[5px] z-10 p-5 font-Family font-[600] text-[18px] md:text-4xl text-[Gray]'>{words}</p>
    </div>
  )
}

export default Quotes
