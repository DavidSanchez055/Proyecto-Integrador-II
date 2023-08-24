import './App.css'
import  {Routes, Route} from 'react-router-dom';
import Login from './Pages/login';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Login' element={<Login />}/>
    </Routes>
  )
}

export default App
