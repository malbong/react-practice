import React, { useState } from 'react';

import './index.css';
import AddUser from './components/AddUser';
import UserList from './components/UserList';

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    const newUser = {
      name: uName,
      age: +uAge,
      id: Math.random().toString(),
    };

    setUserList((prevList) => [...prevList, newUser]);
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
