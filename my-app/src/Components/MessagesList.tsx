import React from 'react';
import { FaTrash, FaCheck, FaCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { FiPlus } from "react-icons/fi";

type Message = {
    id: number;
    name: string;
    avatar: string;
    email: string;
    subject: string;
    received: string;
    read: boolean;
};

const MessagesList  = () => {
    const messages: Message[] = [
        { id: 1, name: 'Jan Nowak', avatar: 'https://picsum.photos/50?random=1', email: 'jan@example.com', subject: 'Meeting Reminder', received: '2024-05-25 14:30', read: true },
        { id: 2, name: 'Pawel Goryca', avatar: 'https://picsum.photos/50?random=2', email: 'pawel@example.com', subject: 'Project Update', received: '2024-05-24 09:15', read: false },
        { id: 3, name: 'Zbigniew Tatar', avatar: 'https://picsum.photos/50?random=3', email: 'zbigniew@example.com', subject: 'Lunch Plans', received: '2024-05-23 12:00', read: true },
        { id: 4, name: 'Adam Kowalski', avatar: 'https://picsum.photos/50?random=4', email: 'adam@example.com', subject: 'Weekly Report', received: '2024-05-22 10:45', read: false },
        { id: 5, name: 'Jan Kowalski', avatar: 'https://picsum.photos/50?random=5', email: 'jan@example.com', subject: 'New Assignment', received: '2024-05-21 15:30', read: true },
        { id: 6, name: 'Janusz Mucha', avatar: 'https://picsum.photos/50?random=6', email: 'janusz@example.com', subject: 'Conference Invitation', received: '2024-05-20 08:00', read: false }
    ];

    return (
        <div className="container-fluid px-4 py-2 border rounded mt-2 mb-2">
            <div className='text-start'>
                <h2 className="fs-4">Messages</h2>
                <button className='btn btn-dark text-white'><FiPlus /> Add message</button>
            </div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>From:</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Received</th>
                        <th>Read?</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {messages.map(message => (
                        <tr key={message.id}>
                            <td>
                                <div className="d-flex align-items-center">
                                    <img src={message.avatar} alt={`${message.name}'s avatar`} className="rounded-circle me-2" />
                                    <span>{message.name}</span>
                                </div>
                            </td>
                            <td>{message.email}</td>
                            <td>{message.subject}</td>
                            <td>{message.received}</td>
                            <td>
                                {message.read ? (
                                    <FaCheck color='green' />
                                ) : (
                                    <FaCircle color='red' />
                                )}
                            </td>
                            <td>
                                <button className='btn btn-danger p-1'><FaTrash /></button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default MessagesList;
