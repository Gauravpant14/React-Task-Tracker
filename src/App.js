import Header from './component/Header'
import { useState } from 'react'
import Tasks from './component/Tasks'

function App() {
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
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
