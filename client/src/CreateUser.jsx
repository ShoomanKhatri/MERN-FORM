import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [salary, setSalary] = useState('');
    const [citizenshipNumber, setCitizenshipNumber] = useState('');
    // const [citizenshipPic, setCitizenshipPic] = useState(null); // Commented out for now, enable if needed
    const navigate = useNavigate();

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Uncomment below line if citizenshipPic needs to be sent to the server
        // const formData = new FormData();
        // formData.append('citizenshipPic', citizenshipPic);

        axios.post("http://localhost:3001/createUser", { name, age, gender, salary, citizenshipNumber })
            .then(result => {
                console.log(result)
                navigate('/')
            })
            .catch(err => {
                console.error(err); // Log any errors
                // Handle error
            })
    };

    const handleClear = () => {
        // Clear input fields
        setName('');
        setAge('');
        setGender('');
        setSalary('');
        setCitizenshipNumber('');
        // setCitizenshipPic(null); // Commented out for now, enable if needed
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center ">
                <div className="col-md-6 ">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="text-center text-success">Profile</h3>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name:</label>
                                    <input
                                        id="name"
                                        className="form-control"
                                        type="text"
                                        placeholder="Name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="age" className="form-label">Age:</label>
                                    <input
                                        id="age"
                                        className="form-control"
                                        type="number"
                                        placeholder="Age"
                                        value={age}
                                        onChange={(e) => setAge(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label d-block">Gender:</label>
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="form-check form-check-inline">
                                            <input
                                                id="male"
                                                className="form-check-input"
                                                type="radio"
                                                value="male"
                                                checked={gender === 'male'}
                                                onChange={handleGenderChange}
                                            />
                                            <label className="form-check-label" htmlFor="male">Male</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                id="female"
                                                className="form-check-input"
                                                type="radio"
                                                value="female"
                                                checked={gender === 'female'}
                                                onChange={handleGenderChange}
                                            />
                                            <label className="form-check-label" htmlFor="female">Female</label>
                                        </div>
                                        <div className="form-check form-check-inline">
                                            <input
                                                id="other"
                                                className="form-check-input"
                                                type="radio"
                                                value="other"
                                                checked={gender === 'other'}
                                                onChange={handleGenderChange}
                                            />
                                            <label className="form-check-label" htmlFor="other">Other</label>
                                        </div>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="salary" className="form-label">Salary:</label>
                                    <input
                                        id="salary"
                                        className="form-control"
                                        type="text"
                                        placeholder="Salary"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="citizenshipNumber" className="form-label">Citizenship Number:</label>
                                    <input
                                        id="citizenshipNumber"
                                        className="form-control"
                                        type="text"
                                        placeholder="Citizenship Number"
                                        value={citizenshipNumber}
                                        onChange={(e) => setCitizenshipNumber(e.target.value)}
                                    />
                                </div>
                                {/* Uncomment below section if citizenshipPic needs to be uploaded
                                <div className="mb-3">
                                    <label htmlFor="citizenshipPic" className="form-label">Upload Citizenship Pic:</label>
                                    <input
                                        id="citizenshipPic"
                                        className="form-control"
                                        type="file"
                                        onChange={(e) => setCitizenshipPic(e.target.files[0])}
                                    />
                                    <span className="text-muted">Upload in jpeg format.</span>
                                </div> */}
                                <div className="d-flex justify-content-between">
                                    <button
                                        className="btn btn-danger"
                                        type="button"
                                        onClick={handleClear}
                                    >
                                        Clear
                                    </button>
                                    <button
                                        className="btn btn-primary"
                                        type="submit"
                                    >
                                        Confirm
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateUser;
