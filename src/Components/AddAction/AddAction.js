import React from 'react';

const AddAction = ({ onAdd }) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    onAdd(e.target.name.value, e.target.email.value);
    e.target.name.value = '';
    e.target.email.value = '';
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h2>New user</h2>
        <input placeholder="name" name="name" />
        <input placeholder="email" name="email" />
        <button onSubmit={handleOnSubmit}>Add</button>
      </form>
    </div>
  )
}
export default AddAction;
