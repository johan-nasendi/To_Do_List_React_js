import { FaTimes } from 'react-icons/fa'

const Task =  ( { task, OnDelete, OnToggle } ) => {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}`}  onDoubleClick={() => OnToggle(task.id)}>

            <h3> {task.text}{''}
            <FaTimes style={{ color: 'red', cursor: 'pointer'}} 
            onClick={() => OnDelete(task.id)} /> 
            </h3>
            <p> {task.day} </p>

        </div>
    )
}

export default Task
