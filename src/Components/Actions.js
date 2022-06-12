import { useEffect, useState } from "react";
import { CreateAction, EditAction, DeleteAction } from "../ActionApi/ActionApi";
import "./Action.css";
import ActionForm from "./ActionForm";
import { DeleteAction, CreateAction, EditAction } from "../api/ActionApi";
import moment from "moment";
import { v4 as uuid } from "uuid";

const Actions = (props) => {
  const [actions, setActions] = useState([]);
  // Cette var correspond aux données que l'on envoies au formulaire
  // Si form = false on masque le formulaire
  // Si form = {} (objet vide) on va créer une nouvelle action
  // Si form = {objet plein} in va modifier une action
  const [form, setForm] = useState(false);

  useEffect(() => {
    // Récupéartion de toues les actions
    fetch("https://squedio.com/marketing/api/v1/actions")
      .then((res) => res.json())
      .then((data) => setActions(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //PUT
  const handleSubmit = (newAction) => {
    // On verifie si on est en mode ajout ou modification
    const add = Object.keys(form).length === 0;
    const oldActions = [...actions];
    let copy = [...actions];

    // Si on est dans le cas d'une modification, on retire l'ancienne version de l'action du tableau.
    if (!add) {
      EditAction(newAction);
      copy = copy.filter((a) => a.id !== newAction.id);
      // ToDo: Gérer l'erreur de modifcation d'une action
    } else {
      CreateAction(newAction).catch((err) => {
        setActions(oldActions);
        alert("Erreur lors de la création de l'action");
        // TODO Faire un toast (à la place du alert) petit msg d'erreur qui apparait en bas de l'écran et qui disparaît après un certain temps. 
      });
    }
    copy.push(newAction);
    setActions(copy);

    // Pour masquer le formulaire on passe les données du formulaire à false
    return setForm(false);
  };

  return (
    <>
      {/* L'objet de setForm correspond aux données que l'on envoies au formulaire */}
      <button onClick={() => setForm({})}>Ajouter</button>

      {form ? (
        /* Si l'objet que l'on passe dans action est vide alors ça sera un formulaire d'ajout sinon ça sera un formulaire de modfification */
        <ActionForm
          action={form}
          onClose={() => setForm(false)}
          onSubmit={(a) => handleSubmit(a)}
        />
      ) : (
        <table className="tableau-style">
          <thead>
            <tr>
              <th>Nom de l'action ok</th>
              <th>Média ok</th>
              <th>Mots clés ok</th>
              <th>Url Cible</th>
              <th>Nbs d'envois ok</th>
              <th>Clic</th>
              <th>Url de tracking</th>
              <th>Compte créés</th>
              <th>Inscriptions</th>
              <th>Valeur générée</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {actions.map((a) => (
              <tr key={a.id}>
                <td>{a.title}</td>
                <td> {a.media}</td>
                <td> {a.tags}</td>
                <td>
                  <a href="{target_url}">{a.target_url}</a>
                </td>
                <td>{a.shipments}</td>
                <td>{a.clicks}</td>
                <td>https://formations.learnylib.com/st/{a.id}</td>
                <td>{a.new_accounts}</td>
                <td>{a.enrollments}</td>
                <td>{a.value}</td>
                <td>
                  <button>delete</button>
                  {/* Les données qu'il y a dans setForm correspondent à l'action. */}
                  <button onClick={() => setForm(a)}>edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Actions;
