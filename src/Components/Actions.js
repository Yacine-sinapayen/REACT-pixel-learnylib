import { useEffect, useState } from "react";
import "./Action.css";
import ActionForm from "./ActionForm";
import { DeleteAction, CreateAction, EditAction } from "../api/ActionApi";
import moment from "moment";
import { v4 as uuid } from "uuid";

const Actions = (props) => {
  const [actions, setActions] = useState([]);
  const [form, setForm] = useState(false);

  //GET :  Récupéartion de toutes les actions
  // Ça n'est plus une bonne pratqiue de fetch dans un useEffect
  // Il faudrait utiliser react query par exemple. Ça permet d'executer des fontionc async dans du code react
  useEffect(() => {
    fetch("https://squedio.com/marketing/api/v1/actions")
      .then((res) => res.json())
      .then((data) => setActions(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Met à jour la table
  const handleSubmit = async (newAction, shouldAdd) => {
    // console.log(shouldAdd);
    // console.log(form);
    // let copy = [...actions];

    if (shouldAdd) {
      CreateAction({
        ...newAction,
        id: uuid(),
        created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      }).then((createdAction) =>
        setActions((currentActions) => [...currentActions, createdAction])
      );
      // équivaut à :
      // const createdAction = await CreateAction({
      //   ...newAction,
      //   id: uuid(),
      //   created_at: moment().format("YYYY-MM-DD HH:mm:ss"),
      // });
      //   if (createdAction) {
      // currentActions est un params qui est = à la version la plyus à jours de actions.
      // En passant une fonction à mon setActions il v aprendre la valeur la valeur la plus récente d'Actions, ça évite une valeur pas à jour d'Action.
      //  équivaut à fait un copy.
      //  on passe à setAction une fonction à utiliser sur la valeur la plus à jour du state #faellebigboss
      //     setActions((currentActions) => [...currentActions, createdAction]);
      //   }
      // TODO: gestion d'erreurs
    } else {
      // J'attends la valeur de retour action
      const updatedAction = await EditAction(newAction);
      if (updatedAction) {
        setActions((currentActions) =>
          currentActions.map((action) => {
            // On va seulement modifier un élement dans notre map. Ça me renvoi un new array avec l'élément qui a étét modifié.
            if (action.id === updatedAction.id) {
              action.title = updatedAction.title;
              action.media = updatedAction.media;
              action.tags = updatedAction.tags;
              action.target_url = updatedAction.target_url;
              action.shipments = updatedAction.shipments;
            }
            return action;
          })
        );
      }
    }
    return setForm(false);
  };

  return (
    <>
      <button onClick={() => setForm({})}>Ajouter</button>

      {form ? (
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
                  <button onClick={() => DeleteAction(a.id)}>delete</button>
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
