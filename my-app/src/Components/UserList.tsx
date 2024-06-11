import { color } from 'chart.js/helpers';
import React from 'react';
import { FaUser, FaPen, FaTrash, FaChevronLeft, FaChevronRight  } from 'react-icons/fa'; // Importujemy ikony z Font Awesome
import { FiPlus } from "react-icons/fi";
type User = {
  id: number;
  name: string;
  email: string;
  avatar: string;
  status: string;
};

const UsersList = () => {
  const users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', avatar: 'https://picsum.photos/50?random=1', status: 'active'},
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://picsum.photos/50?random=2', status: 'active'},
    { id: 3, name: 'Sam Johnson', email: 'sam@example.com', avatar: 'https://picsum.photos/50?random=3', status: 'inactive'},
    { id: 4, name: 'Czebany Jarnuch', email: 'john@example.com', avatar: 'https://picsum.photos/50?random=4', status: 'active'},
    { id: 5, name: 'Jane Smith', email: 'jane@example.com', avatar: 'https://picsum.photos/50?random=5', status: 'inactive'},
    { id: 6, name: 'Sam Johnson', email: 'sam@example.com', avatar: 'https://picsum.photos/50?random=6', status: 'inactive'},
    { id: 7, name: 'Emma Wilson', email: 'emma@example.com', avatar: 'https://picsum.photos/50?random=7', status: 'active'},
    { id: 8, name: 'James Brown', email: 'james@example.com', avatar: 'https://picsum.photos/50?random=8', status: 'inactive'},
    { id: 9, name: 'Olivia Miller', email: 'olivia@example.com', avatar: 'https://picsum.photos/50?random=9', status: 'active'}
  ];

  return (
    <div className="container-fluid px-4 py-2 border rounded">
      <div className='text-start'>
      <h2 className="fs-4 text-start">Users</h2>
      <button className='btn buttton bg-dark text-white mt-2 mb-2'><FiPlus />Add user</button>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Avatar</th>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td><img src={user.avatar} alt={`${user.name}'s avatar`} className="rounded-circle" /></td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                {user.status === 'active' ? (
                  <FaUser color='green' />
                ) : (
                  <FaUser color='red' />
                )}
              </td>
              <td>
                <span className='me-2'><FaPen /></span>
                <FaTrash />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default UsersList;