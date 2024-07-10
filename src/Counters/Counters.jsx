import React, { useState } from 'react'
import SoloCounter from './components/SoloCounter'

const Counters = () => {
    const [counter, setCounter] = useState([0 , 0 , 0])

    const handleCounterInc = (index) => {
        setCounter(counter => counter.map((counter, i)=> i === index ? counter+1 : counter))
    }
    const handleCounterDec = (index) => {
        setCounter(counter => counter.map((counter, i)=> i === index && counter > 0 ? counter-1 : counter))
    }

    return (
        <div>
            {
                counter.map((counter , index) => {
                    return  <SoloCounter key={index} handleCounterInc={() => handleCounterInc(index)} handleCounterDec={() => handleCounterDec(index)} counter={counter}/>
                })
            }
        </div>
    )
}

export default Counters
