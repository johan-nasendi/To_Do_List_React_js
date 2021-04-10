import {useState, useEffect} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import About from './components/About';
import Add from './components/Add';
import Footer from './components/Footer';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState (false)
  const [tasks, setTasks] = useState([])

  useEffect(() => {
     const dapatTasks = async  () => {
       const tasksDariServer = await ambilTasks()
       setTasks(tasksDariServer)
     }
    dapatTasks()

  }, [])

  // ambil Tasks
  const ambilTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // ambil Task
  const ambilTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

// tambah Task
const addTask = async (task) => {
  const res = await fetch('http://localhost:5000/tasks',
   {
     method : 'POST',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify(task),

   })

   const data = await res.json()

   setTasks([...tasks, data])


  // const id = Math.floor(Math.random() * 10000) + 1
  // const newTask = { id, ...task }
  // setTasks([...tasks, newTask])
}

// hapus Task
const deleteTask = async (id) => {
  await fetch(`http://localhost:5000/tasks/${id}`
  ,{
    method: 'DELETE',
  })

 setTasks(tasks.filter((task) => task.id !== id))
}

//  Toggle Reminder
const toggleReminder = async (id) => {
  const taskToToggle = await ambilTask(id)
  const updTask =  {...taskToToggle, reminder: !taskToToggle.reminders}

  const res = await fetch(`http://localhost:5000/tasks/${id}`,
   {
     method : 'PUT',
     headers: {
       'Content-type': 'application/json',
     },
     body: JSON.stringify(updTask),
   })

   const data = await res.json()

  setTasks (
    tasks.map((task) => 
    task.id === id ? 
    {...task, reminder: !data.reminder} 
    : task
    )
  )
}

  return (
    <Router>
    <div className="container">
     <Header  
     OnAdd={() => setShowAddTask 
     (!showAddTask)}
     showAdd={showAddTask} />
   
  <Route path='/' exact render={(props) =>
     (
      <>
      {showAddTask && <Add  OnAdd={addTask} 
    />}

    { tasks.length > 0 ? ( 
    <Tasks tasks={tasks} OnDelete={deleteTask}  OnToggle={toggleReminder}/>
     ) : (
      'Tidak ada daftar tugas '
    )}
      </>
    )} />

    <Route path='/about' component={About} />
    <Footer />
    </div>
    </Router>
    
  );
}

export default App;
