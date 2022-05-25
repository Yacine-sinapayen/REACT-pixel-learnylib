import Navbar from './Components/Navbar/Navbar';
import Action from './Components/Action/Action';
import AddAction from './Components/AddAction/AddAction';
import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment'
// import { Routes, Route } from 'react-router-dom';

function App() {

  const [actions, setActions] = useState([]);

  useEffect(() => {
    getActions()
  }, []);

  // Récupéartion de toues les actions
  const getActions = async () => {
    await fetch('https://squedio.com/marketing/api/v1/actions')
      .then((res) => res.json())
      .then((data) => setActions(data))
      .catch((err) => {
        console.log(err);
      })
  };

  // Ajout d'une action
  const CreateAction = async (title, media, tags, target_url, shipments) => {
    await fetch(`https://squedio.com/marketing/api/v1/actions`, {
      method: 'POST',
      body: JSON.stringify({
        id : uuidv4(),
        title: title,
        media: media,
        tags: tags,
        target_url: target_url,
        shipments: shipments,
        created_at: moment().format('YYYY-MM-DD HH:mm:ss'),
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

  // Supression
  const DeleteAction = async (id) => {
    
    let copy = [...actions]
    copy = copy.filter(action => action.id !== id)
    setActions(copy);

    await fetch(`https://squedio.com/marketing/api/v1/actions/${id}`, {
      method: 'DELETE'
    })
    .then((res) => {
     console.log(res)
    })
    .catch((err) => {
      console.log(err);
    })
  }

  const editAction = async (id) => {
    await fetch(`https://squedio.com/marketing/api/v1/actions/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ title:''})
    })  
  }

  return (
    <>
      <Navbar />
      <AddAction CreateAction={CreateAction} />
      <Action actions={actions} setActions={setActions} DeleteAction={DeleteAction}/>
    </>
  );
}

export default App;
