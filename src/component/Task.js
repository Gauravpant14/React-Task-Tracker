const tasks = [
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
]

//Here we have used Key keyword and have assigned id to that key, because each list should have a unique key otherwise it'll give error.

const Task = () => {
    return (
        <>
          {tasks.map((task) => (
              <h3 key={task.id}>{task.text}</h3> 
              
          ))}  
        </>
    )
}

export default Task
