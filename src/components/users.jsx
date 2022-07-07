import React, { useState } from "react";
import api from '../api';

const Users = () => {
    const [users, setUsers] = useState(api.users.fetchAll());

    const handleDelete = (userId) => {
        setUsers(users.filter(user => user._id !== userId));
    }

    const renderPhrase = (number) => {
        let message = 'Никто с тобой не тусанёт';
        let classname = 'danger';

        if (number !== 0) {
            const template = 'с тобой сегодня';
            message = number >= 2 && number <= 4
                ? number.toString() + ' человека тусанут ' + template
                : number.toString() + ' человек тусанёт ' + template;

            classname = 'primary';
        }

        return <h3>
            <span className={`badge bg-${classname}`}>
                {message}
            </span>
        </h3>
    }

    return <>
        {renderPhrase(users.length)}
        {users.length !== 0 && <table className="table">
            <thead>
                <tr>
                    <th scope="col">Имя</th>
                    <th scope="col">Качества</th>
                    <th scope="col">Профессия</th>
                    <th scope="col">Встретился, раз</th>
                    <th scope="col">Оценка</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.qualities.map(quality => <span
                        className={`badge bg-${quality.color} m-1`}
                        key={quality._id}>
                        {quality.name}
                    </span>)}
                    </td>
                    <td>{user.profession.name}</td>
                    <td>{user.completedMeetings}</td>
                    <td>{user.rate}/5</td>
                    <td><button
                        onClick={() => handleDelete(user._id)}
                        className='btn btn-danger border-0'>
                        Delete
                    </button></td>
                </tr>)}
            </tbody>
        </table>}
    </>
};

export default Users;