import React, { useEffect, useState } from 'react'
import Student from "./Student"

const Students = () => {
    /*Variables whit useState hook*/
    const [studentsData, setStudentsData] = useState([])
    const [studentsPage, setStudentsPage] = useState([])
    const [newTag, setNewTag] = useState([])
  
    useEffect(()=>{
        consumeApi()
    },[])

    /*consume fetch api of hatchways app*/
    async function consumeApi(){
        const res = await fetch("https://api.hatchways.io/assessment/students")
        const data = await res.json()
        const students = data.students
        students.forEach(student => {
          student.tags = []
        });
        setStudentsData(students)
        setStudentsPage(students)
    }

    const addTagStudent = (student, newTag) =>{
      student.tags.push(newTag)
    }

    const handleChange = e => {
      filterStudents(e.target.value)
    }
    /*funcion for filter by Fullname of students */
    const filterStudents = search => {
      const resultSearch =  studentsPage.filter(student =>{
        if(student.firstName.toString().toLowerCase().includes(search.toLowerCase())){
          return student
        }
      })
      setStudentsData(resultSearch)
    }
    /*funcion for filter by tag*/
    const handleChange2 = e =>{
      filterTag(e.target.value)
    }
    const filterTag = (searchTag, student) =>{
    
    }
    
  return (
    <div>
        <input
        className='input_name'
        placeholder='Search by name'
        onChange={handleChange}
        type="text"
        />
        <input
        className='input_name'
        placeholder='Search by tag'
        onChange={handleChange2}
        type="text"
        />
        
        {/*print the list of students on screen */}
        {studentsData.map(student => {
          return <Student student={student} key={student.id} setNewTag={setNewTag} addTagStudent={addTagStudent}/>
      })}
    </div>
  )
}

export default Students
