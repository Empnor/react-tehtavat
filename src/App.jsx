import { useState } from 'react'    


const Header = (props) => {
  return <h1>{props.course.name}</h1>
}

const Part = (props) => {
  return <p>{props.part} {props.exercises} </p>
}

const Content = (props) => {
  return(
    <div>
      <Part part={props.part1.parts[0].name} exercises={props.part1.parts[0].exercises} />
      <Part part={props.part2.parts[1].name} exercises={props.part2.parts[1].exercises} />
      <Part part={props.part3.parts[2].name} exercises={props.part3.parts[2].exercises} />
      <Part part={props.part4.parts[3].name} exercises={props.part4.parts[3].exercises} />
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
      
    </div>
  )
}

const Total = (props) => {
  return <p >Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10
        },
        {
          name: 'Using props to pass data',
          exercises: 7
        },
        {
          name: 'State of a component',
          exercises: 14
        },
        {
          name: 'Redux',
          exercises: 11
        }
      ]
    }
  const part1 = 'Fundamentals of React'
  const exercises1 = 10

  const part2 = 'Using props to pass data'
  const exercises2 = 7

  const Total = (props) => {
    console.log(props)
      return <p >Total of {
        props.part1.parts[0].exercises + 
        props.part2.parts[1].exercises + 
        props.part3.parts[2].exercises +
        props.part3.parts[3].exercises 
        } exercises</p>
      }
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Header />
      <Content 
        part1={course} 
        part2={course} 
        part3={course}
        part4={course} 
      part1={part1} 
      part2={part2} 
      part3={part3}
      exercises1={exercises1} 
      exercises2={exercises2} 
      exercises3={exercises3} 
      />
      <Total
        part1={course} 
        part2={course} 
        part3={course}  
        part4={course} 
      exercises1={exercises1} 
      exercises2={exercises2} 
      exercises3={exercises3}  
      />


    </div>
  )
}
