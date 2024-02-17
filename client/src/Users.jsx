import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001')
            .then(result => setUsers(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/deleteUser/${id}`)
            .then(result => {
                console.log(result);
                // If you want to update the state after deletion, you can filter the users array
                setUsers(users.filter(user => user._id !== id));
            })
            .catch(err => console.log(err));
    }

    return (
        <div className='container vh-100 d-flex align-items-center justify-content-center'>
            <div className='w-75 bg-white rounded p-3'>
                <Link to='/create' className='btn btn-success mb-3'>Add +</Link>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            {/* <th>Email</th> */}
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Salary</th>
                            <th>Citizenship No</th>
                            {/* <th>Image</th> */}
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                {/* <td>{user.email}</td> */}
                                <td>{user.age}</td>
                                <td>{user.gender}</td>
                                <td>{user.salary}</td>
                                <td>{user.citizenshipNumber}</td>
                                {/* <td>
                                    <img src={user.imageURL} alt={user.name} style={{ width: '50px', height: '50px' }} />
                                </td> */}
                                <td>
                                    <Link to={`/update/${user._id}`} className='btn btn-success me-2'>Update</Link>
                                    <button className='btn btn-danger' onClick={() => handleDelete(user._id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Users;
