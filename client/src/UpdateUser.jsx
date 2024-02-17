import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function UpdateUser() {
  const { id } = useParams();
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [salary, setSalary] = useState('');
  const [citizenshipNumber, setCitizenshipNumber] = useState('');
  // const [image, setImage] = useState(null); // Commented out for now, enable if needed
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/getUser/${id}`)
      .then(result => {
        const userData = result.data;
        setName(userData.name);
        setAge(userData.age);
        setGender(userData.gender);
        setSalary(userData.salary);
        setCitizenshipNumber(userData.citizenshipNumber);
        // setImage(userData.image); // Uncomment if needed
      })
      .catch(err => console.log(err));
  }, [id]);

  // const handleImageChange = (e) => {
  //   setImage(e.target.files[0]);
  // };

  const Update = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3001/updateUser/${id}`, { name, age, gender, salary, citizenshipNumber })
      .then(result => {
        console.log(result);
        navigate('/');
      })
      .catch(err => {
        console.log(err);
      });
  };


  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <form onSubmit={Update}>
          <h2>Update User</h2>
          <div className='mb-2'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              id='name'
              placeholder='Enter Name'
              className='form-control'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='age'>Age</label>
            <input
              type='text'
              id='age'
              placeholder='Enter Age'
              className='form-control'
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='gender'>Gender</label>
            <select
              id='gender'
              className='form-control'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
          </div>

          <div className='mb-2'>
            <label htmlFor='salary'>Salary</label>
            <input
              type='text'
              id='salary'
              placeholder='Enter Salary'
              className='form-control'
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>

          <div className='mb-2'>
            <label htmlFor='citizenshipNumber'>Citizenship Number</label>
            <input
              type='text'
              id='citizenshipNumber'
              placeholder='Enter Citizenship Number'
              className='form-control'
              value={citizenshipNumber}
              onChange={(e) => setCitizenshipNumber(e.target.value)}
            />
          </div>

          {/* Uncomment if image field is needed
          <div className='mb-2'>
            <label htmlFor='image'>Image</label>
            <input
              type='file'
              id='image'
              className='form-control'
              onChange={handleImageChange}
            />
          </div>
          */}

          <button type='submit' className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  );
}

export default UpdateUser;
