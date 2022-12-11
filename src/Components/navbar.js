import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header>
      <div class='container container-flex'>
        <div class='logo'>
          <img src='/images/book-icon.png' />
          <div class='logo-title'>
            <h1>NoteBook</h1>
            <p>e-bookshelf</p>
          </div>
        </div>
        <nav>
          <ul>
            <CustomLink to='/'>HOME</CustomLink>
            <CustomLink to='/my-books'>MY BOOKS</CustomLink>
            <CustomLink to='/profile'>PROFILE</CustomLink>
            <CustomLink to='/Login'>LOGIN</CustomLink>
            <CustomLink to='/Register'>REGISTER</CustomLink>
          </ul>
        </nav>
      </div>
    </header>
  )
}

function CustomLink({ to, children }) {
  const path = window.location.pathname

  return (
    <li>
      <Link to={to}>{children}</Link>
    </li>
  )
}
