import React, { useState } from 'react'
import EmployeeInfo from './EmployeeInfo'
import EmployeeList from './EmployeeList'

const Container = ({ setSelectedEmpId, selectedEmpId, setSelectedEmpObj, selectedEmpObj, setEmployees, employees }) => {

    const selectEmp = (idVal) => {
        setSelectedEmpId(idVal)
        setSelectedEmpObj(() => {
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id == idVal) {
                    return employees[i]
                }
            }
        })
        console.log(selectedEmpObj)
    }
    const deleteEmp = (idVal) => {
        setEmployees(() => {
            const newEmps = []
            for (let i = 0; i < employees.length; i++) {
                if (employees[i].id != idVal) {
                    newEmps.push(employees[i])
                }
            }
            return newEmps
        })
    }
    return (
        <div className='container'>
            <EmployeeList deleteEmp={deleteEmp} employees={employees} selectedEmpId={selectedEmpId} selectEmp={selectEmp} />
            <EmployeeInfo selectedEmpObj={selectedEmpObj} />
        </div>
    )
}

export default Container
