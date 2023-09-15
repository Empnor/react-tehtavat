import { useState } from 'react'    

const Statistics = ({good, neutral, bad, all}) => {
  if(bad === 0&& good == 0&& neutral === 0){
  return(
  <div>
  <p>et ole vastannut</p>
  
  </div>
  )
  }  
  
  else{
  return (
  
    <div>  
      <h2>stats</h2>
      <p>good {good}</p>
      <p>neutral {neutral}</p>
      <p>bad {bad}</p>
      <p>all {all}</p>
      <p>{good / all *100 }%</p>
      <p>{good / bad }</p>
    </div>
  
  )
  }
  
  }
  
  
  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = bad + good + neutral
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
  
          <Statistics 
            good={good}
            bad={bad}
            neutral={neutral}
            all={all}
          />
  
        </div>
      </div></>
     )
  }
  
  export default App