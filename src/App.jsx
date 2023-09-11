import './App.css'
import  {Routes, Route} from 'react-router-dom';
import Login from './Pages/login';
import { Dashboard } from './Pages/Dashboard';
import SignUp from './Pages/SignUp';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Login />}/>
      <Route path='/Login' element={<Login />}/>
      <Route path='/Dashboard' element={<Dashboard />}/>
      <Route path='/SignUp' element={<SignUp />}/>
    </Routes>
  )
}

export default App
