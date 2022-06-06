import React, { useEffect, useState } from 'react'
import "./student.css"

const Student = ({student, setNewTag ,addTagStudent}) => {
  
  const [btnAverage, setBtnAverage] = useState(true)
  const [tag, setTag] = useState("")
 


  useEffect(()=> {
  },[btnAverage])

 const handleClick = e => {
  !btnAverage ? setBtnAverage(true) : setBtnAverage(false)
  const average = e.target.previousSibling.lastChild.lastChild.previousSibling.previousSibling
  const btn = e.target
  showAverage(average,btn)
 }
 /*function for show tests on card student*/
 const showAverage = (average,btn) => {
  btnAverage ? average.classList.toggle("show_average_student") : average.classList.toggle("show_average_student")
  btnAverage ? btn.textContent = "-" : btn.textContent = "+" 
 }
/*function for transform string to number */
 const transformNumberTest = () => {
  const numberArray = []; 
  for(let i = 0; i < student.grades.length; ++i) {                               
    numberArray.push(Number(student.grades[i])) 
  }
  return totalTest(numberArray)
}
/*function for addition all number of array */
const totalTest = numberArray => {
   let total = numberArray.reduce((acumulador, number)=> acumulador + number)
   return total / 8
}
/*function for add a new tag on studen card*/
const handleChange = e =>{
  setTag(e.target.value)
}
const handleSubmit = (e) => {
  e.preventDefault()
  const containerTag = e.target.parentElement.querySelector(".container_tag")
  const div = document.createElement("div")
  div.classList.add("div_tag")
  div.textContent = tag
  setNewTag(tag)
  addTagStudent(student, tag)
  div.textContent === "" ? setTag("") : containerTag.appendChild(div)
  setTag("")
}
  return (
    <div className='student'>
      <div className='student_page'>
        <div className='student_pick'>
            <img alt='student pick' src={student.pic}/>
        </div>
        <div className='student_info'>
            <h2>{student.firstName} {student.lastName}</h2>
            <p>City: {student.city}</p>
            <p>Email: {student.email}</p>
            <p>Company: {student.company}</p>
            <p>Skill: {student.skill}</p>
            <p>Average: {transformNumberTest()}%</p>
            <div className='average_student'>
              {/*list of test */}
              {student.grades.map((grade,i) => {
                return <p key={i}>Test {i + 1}: {grade}%</p>
              })}
            </div>
            <div className='container_tag'></div>
            <form onSubmit={handleSubmit}>
            <input 
            className='input_tag'
            type="text"
            placeholder='Add a tag'
            value={tag}
            onChange={handleChange}/>
            </form>
        </div>
      </div>  
        <button className='btn_info' onClick={handleClick}>+</button>
    </div>
  )
}

export default Student
