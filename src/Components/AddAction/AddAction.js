import React from 'react';

const AddAction = ({ CreateAction }) => {

  const handleOnSubmit = (e) => {
    e.preventDefault();
    CreateAction(
      e.target.title.value,
      e.target.media.value,
      e.target.tags.value,
      e.target.target_url.value
    );
    e.target.title.value = '';
    e.target.media.value = '';
    e.target.tags.value = '';
    e.target.target_url.value = '';
  }
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <h2>Créer une nouvelle action marketing</h2>
        <input type='text' maxLength='200' required={true} placeholder="Nom de l'action" name="title" />
        <input type='text' maxLength='200' required={true} placeholder="Média" name="media" />
        <input type='text' maxLength='200' placeholder="Mot clés" name="tags" />
        <input type='text' maxLength='200' required={true} placeholder="Url cible" name="target_url" />
        <input type='number' min='0' step='1' required={true} placeholder="Nb d'envois" name="shipments" />
        {/* step permet d'incrémenter de 1 en 1, pas de nb à vrigule */}
        <button onSubmit={handleOnSubmit}>Add</button>
      </form>
    </div>
  )
}
export default AddAction;
