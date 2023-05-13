import React from 'react'

const EmployeeList = ({ employees, selectedEmpId, selectEmp, deleteEmp }) => {
    return (
        <div className='emp-list'>
            <h3 className="heading">List</h3>
            {employees.map((emp) => {
                return <div key={emp.id} className={`singleEmp ${selectedEmpId == emp.id ? "selected" : ""}`} onClick={() => selectEmp(emp.id)} id={emp.id}>{emp.firstName} {emp.lastName} <button className="delete" onClick={() => deleteEmp(emp.id)}>❌</button></div>
            })}
        </div>
    )
}

export default EmployeeList
