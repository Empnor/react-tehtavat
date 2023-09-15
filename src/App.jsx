import { useState } from 'react'    

const Statistics = (props) => {

  if(props.bad == 0 && props.good == 0 && props.neutral == 0){
    return(
      <div>
        <p>et ole vastannut</p>
      </div>
    )
  } else {
    return (
  
      <div>  
        <h2>stats</h2>
          <StatisticLine text="good" value={props.good} />
          <StatisticLine text="neutral" value ={props.neutral} />
          <StatisticLine text="bad" value ={props.bad} />
          <StatisticLine text="all" value ={props.all} />
        <p>{(props.good + 0 + -props.bad) / props.all}</p>
        <p>{ props.good / props.all *100 }%</p>
      </div>
  
    )
  }
  
  }
  
  
  const StatisticLine = (props) =>{
    return(
      <table>
        <tr>
      <th>{props.text}</th>
     <th> {props.value}</th>
      </tr>
  </table>
    )
  }
  
  
  
  const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const all = bad + good + neutral
    return (
  
      <div>
  
      <h1>give feedback</h1>
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
            prosent={prosent}
          />
        </div>
      </div>
     )
  }
  
  export default App