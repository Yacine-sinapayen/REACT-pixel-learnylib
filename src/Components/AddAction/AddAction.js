import React from 'react';

const AddAction = ({ CreateAction }) => {
  
const handleOnSubmit = (e) => {
  e.preventDefault();
  CreateAction( e.target.title.value, e.target.media.value, e.target.tags.value, e.target.target_url.value);
  e.target.title.value = '';
  e.target.media.value = '';
  e.target.tags.value = '';
  e.target.target_url.value = '';
}
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h2>Créer une nouvelle action marketing</h2>
        <input placeholder="Nom de l'action" name="title"/>
        <input placeholder="Média" name="media"/>
        <input placeholder="Mot clés" name="tags"/>
        <input placeholder="Url cible" name="target_url"/>
        <button onSubmit={handleOnSubmit}>Add</button>
      </form>
    </div>
  )
}
export default AddAction;
