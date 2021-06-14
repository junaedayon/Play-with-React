
import { useState } from 'react';
import './App.css';

import AddUser from './components/User/AddUser'
import UserList from './components/User/UserList';

function App() {

  const [usersList , setUsersList] = useState([ ]);

  const addListHandler = (uName , uAge) => {

    setUsersList((prevLists) => {
      return [...prevLists , {name: uName , age:uAge , id: Math.floor(Math.random()).toString }]
    })

  }

  return (
    <div className="app">
    <AddUser onAddUser = {addListHandler}></AddUser>
    <UserList users={ usersList }></UserList>
    </div>
  );
}

export default App;
