import { useState } from 'react'    

onst App = () => {
  
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const kaikki = [bad + good + neutral]



  
  return (

    
    <><h1>give feedback</h1><div>
      <div>
        <button onClick={() => setGood(good + 1)}>
          good

        </button>
        <button onClick={() => setNeutral(neutral + 1)}>
          neutral

        </button>

        <button onClick={() => setBad(bad + 1)}>
          bad
        </button>

    <h2>stats</h2>

    <p>good {good}</p>
    <p>neutral {neutral}</p>
    <p>bad {bad}</p>
    <p>all {bad + good + neutral}</p>
    <p>{good / kaikki *100 }%</p>
    <p>{good / bad }</p>

      </div>
    </div></>
  )
}

export default App