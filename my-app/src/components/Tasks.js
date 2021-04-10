import Task from "./Task"


const Tasks = ({ tasks, OnDelete, OnToggle }) =>  {
    return (
        <>
            {tasks.map((task, index) => (
                <Task key={index}  task= {task} 
                OnDelete={OnDelete}
                OnToggle={OnToggle} />
            ))}
        </>
    )
}


export default Tasks

