import React, { ChangeEvent, useReducer, useState } from "react";
import { User } from "./interface";
import { userReducer } from "./reducer";

const initializeState = (initialNewUserName: string) => {
    console.log('Initialize');
    return { users: [], newUserName: initialNewUserName };
}

export const SuperComponent: React.FC = () => {
    const [{users, newUserName}, dispatch] = useReducer(userReducer, 'Carlos', initializeState);

    const handleAddUser = () => {
        dispatch({ type: 'add' });
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement> ) => {
        dispatch({ type: 'changeNewName', payload: event.currentTarget.value });
    }

    return (
        <div>
            <h1>Super Component</h1>
            <ul>
                {users.map(user => <li key={user.id}>{user.name}</li>)}
            </ul>
            <input value={newUserName} onChange={handleNameChange} />
            <button onClick={handleAddUser}>Add User</button>
        </div>
    );
}