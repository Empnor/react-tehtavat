import { useState } from 'react'    

const Statistics = (props) => {
  let hyva = props.good
  let huono = props.bad
  let neutraali = props.neutral
  let all = props.kaikki
return (
  <div>
    <h2>stats</h2>
    <p>good {hyva}</p>
    <p>neutral {neutraali}</p>
    <p>bad {huono}</p>
    <p>all {huono + hyva + neutraali}</p>
    <p>{hyva / all *100 }%</p>
    <p>{hyva / huono }</p>
  </div>

)


}


const App = () => {
  
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

        <Statistics 
          good={good}
          bad={bad}
          neutral={neutral}
          kaikki={kaikki}
        />

      </div>
    </div></>
   )
}

export default App