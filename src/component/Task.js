import { useState } from 'react'

const Tasks = () => {
    const [ tasks, setTasks] = useState([
        {
            id:1,
            text:'DOC APPOt',
            day:'feb 5th',
            reminder : true,
        },
        {
            id:2,
            text:'App APPOt',
            day:'feb 6th',
            reminder : true,
        },
        {
            id:3,
            text:'Meeting APPOt',
            day:'feb 7th',
            reminder : true,
        }
    ])

    return (
        <>
          {tasks.map((task) => (
              <h3 key={task.id}>{task.text}</h3> 
              
          ))}  
        </>
    )
}

export default Tasks
