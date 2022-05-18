import Navbar from './Components/Navbar/Navbar';
import Action from './Components/Action/Action';
import AddAction from './Pages/AddAction/AddAction';
import { Routes, Route } from 'react-router-dom';

function App() {


  // Ajout d'un utilisateur
  // const onAdd = async (name, email) => {
  //   await fetch('https://jsonplaceholder.typicode.com/users', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       name: name,
  //       email: email
  //     }),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF+8",
  //     }
  //   })
  //     .then((res) => {
  //       if (res.status !== 201) {
  //         return
  //       } else {
  //         return res.json();
  //       }
  //     })
  //     .then((data) => {
  //       setUsers((users) => [...users], data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }

  return (
    <>
      <Navbar />

      <Routes>
        <Route path='/' element={<Action />} />
        <Route path='/nouvelle-action' element={<AddAction />} />
      </Routes>
    </>
  );
}

export default App;
