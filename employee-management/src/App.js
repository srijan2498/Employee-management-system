import { useState } from 'react';
import './App.css';
import EmployeeData from './Components/data'
import AddEmployeeModel from './Components/AddEmployeeModel';
import Container from './Components/Container';
import Navbar from './Components/Navbar';

function App() {
  const [employees, setEmployees] = useState(EmployeeData)
  const [selectedEmpObj, setSelectedEmpObj] = useState(employees[0])
  const [selectedEmpId, setSelectedEmpId] = useState(employees[0].id)
  const [openModel, setOpenModel] = useState(false)
  const openModelContainer = () => {
    setOpenModel(true)
  }
  const closeModelContainer = () => {
    setOpenModel(false)
  }
  const addEmp = () => {
    const newEmpObj = {}
      setEmployees(() => {
        newEmpObj.imageUrl = document.querySelector("input[name=imgUrl]").value
        newEmpObj.id = document.querySelector("input[name=empId]").value
        newEmpObj.firstName = document.querySelector("input[name=fname]").value
        newEmpObj.lastName = document.querySelector("input[name=lname]").value
        newEmpObj.email = document.querySelector("input[name=email]").value
        newEmpObj.contactNumber = document.querySelector("input[name=mob]").value
        newEmpObj.age = document.querySelector("input[name=age]").value
        newEmpObj.dob = document.querySelector("input[name=dob]").value
        newEmpObj.salary = document.querySelector("input[name=salary]").value
        newEmpObj.address = document.querySelector("input[name=address]").value

        return [...employees, newEmpObj]
      })
      document.querySelector("input[name=imgUrl]").value = ""
      document.querySelector("input[name=empId]").value = ""
      document.querySelector("input[name=fname]").value = ""
      document.querySelector("input[name=lname]").value = ""
      document.querySelector("input[name=email]").value = ""
      document.querySelector("input[name=mob]").value = ""
      document.querySelector("input[name=age]").value = ""
      document.querySelector("input[name=dob]").value = ""
      document.querySelector("input[name=salary]").value = ""
      document.querySelector("input[name=address]").value = ""
  }
  return (
    <div className="App">
      <Navbar openModelContainer={openModelContainer} />
      <Container employees={employees} setEmployees={setEmployees} selectedEmpObj={selectedEmpObj} setSelectedEmpObj={setSelectedEmpObj} selectedEmpId={selectedEmpId} setSelectedEmpId={setSelectedEmpId} />
      {openModel ? <AddEmployeeModel closeModelContainer={closeModelContainer} addEmp={addEmp} /> : ""}
    </div>
  );
}

export default App;
