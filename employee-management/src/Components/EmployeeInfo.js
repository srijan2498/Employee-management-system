import React from 'react'

const EmployeeInfo = ({ selectedEmpObj }) => {
    return (
        <div className='emp-info'>
            <h3 className="heading">Info of ({selectedEmpObj.id})</h3>
            <div className="img" style={{ backgroundImage: `url(${selectedEmpObj.imageUrl})`}}></div>
            <div className="info">
                <h3>First Name: </h3>
                <p>{selectedEmpObj.firstName}</p>
            </div>
            <div className="info">
                <h3>Last Name: </h3>
                <p>{selectedEmpObj.lastName}</p>
            </div>
            <div className="info">
                <h3>Email: </h3>
                <p>{selectedEmpObj.email}</p>
            </div>
            <div className="info">
                <h3>Contact: </h3>
                <p>{selectedEmpObj.contactNumber}</p>
            </div>
            <div className="info">
                <h3>Age: </h3>
                <p>{selectedEmpObj.age}</p>
            </div>
            <div className="info">
                <h3>Dob: </h3>
                <p>{selectedEmpObj.dob}</p>
            </div>
            <div className="info">
                <h3>Salary: </h3>
                <p>{selectedEmpObj.salary}</p>
            </div>
            <div className="info">
                <h3>Address:</h3>
                <p>{selectedEmpObj.address}</p>
            </div>
        </div>
    )
}

export default EmployeeInfo
