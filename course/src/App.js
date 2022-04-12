const Header = (props) => { 
  console.log(props)
  return <h1>{props.course.name}</h1>}
  
const Content = (prop) => {
  return (
  <div>{prop.parts.map(({name, exercises})=>( 
  <p key={name}> {name} {exercises} </p>))}</div>)

}

const Total = (prop) => {
  let total = 0;
  prop.parts.forEach(element => { total = total + element.exercises; });
   return (
      <div>
      <p>Number of exercises {total}</p>
      </div>)}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [ {
      name: 'Fundamentals of React',
    exercises: 10 },
    { name: 'Using props to pass data', 
    exercises: 7 },
    {name: 'State of a component', exercises: 14 } ] }
    
  return ( 
    <div> <Header course={course} /> 
     <Content parts={course.parts} /> 
     <Total parts={course.parts} /> </div> 
  )}
     

export default App