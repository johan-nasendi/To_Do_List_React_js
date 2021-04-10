import PropTypes from 'prop-types'
import { useLocation} from 'react-router-dom'
import Button from './Button'

const Header = ({title, OnAdd, showAdd}) => {
    const lokasi = useLocation()
    return (
        <header className='header'>
            <h1> {title} </h1>
           {lokasi.pathname === '/' && ( <Button
             color={showAdd ? '#A4101F ' : 'green'}
             text={showAdd ? 'X' : 'Tambah'}
             onClick={OnAdd}/> ) }
        </header>
    )
}

Header.defaultProps = {
    title : ' Daftar Tugas Saya ',
}

Header.prototype ={
    title: PropTypes.string.isRequired,
}

export default Header
