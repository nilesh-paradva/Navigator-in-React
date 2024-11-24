import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Employee from './components/employeeform/Employee';
import Header from './components/header/Header';
import DataShow from './components/employeeform/datashow/DataShow';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Header />} />
          <Route path='/employeeform' element={<Employee />} />
          <Route path='/Datashow' element={<DataShow />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
