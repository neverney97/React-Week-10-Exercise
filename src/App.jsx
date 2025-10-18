import React, { useState } from 'react'
import Form from './components/form'
import List from './components/userList'
import useMessagesStore from './store/messagesStore';


const App = () => {

    const { addNewMessage, messages } = useMessagesStore();

  const [users, setUsers] = useState([]);

  console.log(users);

  // const addNewUser = (newUser) => {
  //   setUsers([...users, newUser]);
  // };

  // const editUser = (userId, newDetails) => {
  //   const updatedUsers = users.map(user => {
  //     if (user.id === userId) {
  //       return { ...user, ...newDetails };
  //     } else {
  //       return user;
  //     }
  //   });
  //   setUsers(updatedUsers);
  // };

  // const deleteUser = (userId) => {
  //   let filteredArray = users.filter((user) => {
  //     if (user.id !== userId ){
  //       return user;
  //     }
  //   })
  //   setUsers(filteredArray);
  // }

  return (
    <div className='grid grid-cols-2 gap-4 p-4'>
      <Form addUser={addNewMessage} />
      <List usersList={messages}/>
    </div>
  )
}

export default App
