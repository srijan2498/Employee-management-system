import React from 'react'

const AddEmployeeModel = ({ closeModelContainer, addEmp }) => {
    return (
        <div className="modelOverlay">
            <div className='addEmpModel'>
                <button className="close" onClick={closeModelContainer}>❌</button>
                <div className="addInfo"><input type="text" placeholder='Image Url' name='imgUrl' /></div>
                <div className="addInfo"><input type="number" placeholder='Employee Id' name='empId' /></div>
                <div className="addInfo"><input type="text" placeholder='First Name' name='fname' /></div>
                <div className="addInfo"><input type="text" placeholder='Last Name' name='lName' /></div>
                <div className="addInfo"><input type="email" placeholder='Email Id' name='email' /></div>
                <div className="addInfo"><input type="number" placeholder='Mobile Number' name='mob' /></div>
                <div className="addInfo"><input type="number" max={70} min={18} placeholder="Age" /></div>
                <div className="addInfo"><input type="date" name='dob'/></div>
                <div className="addInfo"><input type="number" placeholder="Salary" name='salary' /></div>
                <div className="addInfo"><input type="text" placeholder='Address' name='address' /></div>
                <div className="addInfo"><button className='submit' onClick={addEmp}>Submit</button></div>
            </div>
        </div>
    )
}

export default AddEmployeeModel
