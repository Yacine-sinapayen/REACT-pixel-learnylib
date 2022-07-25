import React, { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Outlet, Navigate } from "react-router-dom";
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default function Home() {

const {currentUser} = useContext(UserContext);
console.log("PRIVATEE", currentUser);

if(!currentUser){
  return <Navigate to="/"/>
}

  return (
    <div className='container flex middle' style={{ height:"90vh" }}>
    <SignUpForm />
      {/* Outlet permet de définir le lieu où je veux renvoyer ma route imbriquée "actions" 
      une fois le user connecté */}
      {currentUser && (
        <Outlet />
      )}
    </div>
  )
};
