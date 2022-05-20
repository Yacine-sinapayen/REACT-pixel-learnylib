import Navbar from './Components/Navbar/Navbar';
import Action from './Components/Action/Action';
import AddAction from './Components/AddAction/AddAction';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [actions, setActions] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);


  // Récupéartion de toues les actions
  const getUsers = async () => {
    await fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => setActions(data))
      .catch((err) => {
        console.log(err);
      })
  };
  console.log(actions)

  // Ajout d'une action
  const onAdd = async (id, name, email) => {
    await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify({
        id: uuidv4(),
        name: name,
        email: email
      }),
      headers: {
        "Content-type": "application/json; charset=UTF+8",
      }
    })
      .then((res) => {
        if (res.status !== 201) {
          return
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setActions((actions) => [...actions, data]);
      })
      .catch((err) => {
        console.log(err);
      })
  };

  // Delete
  const onDelete = async (id) => {
    await fetch('https://squedio.com/marketing/api/v1/actions/{id}', {
      method: 'DELETE'
    })
      .then((res) => {
        if (res.status !== 200) {
          return
        } else {
          setActions(actions.filter((actions) => {
            return actions.id !== id;
          }))
        }
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <>
      <Navbar />
      <AddAction onAdd={onAdd}    
      actions={actions}
              setActions={setActions}/>
      <div>
        {
          actions.map((actions, id) => (
            <Action
              key={id}
              actions={actions}
              setActions={setActions}
              name={actions.name}
              email={actions.email}

              onDelete={onDelete} />
          ))
        }
      </div>
    </>
  );
}

export default App;
