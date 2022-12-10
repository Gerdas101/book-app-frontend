import Navbar from './Components/navbar'
import Home from './Pages/home'
import MyBooks from './Pages/my-books'
import Books from './Pages/search-books'
import Profile from './Pages/profile'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />
      <div class='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/my-books' element={<MyBooks />} />
          <Route path='/books' element={<Books />} />
        </Routes>
      </div>
    </>
  )
}

export default App
