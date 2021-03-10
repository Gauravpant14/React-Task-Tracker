import PropTypes from 'prop-types' // impt shortcut
import Button from './Button'


const Header = ({  title}) => {
    const onClick = () => {
        console.log("clicked")
    }

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color='green' text='Submit' clickKrLo=
             {onClick}/>
            
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.prototypes = {
    title: PropTypes.string.isRequired,
}


//using css in other way 
// const headingStyle = {
//     color: 'red', backgroundColor: 'blue'
// }

export default Header
