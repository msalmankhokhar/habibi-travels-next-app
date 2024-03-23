import NavBar from './NavBar'

export default function HeaderSmall({title}) {
  return (
    <header id="headerSmall">
        <NavBar/>
        <span className='pageTitle'>{title}</span>
    </header>
  )
}