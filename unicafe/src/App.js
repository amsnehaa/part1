import { useState } from 'react'

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const goodByOne = () => setGood(good + 1)
  const BadByOne = () => setBad(bad - 1)
  const neutralToZero = () => setNeutral(0)

  return (
    <div>
      <h2>Give Feedback</h2>     
      <Button onClick={goodByOne} text='good' />
      <Button onClick={neutralToZero} text='neutral' />     
      <Button onClick={BadByOne} text='bad' />  

      <Statistics good={good} bad={bad} neutral={neutral}/>         
    </div>
  )
}
const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

const Statistics = (props) => {
  const {good, bad, neutral} = props
  return (
    <div>
      <h3>Statistics</h3>
      Good : {good} 
      <br></br>
      Bad : {bad} 
      <br></br>
      Neutral : {props.neutral} 
      <br></br>
      Average : {(good + neutral + bad)/3}
      <br></br>
      Percentage : {(good + bad + neutral)/100}
    </div>
  )
}

export default App
