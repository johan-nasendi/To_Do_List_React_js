import {useState} from 'react'

const Add = ({ OnAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
    
    const OnSubmit = (e) => {
        e.preventDefault()

        if(!text){
            alert('Silakan Tambah Daftar Tugas')
            return
        }
         OnAdd({ text, day, reminder})

         setText('')
         setDay('')
         setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={OnSubmit}>
            <div className='form-control'>
                <label> Nama Tugas </label>
                <input type="text" placeholder='Enter...' 
                value={text}
                onChange={(e) => setText(e.target.value)} />
            </div>
            <div className='form-control'>
                <label> Waktu & Hari </label>
                <input type="text" placeholder='Enter...'
                value={day}
                onChange={(e) => setDay(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label> setel pengingat </label>
                <input type="checkbox" 
                value={reminder}
                checked={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>
            <input type="submit" value='Simpan' className='btn btn-block'/>
        </form >
    )
}

export default Add
