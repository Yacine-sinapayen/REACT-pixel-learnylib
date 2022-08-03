import React, { useEffect, useState } from "react";
import { CreateAction, EditAction, DeleteAction } from "../../../api/ActionApi";
import "./PrivateAction.scss";
import trash from "../../../Assets/trash.png";
import pen from "../../../Assets/pen.png";
import ActionForm from "../../../components/ActionForm/ActionForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Actions = () => {
  const [actions, setActions] = useState([]);

  // form correspond aux données envoyées par le formulaire, 3 cas :
  // Si form = false alors le formulaire n'est pas visible
  // Si form = {} alors nous sommes dans un POST
  // Si form = {objet plein} alors nous sommes dans un PUT
  const [form, setForm] = useState(false);

  // Gestion des erreurs de l'API avec Taostify
  const displayCreateError = () =>
    toast.error("Erreur lors de la création de l'action");
  const diplayEditError = () =>
    toast.error("Erreur lors de la modification de l'action");
  const displayDeleteError = () =>
    toast.error("Erreur lors de la suppression de l'action");

  // GET
  useEffect(() => {
    // Récupération de toutes les actions
    fetch("https://squedio.com/marketing/api/v1/actions")
      .then((res) => res.json())
      .then((data) => setActions(data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //PUT and POST
  const handleSubmit = (newAction) => {
    // Même principe qu'avec action côté formulaire, j'initie add à un objet vide
    // Si add = {} alors POST
    // Si add = {objet plein} alors PUT
    const add = Object.keys(form).length === 0;

    // J'intencie une const qui récupère "l'ancienne plus rescente" version de mon tableau d'actions
    const oldActions = [...actions];

    // copie du state
    let copy = [...actions];

    if (!add) {
      // Dans le cas d'un PUT, copy.filter me renvoie un tableau d'actions ayant un id strictement différent de l'action que je suis en train de modifier.
      copy = copy.filter((a) => a.id !== newAction.id);

      // Je met à jour mon api avec l'action modifiée
      EditAction(newAction).catch((err) => {
        // Gestion de l'erreur
        diplayEditError();
      });
    } else {
      // Dans le cas d'un POST je mets à jour mon api
      CreateAction(newAction).catch((err) => {
        //  En cas d'erreur je renvoie l'ancienne version du tableau d'action
        setActions(oldActions);

        // Et j'affiche un msg d'erreur
        displayCreateError();
      });
    }

    // J'envoie dans la "copy" de mon tableau d'action la newAction
    copy.push(newAction);

    // Et je mets à jour mon state avec le tableau "copy" qui contient la newAction
    setActions(copy);

    // Puis je masque le formulaire en passant son state à false
    return setForm(false);
  };

  // DELETE
  const handleDelete = (id) => {
    // Confirmer la supression
    let ok = window.confirm(
      "Êtes-vous sûr de vouloir supprimer cette action ?"
    );

    if (ok) {
      const oldActions = [...actions];

      DeleteAction(id).catch((err) => {
        displayDeleteError();
        // Si l'api nous renvoie une erreur on remet l'ancien tableau
        return setActions(oldActions);
      });

      // Copie du tableau sur lequel on suprime l'action
      let copy = [...actions];
      copy = copy.filter((a) => a.id !== id);
      return setActions(copy);
    }
    // on retourne quelque chose car safari bug sur les fonction async
    return false;
  };

  return (
    <div className="container h90vh">
      <ToastContainer />
      {/* Si form = {} || {objet plain} alors je l'affiche sinon j'affiche le composant Actions */}
      {form ? (
        <ActionForm
          // action est = au contenu du state form
          action={form}
          onClose={() => setForm(false)}
          onSubmit={(a) => handleSubmit(a)}
        />
      ) : (
        <>
          <h2 className="dark">Listes des actions marketing</h2>
          {/* L'objet vide dans setForm récupérera les données modifiées ou nouvelles qui seront entrées dans le formulaire */}
          <button
            className="btn mrg-b20 w120 center"
            onClick={() => setForm({})}
          >
            Nouvelle action
          </button>

          <table className="tableau-style">
            <thead>
              <tr>
                <th>Nom de l'action</th>
                <th>Email formateur</th>
                <th>Média</th>
                <th>Mots clés</th>
                <th>Url Cible</th>
                <th>Nbs d'envois</th>
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
                  <td>{a.emailFormateur}</td>
                  <td> {a.media}</td>
                  <td> {a.tags}</td>
                  <td>
                    <a href={a.target_url} target="_blank" rel="noopener noreferrer">{a.target_url}</a>
                  </td>
                  <td>{a.shipments}</td>
                  <td>{a.clicks}</td>
                  <td>https://formations.learnylib.com/st/{a.id}</td>
                  <td>{a.new_accounts}</td>
                  <td>{a.enrollments}</td>
                  <td>{a.value}</td>
                  <td>
                    {/* Les données qu'il y a dans setForm(a) correspondent à l'action en cours. */}
                    <button className="btn mrg-5" onClick={() => setForm(a)}>
                      <img src={pen} alt="modification" />
                    </button>
                    <button
                      className="btn mrg-5"
                      onClick={() => handleDelete(a.id)}
                    >
                      <img src={trash} alt="supression" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default Actions;
