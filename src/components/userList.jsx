import React from 'react'
import Item from './item'
import useMessagesStore from '../store/messagesStore';

const List = () => {
  // Access messages from the global store
  const messages = useMessagesStore((state) => state.messages);


  return (
    <div>
        <h1 className='text-3xl font-semibold text-slate-800 text-center mb-6'>UserList</h1>
        {messages.map((msg) => (
            <Item key={msg.id} msg={msg}/>
        )
        )}
    </div>
  )
}

export default List