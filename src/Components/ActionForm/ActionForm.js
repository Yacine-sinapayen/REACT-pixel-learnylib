import React from "react";
import moment from "moment";
import { v4 as uuid } from "uuid";
import "./ActionForm.scss";

// action={form} est = au contenu du state form
const ActionForm = ({ action, onClose, onSubmit }) => {
  // Je gère le POST et le PUT dans une seule est même fonction
  // Si add = {} alors POST
  // Si add = {objet plein} alors PUT
  const add = Object.keys(action).length === 0;

  // Gère le POST et le PUT d'une newAction après la soumission du formulaire.
  const handleSubmit = (e) => {
    e.preventDefault();
    // Si add = true alors POST sinon PUT en lui assignant le tableau de user à modifier.
    let newAction = add ? {} : { ...action };

    // Dans le cas d'un ajout on affecte un nouvel id et une date de création.
    if (add) {
      newAction.id = uuid();
      newAction.created_at = moment().format("YYYY-MM-DD HH:mm:ss");
    }

    // Que ce soit dans le cas d'un POST ou PUT je veux récupérer les valeurs saisies/modifiées par mon utilisateur du coup je vais maper dessus et stock les valeurs dans un tableau.
    ["title","emailFormateur", "media", "tags", "target_url", "shipments"].map(
      (k) => {
        newAction[k] = e.target[k].value;
        return true;
      }
    );
    // onSubmit est une fonction que je récupère via mes props depuis le composant parent Actions
    return onSubmit(newAction);
  };

  return (
    <div className="fcontainer p-5 h90vh flex center-content mrg-auto w75p gap40">
      <form className="flex gap10 center column " onSubmit={handleSubmit}>
        <h1 className="dark">Créer une nouvelle action marketing</h1>
        <input
          type="text"
          maxLength="200"
          required={true}
          placeholder="Nom de l'action"
          name="title"
          defaultValue={action.title}
        />
        {/* insertion new champ email */}
        <input
          type="email"
          maxLength="200"
          required={false}
          placeholder="Adresse email du compte LearnyLib"
          name="emailFormateur"
          defaultValue={action.emailFormateur}
        />
        <input
          type="text"
          maxLength="200"
          required={true}
          placeholder="Média"
          name="media"
          defaultValue={action.media}
        />
        <input
          type="text"
          maxLength="200"
          placeholder="Mot clés"
          name="tags"
          defaultValue={action.tags}
        />
        <input
          type="text"
          maxLength="200"
          required={true}
          placeholder="Url cible"
          name="target_url"
          defaultValue={action.target_url}
        />

        <input
          type="number"
          min="0"
          step="1"
          /* step permet d'incrémenter de 1 en 1, pas de nb à vrigule */
          required={true}
          placeholder="Nb d'envois"
          name="shipments"
          defaultValue={action.shipments}
        />

        <div className="btn-container flex row gap20 center">
          <button className="btn w120 center" onSubmit={handleSubmit}>
            {add ? "Ajouter" : "Modifier"}
          </button>
          {/* onClose est une fonction que je récupère via mes props depuis le composant parent Actions */}
          <button className="btn w120 center" onClick={() => onClose()}>
            Fermer
          </button>
        </div>
      </form>
    </div>
  );
};

export default ActionForm;
